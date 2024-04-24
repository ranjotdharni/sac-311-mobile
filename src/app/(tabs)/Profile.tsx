import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import { globalFont, global, salesforceDevelopmentSignature } from '../../customs';
import { globalColorTheme } from '../../customs';

export default function Profile() {
  const router = useRouter();
  const navigateToProfile2 = () => {
    router.push({pathname:'/Profile2'});
  };

  console.log("Profile component rendered.");
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
      <TouchableOpacity onPress={navigateToProfile2} />
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
