import React, { useState } from 'react';
import { Link, usePathname } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonPanel from '../(components)/Profile/ButtonPanel';
import { globalFont, global, salesforceDevelopmentSignature } from '../../customs';
import * as Notifications from 'expo-notifications';
import * as DocumentPicker from 'expo-document-picker'; // Import DocumentPicker
import { useEffect } from 'react';

export default function Profile() {
  const navigation = useNavigation();
  const [selectedFile, setSelectedFile] = useState<DocumentPicker.DocumentPickerResult | null>(null); // State to store the selected file

  useEffect(() => {
    // This will ask for permission when the component mounts
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission for notifications was denied');
        return;
      }

      // Set up a notification channel on Android
      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
    })();
  }, []);

  const navigateToProfile2 = () => {
    (navigation.navigate as (screen: string) => void)('Profile2');
  };

  const handleTestButtonPress = async () => {
    try {
      console.log("Attempting to send push notification...");
      // Get the Expo push token
      const expoPushToken = (await Notifications.getExpoPushTokenAsync()).data;
      // Construct the notification data
      const message = {
        to: expoPushToken,
        sound: 'default',
        title: 'Test Notification',
        body: 'This is a test notification!',
      };
      // Send the push notification
      let response = await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Accept-encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      let data = await response.json();
      console.log("Push notification sent successfully:", data);
  
      // Check for errors in the response and implement retry logic
      if (data.data.status === 'error') {
        console.error("Error sending push notification:", data.data.message);
      }
    } catch (error) {
      console.error("Error while trying to send push notification:", error);
    }
  };

  const handleAnotherButtonPress = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync(); // Open document picker
      if (!result.canceled && result.assets?.length > 0) {
        console.log("File selected:", result.assets[0].uri);
        setSelectedFile(result);
        // Handle the file here, such as uploading to server or processing
      } else {
        console.log("Document picking cancelled or no file selected");
      }
    } catch (error) {
      console.error("Error while selecting document:", error);
      Alert.alert('Error', 'An error occurred while selecting document.');
    }
  };

  console.log("Profile component rendered.");
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageContainer}>
        <Text style={styles.loginText}>Login to see your requests.</Text>
        <View style={styles.textContainer}>
          <Text style={styles.createAccountText}>
            Create an account or login to see requests you have made or followed.
          </Text>
        </View>
      </View>
      <ButtonPanel onPressLoginSignup={navigateToProfile2} />
      <TouchableOpacity style={styles.testButton} onPress={handleTestButtonPress}>
        <Text style={styles.testButtonText}>NOTIFICATION TEST</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.anotherButton} onPress={handleAnotherButtonPress}>
        <Text style={styles.anotherButtonText}>FILE TEST</Text>
      </TouchableOpacity>
      {selectedFile && (
        <Text style={styles.selectedFileText}>
          Selected File: {selectedFile.assets?.[0].uri}
        </Text>
      )}
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
  testButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  testButtonText: {
    fontSize: 16,
    fontFamily: globalFont.chosenFont,
    textAlign: 'center',
  },
  anotherButton: {
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  anotherButtonText: {
    fontSize: 16,
    fontFamily: globalFont.chosenFont,
    textAlign: 'center',
  },
  selectedFileText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: globalFont.chosenFont,
    textAlign: 'center',
  },
  NewRequestButton: {
    width: '94.5%',
    height: '7%',
    marginVertical: '3%',
    borderRadius: 10,
    backgroundColor: 'transparent',
    shadowColor: "#000", 
    top: '30%',
    left: '3%',
  },
  NewRequestLink: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2
  },
});
