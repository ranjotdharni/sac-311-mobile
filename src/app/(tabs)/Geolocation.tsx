import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getLocationPermission, getCurrentLocation } from '../(components)/LocationService';
import { LocationObject } from 'expo-location';

export default function Geoloc() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      const permissionGranted = await getLocationPermission();

      if (permissionGranted) {
        const currentLocation = await getCurrentLocation();
        setLocation(currentLocation);
      }
    };

    fetchLocation();
  }, []);

  return (
    <View style = {styles.container}>
      {location ? (
        <>
          <Text style = {styles.centerText}>Latitude: {location.coords.latitude}</Text>
          <Text style = {styles.centerText}>Longitude: {location.coords.longitude}</Text>
        </>
      ) : (
        <Text>Getting location</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    centerText:{
        textAlign: 'center',
    },
    buttonContainer:{
        marginTop: 10,
        padding: 10,
        borderRadius: 10, 
        width: '40%',
    },
});

