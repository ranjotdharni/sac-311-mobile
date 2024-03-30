import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import CustomText from '../CustomText';
import { fontGetter, global, salesforceDevelopmentSignature } from '../../../customs';
import { fontSetter } from '../../../customs';
import { globalFont } from '../../../customs';
import { Link, usePathname, router } from "expo-router";

interface ButtonProps {
  text: string;
  buttonColor: string;
  textColor: string;
  onPress: () => void; // Add onPress prop
}

function Button({ text, buttonColor, textColor, onPress }: ButtonProps) {
  return (
    <View style={{ ...styles.ButtonWrapper, backgroundColor: buttonColor }}>
      <TouchableOpacity style={styles.TouchableWrapper} onPress={onPress}>
        <CustomText nol={0} font={fontGetter()} style={{ ...styles.ButtonText, color: textColor }} text={text} />
      </TouchableOpacity>
    </View>
  );
}

function ButtonDumb({ text, buttonColor, textColor, onPress }: ButtonProps) {
  return (
    <View style={{ ...styles.ButtonWrapper, backgroundColor: buttonColor }}>
      <TouchableOpacity style={styles.TouchableWrapper} onPress={onPress}>
        <Text style={{ ...styles.ButtonText, color: textColor }}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function ButtonPanel({ onPressLoginSignup }: { onPressLoginSignup: () => void },) {
  return (
    <View style={styles.ButtonPanelWrapper}>
      <Button text="Login or Signup" buttonColor="white" textColor="grey" onPress={onPressLoginSignup} />
      <ButtonDumb
        text="Submit New Request"
        buttonColor={global.baseBlue100}
        textColor="white"
        onPress={() => {}}
      >
        <Link
          to={{
            pathname: '/request/Type',
            params: {
              Subject: 'salesforceDevelopmentSignature',
              Service_Type__c: '', // CategoryLevel1
              Sub_Service_Type__c: '', // CategoryLevel2
              Council_District__c: '', // CouncilDistrictNumber
              GIS_Street_Address__c: '', // CrossStreet
              GIS_Zip_Code__c: '', // ZIP
              Address__c: '', // Address
              GIS_System_Info__c: '311 Phone', // "<Data_Source>  <SourceLevel1>"
              GIS_Neighborhood_Name__c: '', // Neighborhood
              description: '',
              Address_Geolocation__Latitude__s: 0,
              Address_Geolocation__Longitude__s: 0,
              returnRoute: usePathname().replace('/', ''),
            },
          }}
          style={styles.NewRequestLink}
        >
          <Text style={styles.requestText}>Submit New Request</Text>
        </Link>
      </ButtonDumb>
    </View>
  );
}

const styles = StyleSheet.create({
    ButtonPanelWrapper: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.22,
        backgroundColor: 'transparent', // Change this line
        position: 'absolute',
        bottom: 110,
        alignItems: 'center', // added this line to center the buttons
    },
    
    ButtonWrapper: {
        width: '92.5%',
        height: '20%',
        marginVertical: '3%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        shadowColor: "#000", 
        shadowOffset: { 
            width: -2,
            height: 2,
        },
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 7.5, 
    },
    
    TouchableWrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000', // Add this line
    },     

    ButtonText: {
        fontSize: Dimensions.get('screen').width * 0.045,
        fontFamily: globalFont.chosenFont
    },
})