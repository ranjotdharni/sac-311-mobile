import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ButtonPanel from '../(components)/Profile/ButtonPanel';
import SearchBar from '../(components)/Profile/SearchBar';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  const navigateToProfile2 = () => {
    (navigation.navigate as (screen: string) => void)('Profile2');
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Service Requests Lookup</Text>
      <SearchBar />
      <View style={styles.imageContainer}>
        <Text style={styles.loginText}>Login to see your requests.</Text>
        <View style={styles.textContainer}>
          <Text style={styles.createAccountText}>
            Create an account or login to see requests you have made or followed.
          </Text>
        </View>
      </View>
      <ButtonPanel onPressLoginSignup={navigateToProfile2} />
    </View>
  );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30, // Increase this value to make the text bigger
        fontWeight: 'bold',
        color: '#2F2DA3',
        fontFamily: 'JBM',
        textAlign: 'center',
        marginTop: 50,
    },
    imageContainer: {
        flex: 0, // adjust this value to move the image up or down
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    image: {
        width: 75, // or whatever size you want
        height: 75, // or whatever size you want
        resizeMode: 'contain', // this will make sure the image is scaled correctly
    },
    loginText: {
        fontSize: 20, // adjust this value to change the size of the text
        fontFamily: 'JBM', // same font as the title
        color: '#BEA315', // color code provided by you
        textAlign: 'center', // center align the text
        marginTop: 60,
    },
    createAccountText: {
        fontSize: 20, // adjust this value to change the size of the text
        fontFamily: 'JBM', // same font as the title and login text
        color: '#000000', // black color code
        textAlign: 'center', // center align the text
        marginTop: 15,
    },
    textContainer: {
        width: '80%', // adjust this value to change the width of the container
    },
});