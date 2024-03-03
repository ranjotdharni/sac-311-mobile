import * as Location from 'expo-location';

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
