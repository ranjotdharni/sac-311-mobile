import * as Location from 'expo-location';

export const getLocationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  } catch (error) {
    console.error('Error getting permissions: ', error);
    return false;
  }
};

export const getCurrentLocation = async (): Promise<Location.LocationObject | null> => {
  try {
    const permissionGranted = await getLocationPermission();
    if (!permissionGranted) {
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
