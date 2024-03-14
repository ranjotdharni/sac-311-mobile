import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonPanel from '../(components)/Profile/ButtonPanel';
import SearchBar from '../(components)/Profile/SearchBar';
import { globalFont } from '../../customs';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

export default function Profile() {
  const navigation = useNavigation();

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

  console.log("Profile component rendered.");
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Service Requests Lookup</Text>
      <SearchBar value='' placeholder='Request Number' />
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
        <Text style={styles.testButtonText}>TEST</Text>
      </TouchableOpacity>
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
    fontFamily: globalFont.chosenFont,
    color: '#BEA315',
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
});
