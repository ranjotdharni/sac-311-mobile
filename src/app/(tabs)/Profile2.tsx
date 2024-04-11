import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, Pressable} from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { globalFont, global } from "../../customs";
import { FIREBASE_APP } from '../../FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUserId } from '../../global';

//login page
export default function Profile2() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const auth = getAuth(FIREBASE_APP);

    const handleSignIn = () => {
        if (email.trim() === '' || password.trim() === '') {
            console.log("Email or password cannot be empty");
            return;
        }

        console.log("Attempting to sign in with email: ", email, " and password: ", password);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //signed in successfully
            const user = userCredential.user;

            console.log("Signed in successfully: ", user.uid);

            setUserId(user.uid);
            //stuff that happens after successful sign in
            (navigation.navigate as (screen: string) => void)('Profile3');
        })
        .catch((error) => {
            //error messages here
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Sign in error:", error.message);
            alert(`Login failed: ${error.message}`);
        });
    };

    //navigates to the profile creation screen
    const accountCreationPress = () => {
      (navigation.navigate as (screen: string) => void)('Profile0');
    };
  
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image source={require('src/assets/png/icon.png')} style={styles.imageContainer} />
        </View>
        <Text style={{ fontSize: 16, paddingTop: "50%" }}>Log in to view your profile information.</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={(val) => setPassword(val)}
        />
        <Pressable style={styles.button} onPress = {handleSignIn}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
        <Pressable style={{ ...styles.createAcctButton, marginTop: 0 }} onPress={accountCreationPress}>
          <Text style={styles.buttonText}>Create an Account</Text>
        </Pressable>
        <Text style={{ }}>Forgot your password?</Text>
        <Pressable>
          <Text style={{ color: '#2069bd' }}>Click here.</Text>
        </Pressable>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      backgroundColor: global.baseBackground100,
    },
    imageContainer:{
      resizeMode: 'contain', 
      width: '100%', 
      marginTop: 1,
    },
    backgroundContainer:{
 position: 'absolute',
    top: -70,
    bottom: 600,
    left: 0,
    right: 0,
    backgroundColor: global.baseBlue100,
    },
    buttonText:{
      fontFamily: globalFont.chosenFont,
      color: global.baseWhite100,
      textAlign: 'center',
      fontSize: 18
    },
    input: {
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: global.baseBlue100,
        backgroundColor: global.baseWhite100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '85%',
        height: '6%',
        paddingVertical: 8,
        paddingHorizontal: 30,
    },
    button: {
      padding: 22,
      textAlign: "center",
      width: '60%',
      borderRadius: 50,
      backgroundColor: '#1b3763',
      color: global.baseWhite100
    },
    createAcctButton:{
      padding: 22,
      textAlign: "center",
      width: '60%',
      borderRadius: 50,
      backgroundColor: global.baseBlue200,
      color: global.baseWhite100
    }
  });  