import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { globalFont, globalColorTheme } from '../../customs';

export default function Profile() {
  const router = useRouter();

  const navigateToProfile2 = () => {
    (router.push('./Profile2'));
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('src/assets/png/icon.png')} style={[styles.headerImage, {backgroundColor:globalColorTheme.blue}]} />
      <View style={[styles.container, {backgroundColor:globalColorTheme.backgroundColor}]}>
        <Text style={[styles.loginText, {color:globalColorTheme.color}]}>Login/Signup</Text>
        <View style={[styles.textWrapper, {backgroundColor:globalColorTheme.backgroundColor}]}>
          <Text style={[styles.createAccountText, {color:globalColorTheme.color}]}>
            Hey! Want in? Sign up and log in with your City of Sacramento account. With an account, you can track your requests, save contact info, and follow others' updates.
          </Text>
        </View>
        <TouchableOpacity onPress={navigateToProfile2} style={[styles.button, {backgroundColor:globalColorTheme.blue}]}>
          <Text style={[styles.buttonText, {color:globalColorTheme.text}]}>Login/Signup</Text>
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
    resizeMode: 'center',
    width: '100%',
    height: '10%', 
    paddingHorizontal: 50,
    paddingVertical: 100,
    marginBottom: -10,
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
    fontSize: 20,
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
    marginBottom: 150,
  },
});
