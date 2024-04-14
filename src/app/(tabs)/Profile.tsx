import React from 'react';
import { Link, usePathname } from "expo-router";
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonPanel from '../(components)/Profile/ButtonPanel';
import { globalFont, global, salesforceDevelopmentSignature } from '../../customs';
import { globalColorTheme } from '../../customs';

export default function Profile() {
  const navigation = useNavigation();

  const navigateToProfile2 = () => {
    (navigation.navigate as (screen: string) => void)('Profile2');
  };

  //console.log("Profile component rendered.");
  return (
    <View style={{ flex: 1 , backgroundColor:globalColorTheme.backgroundColor}}>
      <View style={styles.imageContainer}>
        <Text style={styles.loginText}>Login to see your requests.</Text>
        <View style={styles.textContainer}>
          <Text style={[styles.createAccountText,{color:globalColorTheme.color}]}>
            Create an account or login to see requests you have made or followed.
          </Text>
        </View>
      </View>
      <ButtonPanel onPressLoginSignup={navigateToProfile2} />
      <View style={styles.NewRequestButton}>
        <Link 
          href={{
            pathname: '/(request)/Type', 
            params: {
              Subject: salesforceDevelopmentSignature,
              Service_Type__c: '', 
              Sub_Service_Type__c: '', 
              Council_District__c: '', 
              GIS_Street_Address__c: '', 
              GIS_Zip_Code__c: '', 
              Address__c: '', 
              GIS_System_Info__c: '311 Phone', 
              GIS_Neighborhood_Name__c: '', 
              description: '',                                                                
              Address_Geolocation__Latitude__s: 0,
              Address_Geolocation__Longitude__s: 0,
              returnRoute: usePathname().replace('/', '')
            }
          }} 
          style={styles.NewRequestLink} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2F2DA3',
    fontFamily: globalFont.chosenFont,
    textAlign: 'center',
    marginTop: 50,
  },
  imageContainer: {
    flex: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 20,
    paddingTop: 100,
    fontFamily: globalFont.chosenFont,
    color: global.baseGold100,
    textAlign: 'center',
    marginTop: 60,
  },
  createAccountText: {
    fontSize: 20,
    fontFamily: globalFont.chosenFont,
    color: '#000000',
    textAlign: 'center',
    marginTop: 15,
  },
  textContainer: {
    width: '80%',
  },
  NewRequestButton: {
    width: '94.5%',
    height: '7%',
    marginVertical: '3%',
    borderRadius: 10,
    backgroundColor: 'transparent',
    shadowColor: "#000", 
    top: '39%', 
    left: '3%',
    position: 'relative',
  },
  NewRequestLink: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2
  },
});