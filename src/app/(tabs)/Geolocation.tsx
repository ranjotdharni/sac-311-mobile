import { getLocationPermission, getCurrentLocation, getClosestRequests } from '../(components)/LocationService';
import { LocationObject } from 'expo-location';
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { dummyDataHome, generateEndpointUrl, responseType } from "../../customs";
import Request from "../(components)/Request";
import { global } from "../../customs";
import { useEffect, useState } from "react";
import { globalFont } from "../../customs";


//Geolocation for gathering requests closest to the user

export default function Geoloc() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [closestRequests, setClosestRequests] = useState<Array<responseType>>([]);

  useEffect(() => {
    const fetchLocation = async () => {
      const permissionGranted = await getLocationPermission();

      if (permissionGranted) {
        const currentLocation = await getCurrentLocation();
        setLocation(currentLocation);
        //print to console
        if (currentLocation) {
          //Bug testing console logs
         /* 
          console.log('Latitude:', currentLocation.coords.latitude);
          console.log('Longitude:', currentLocation.coords.longitude);
          getClosestRequests(currentLocation.coords.latitude, currentLocation.coords.longitude, 10).then((entries) => {
            console.log('Closest requests: ', entries);
          }).catch((error)=>{
            console.error('Error: ', error);
          })*/
          const closestRequestsData = await getClosestRequests(currentLocation.coords.latitude, currentLocation.coords.longitude, 10);

          setClosestRequests(closestRequestsData);
        }
      }
    };

    fetchLocation();
  }, []);

  //Style view for testing purposes
  return (
    <View style = {styles.listWrapper}>
      {
        closestRequests.map(item => {
          return <Request key={item.attributes.ReferenceNumber} data={item} width='90%' height={Dimensions.get('screen').height *0.2} compact={false}/>
        })
      }
    </View>
  )
}

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
    listWrapper: {
      backgroundColor: global.baseBackground100,
      position: 'relative',
      width: Dimensions.get('screen').width,
      height: 'auto',
      alignItems: 'center',
      overflow: 'visible',
      
  },

  listTitleWrapper: {
      width: '100%',
      height: Dimensions.get('screen').height * 0.05,
  },

  listTitle: {
      color: 'white',
      alignSelf: 'flex-start',
      fontFamily: globalFont.chosenFont,
      fontSize: 30,
      padding: 0,
      backgroundColor: global.baseGold100,
      borderRadius: 8,
      overflow: 'hidden',
      paddingLeft: '2%',
      paddingRight: '2%',
      marginLeft: '6%',
      position: 'relative',
      top: '0.75%',
  },
});

