import { View, Text, StyleSheet, TextInput, Pressable} from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { globalFont } from "../../customs";
import { global } from "../../customs";
import { FIREBASE_APP } from '../../FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FIRESTORE_DB } from '../../FirebaseConfig';
import { doc, setDoc } from "firebase/firestore"; 
import { userId, setUserId } from '../../global';

//profile creation
export default function Profile0()
{

    const auth = getAuth(FIREBASE_APP);

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passConfirmation, setPassConfirmation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const navigation = useNavigation();

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //user is signed in
            const user = userCredential.user;
            //setUserId(user.uid);
            createUserProfile(user.uid, { fName, lName, email, phoneNumber, address, city, state, zip });
            (navigation.navigate as (screen: string) => void)('Profile3');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            //insert error notification here
        });
    };

    const createUserProfile = async (userId: any, profileData: any) => {
        try {
            await setDoc(doc(FIRESTORE_DB, "users", userId), profileData);
            console.log("Profile created/updated");///////////////////////////////////////////testing
        } catch (error) {
            console.error("Error creating user profile:", error);/////////////////////////////testing
        }
    };

    //This will check if the account creation attempt will be a unique account when we get access to salesforce
    /*
    const checkIfUnique = () => {
        return true;
    }
    */

    //Currently the cancel and create account buttons just lead back to other profile pages
    const cancelPress = () => {
        (navigation.navigate as (screen: string) => void)('Profile2');
    };

    /*
    const createPress = () => {
        if((password.match(passConfirmation) === null) || (passConfirmation.match(password) === null)){ //checks that both passwords are the same
            window.alert('Passwords must be identical');
        }else{
            if(checkIfUnique()){
                createAccount();
                (navigation.navigate as (screen: string) => void)('Profile');
            };
        }
        
    };
    */

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account Creation</Text>

            <View style={styles.rowTextContainer}>
                <Text style={styles.firstRowFieldText}>First Name</Text>
                <Text style={{...styles.firstRowFieldText, gap: 20}}>Last Name</Text>
            </View>

            <View style={styles.rowContainer}>
                <TextInput 
                style={{...styles.multipleRowInput, width: '40%'}}
                placeholder='Enter First Name'
                onChangeText={(val) => setFName(val)}>
                </TextInput>
                <TextInput 
                style={{...styles.multipleRowInput, width: '40%'}}
                placeholder='Enter Last Name'
                onChangeText={(val) => setLName(val)}>
                </TextInput>
            </View>

            <Text style={styles.fieldText}>Email</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter email@address.com'
            onChangeText={(val) => setEmail(val)}>
            </TextInput>

            <Text style={styles.fieldText}>Password</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter Password (8 characters or more)'
            onChangeText={(val) => setPassword(val)}>
            </TextInput>

            <Text style={styles.fieldText}>Confirm Password</Text>
            <TextInput
            style={styles.input}
            placeholder='Re-Enter Password'
            onChangeText={(val) => setPassConfirmation(val)}>
            </TextInput>

            <Text style={styles.fieldText}>Phone Number</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter Phone Number'
            onChangeText={(val) => setPhoneNumber(val)}>
            </TextInput>

            <Text style={styles.fieldText}>Address</Text>
            <TextInput
            style={styles.input}
            placeholder='Enter Street Address'
            onChangeText={(val) => setAddress(val)}>
            </TextInput>

            <Text style={styles.fieldText}>City/State/ZIP</Text>
            <View style={styles.rowContainer}>
                <TextInput 
                style={{...styles.multipleRowInput, width: '31%'}}
                placeholder='Enter City'
                onChangeText={(val) => setCity(val)}>
                </TextInput>
                <TextInput 
                style={{...styles.multipleRowInput, width: '15%'}}
                placeholder='State'
                onChangeText={(val) => setState(val)}>
                </TextInput>
                <TextInput
                style={{...styles.multipleRowInput, width: '31%'}}
                placeholder='Enter ZIP'
                onChangeText={(val) => setZip(val)}>
                </TextInput>
            </View>

            <View style={styles.rowContainer}>
                <Pressable style={{...styles.button, backgroundColor: global.baseBlue200}} onPress={cancelPress}>
                    <Text style={{color: '#ffffff', textAlign: 'center'}}>Cancel</Text>
                </Pressable>
                <Pressable style={{...styles.button, backgroundColor: global.baseBlue100}} onPress={handleSignUp}>
                    <Text style={{color: '#ffffff', textAlign: 'center'}}>Create Account</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#2F2DA3',
        fontFamily: globalFont.chosenFont,
        textAlign: 'center',
        marginBottom: '1%'
    },
    container: {
        flex: 1,
        marginTop: '15%',
        alignItems: 'center',
        gap: 2,
        backgroundColor: global.baseBackground100,
    },
    rowContainer: {
        padding: 0,
        flexDirection: 'row',
        gap: 6
    },
    rowTextContainer: {
        flexDirection: 'row',
        gap: 110
    },
    input: {
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: global.baseBlue100,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '96%',
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    multipleRowInput: {
        alignItems: 'center',
        marginTop: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: global.baseBlue100,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '96%',
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    button: {
      padding: 15,
      textAlign: 'center',
      width: '40%',
      borderRadius: 50,
      color: '#ffffff',
      marginTop: 20
    },
    firstRowFieldText: {
        fontSize: 16,
        fontFamily: globalFont.chosenFont,
        color: '#2F2DA3',
        textAlign: 'center',
    },
    fieldText: {
        fontSize: 16,
        fontFamily: globalFont.chosenFont,
        color: '#2F2DA3',
        alignSelf: "flex-start",
        paddingTop: 5,
        paddingLeft: 30,
        paddingRight: 59,
    }
  });  