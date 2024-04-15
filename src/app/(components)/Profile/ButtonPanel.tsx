import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from '../CustomText';
import { fontGetter, globalColorTheme } from '../../../customs';
import { globalFont } from '../../../customs';

interface ButtonProps {
  text: string;
  buttonColor: string;
  textColor: string;
  onPress: () => void; // Add onPress prop
}

function Button({ text, buttonColor, textColor, onPress }: ButtonProps) {
  return (
    <View style={{ ...styles.ButtonWrapper, backgroundColor: buttonColor, zIndex: 1 }}>
      <TouchableOpacity style={styles.TouchableWrapper} onPress={onPress}>
        <CustomText nol={0} font={fontGetter()} style={{ ...styles.ButtonText, color: textColor }} text={text} />
      </TouchableOpacity>
    </View>
  );
}

export default function ButtonPanel({ onPressLoginSignup }: { onPressLoginSignup: () => void }) {
  return (
    <View style={[styles.ButtonPanelWrapper, { backgroundColor: globalColorTheme.backgroundColor }]}>
      <Button text="Login/Signup" buttonColor={globalColorTheme.blue} textColor={globalColorTheme.text} onPress={onPressLoginSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonPanelWrapper: {
    position: 'absolute',
    bottom: 90, // Adjust this value to move the panel up from the bottom of the screen
    width: '100%', // Take full width of the screen
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  ButtonWrapper: {
    width: '92.5%',
    height: 60,
    marginVertical: '3%',
    borderRadius: 25,
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
    fontSize: 25,
    fontFamily: globalFont.chosenFont
  }
});
