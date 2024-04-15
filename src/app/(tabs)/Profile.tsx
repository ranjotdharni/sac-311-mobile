import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { globalFont, globalColorTheme } from '../../customs';

export default function Profile() {
  const navigation = useNavigation();

  const navigateToProfile2 = () => {
    (navigation.navigate as (screen: string) => void)('Profile2');
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('src/assets/png/splash.png')} style={styles.headerImage} />
      <View style={styles.container}>
        <Text style={styles.loginText}>Login/Signup</Text>
        <View style={styles.textWrapper}>
          <Text style={styles.createAccountText}>
            Hey! Want in? Sign up and log in with your City of Sacramento account. With an account, you can track your requests, save contact info, and follow others' updates.
          </Text>
        </View>
        <TouchableOpacity onPress={navigateToProfile2} style={styles.button}>
          <Text style={styles.buttonText}>Login/Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginTop: 0, 
  },
  headerImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 225, 
  },
  textWrapper: {
    paddingHorizontal: 5,
    maxWidth: 500,
    marginBottom: 20,
  },
  button: {
    backgroundColor: globalColorTheme.blue,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginBottom: 75,
  },
  loginText: {
    fontSize: 25,
    fontFamily: globalFont.chosenFont,
    color: globalColorTheme.color,
    textAlign: 'center',
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: globalFont.chosenFont,
    color: 'white',
    textAlign: 'center',
  },
  createAccountText: {
    fontSize: 18,
    fontFamily: globalFont.chosenFont,
    color: globalColorTheme.color,
    textAlign: 'center',
    textShadowColor: 'white',
    textShadowRadius: 1,
    marginBottom: 250,
  },
});
