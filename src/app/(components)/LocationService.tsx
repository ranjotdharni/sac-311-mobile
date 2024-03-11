import * as Location from 'expo-location';
import { generateEndpointUrl, responseType } from '../../customs';

//General functions for gathering geolocation data

//permissions for app to gather location data
export const getLocationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error getting permissions: ', error);
    return false;
  }
};

//checks if permissions are granted, then gets longitude and latitude of device catching errors
export const getCurrentLocation = async (): Promise<Location.LocationObject | null> => {
  try {
    const permissionGranted = await getLocationPermission();
    if (!permissionGranted) {
      //console errors for testing
      console.error('Permissions not granted');
      return null;
    }

    const location = await Location.getCurrentPositionAsync({});
    return location;
  } catch (error) {
    console.error('Error getting current location:', error);
    return null;
  }
};

const deg2rad = (deg:number): number => deg*(Math.PI / 180);

//Haversine formula for calculating distance (probably not necessary but fun)
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371;
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1);
  const a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2)* Math.sin(dLon/1);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return distance;

}

//get 10 requests closest to user to display on home screen
export const getClosestRequests = async (latitude: number, longitude: number, count: number = 10): Promise<responseType[]> => {
  try {
    const testData = await fetchRequestData();
    
    const sortedEntries = testData
      .map((feature) => ({
        attributes: {
          ReferenceNumber: feature.attributes.ReferenceNumber,
          CategoryLevel1: feature.attributes.CategoryLevel1,
          CategoryLevel2: feature.attributes.CategoryLevel2,
          CategoryName: feature.attributes.CategoryName,
          CouncilDistrictNumber: feature.attributes.CouncilDistrictNumber,
          DateCreated: feature.attributes.DateCreated,
          DateUpdated: feature.attributes.DateUpdated,
          DateClosed: feature.attributes.DateClosed,
          CrossStreet: feature.attributes.CrossStreet,
          ZIP: feature.attributes.ZIP,
          SFTicketID: feature.attributes.SFTicketID,
          Address: feature.attributes.Address,
          Data_Source: feature.attributes.Data_Source,
          PublicStatus: feature.attributes.PublicStatus,
          Neighborhood: feature.attributes.Neighborhood,
          SourceLevel1: feature.attributes.SourceLevel1,
        },     
        geometry: {
          x: feature.geometry.x,
          y: feature.geometry.y,
        },
        distance: calculateDistance(latitude, longitude, feature.geometry.y, feature.geometry.x),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, count)

    return sortedEntries;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
}

//fetch data from arcGIS endpoint
async function fetchRequestData(): Promise<Array<responseType>> {
  const query = generateEndpointUrl(`NOT(Address='')`, 100, []);

  try {
    const response = await fetch(query);
    const data = await response.json();
    
    return data.features;
  } catch (error) {
    console.error('Error fetching test data: ', error);
    return [];
  }
}