import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import CustomText from '../CustomText';
import { fontGetter } from '../../../customs';
import { globalFont } from '../../../customs';

interface ButtonProps {
  text: string;
  buttonColor: string;
  textColor: string;
  onPress: () => void; // Add onPress prop
  testID?: string; // Add testID prop for testing
}

function CreateButtonn({ text, buttonColor, textColor, onPress, testID }: ButtonProps) {
  return (
    <View style={{ ...styles.ButtonWrapper, backgroundColor: buttonColor }}>
      <TouchableOpacity
        style={styles.TouchableWrapper}
        onPress={onPress}
        testID={testID} // Assign testID to TouchableOpacity
      >
        <CustomText nol={0} font={fontGetter()} style={{ ...styles.ButtonText, color: textColor }} text={text} />
      </TouchableOpacity>
    </View>
  );
}

export default function CreateButton({ onPressGoToConfirm }: { onPressGoToConfirm: () => void }) {
  return (
    <View style={styles.ButtonPanelWrapper}>
      <CreateButtonn
        text="Jump to Request Confirmation Page"
        buttonColor="#2F2DA3"
        textColor="white"
        onPress={onPressGoToConfirm}
        testID="submit-button" // Assign a unique testID here
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonPanelWrapper: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.22,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 110,
    alignItems: 'center',
  },

  ButtonWrapper: {
    width: '92.5%',
    height: '40%',
    marginVertical: '3%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    shadowColor: '#000',
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
    backgroundColor: '#0000',
  },

  ButtonText: {
    fontSize: Dimensions.get('screen').width * 0.045,
    fontFamily: globalFont.chosenFont,
  },
});
