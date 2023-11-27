import { View, Text, StyleSheet, TextInput, Pressable} from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';


export default function Profile0()
{
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

    //Currently the cancel and create account buttons just lead back to other profile pages
    const cancelPress = () => {
        (navigation.navigate as (screen: string) => void)('Profile2');
    };

    const createPress = () => {
        (navigation.navigate as (screen: string) => void)('Profile');
    };

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
                <Pressable style={{...styles.button, backgroundColor: '#9B9B9B'}} onPress={cancelPress}>
                    <Text style={{color: '#ffffff', textAlign: 'center'}}>Cancel</Text>
                </Pressable>
                <Pressable style={{...styles.button, backgroundColor: '#1b3763'}} onPress={createPress}>
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
        fontFamily: 'JBM',
        textAlign: 'center',
        marginBottom: '5%'
    },
    container: {
        flex: 1,
        marginTop: '15%',
        alignItems: 'center',
        gap: 5,
    },
    rowContainer: {
        padding: 0,
        flexDirection: 'row',
        gap: 6
    },
    rowTextContainer: {
        flexDirection: 'row',
        gap: 75
    },
    input: {
        padding: 15,
        textAlign: 'center',
        width: '80%',
        borderWidth: 0.5,
        borderRadius: 50,
        backgroundColor: '#dfe6f0',
    },
    multipleRowInput: {
        padding: 15,
        textAlign: 'center',
        borderWidth: 0.5,
        borderRadius: 50,
        backgroundColor: '#dfe6f0'
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
        fontSize: 20,
        fontFamily: 'JBM',
        color: '#2F2DA3',
        textAlign: 'center',
    },
    fieldText: {
        fontSize: 20,
        fontFamily: 'JBM',
        color: '#2F2DA3',
        alignSelf: "flex-start",
        paddingLeft: 59,
        paddingRight: 59
    }
  });  