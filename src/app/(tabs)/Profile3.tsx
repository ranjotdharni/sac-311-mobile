import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, View, Text, StyleSheet, Pressable, Dimensions, Image, TextInput } from 'react-native';
import { shadowUniversal, global } from "../../dummy";
import { MaterialIcons } from "@expo/vector-icons"

/*
TODO:
- scroll functionality
    - screen should snap so that input field automatically sits above keyboard
- shadows on boxes behind input fields (inputBacking)
    - change background color of main container (container) to white once shadows are implemented
- undo, save, delete changes
*/

export default function Profile3(){
    const navigation = useNavigation();

    const [userAddress, setUserAddress] = useState('');
    const [aptNum, setAptNum] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [firstPart, setFirstPart] = useState('');             //                                      //
    const [secondPart, setSecondPart] = useState('');           //                                      //
    const [thirdPart, setThirdPart] = useState('');

    const secondPartRef = useRef<TextInput>(null);              //  logic for nicer phone number input  //
    const thirdPartRef = useRef<TextInput>(null);               //

    const handleFirstPartComplete = (text: string) => {         //
        setFirstPart(text);
        if (text.length === 3 && secondPartRef.current) {       //                                      //
          secondPartRef.current.focus();
        }
      };
    
    const handleSecondPartComplete = (text: string) => {        //                                      //
        setSecondPart(text);
        if (text.length === 3 && thirdPartRef.current) {        //                                      //
            thirdPartRef.current.focus();
        }
    };
    

    //go back to initial profile screen if user presses "Sign out" button
    const navigateToProfile = () => {
        (navigation.navigate as (screen: string) => void)('Profile');
    };

    //navigate to "Business" page when "Business" button is pressed
    const handleBusinessPress = () => {
        (navigation.navigate as (screen: string) => void)('Business');
    };

    // sign out button takes user back to login page
    const handleSignOutPress = () => {
        (navigation.navigate as (screen: string) => void)('Profile2');
    };
        

    return (
        <View style={styles.container}>
            
            <View style={styles.foreheadWrapper}>
                <Pressable style={styles.foreheadButton}>
                    <Text style={styles.foreheadProfileText}>Profile</Text>
                </Pressable>

                <View style={styles.foreheadSeparator} />

                <Pressable style={styles.foreheadButton} onPress={handleBusinessPress}>
                    <Text style={styles.foreheadBusinessText}>Business</Text>
                </Pressable>
            </View>

            <View style={styles.bigSeparator} />
            
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>My Profile</Text>
                <Pressable style={styles.signOutButton} onPress={handleSignOutPress}>
                    <Image style={styles.loginIcon} source={require('../../assets/png/login1.png')} />{/*login1.png from icons8.com*/}
                    <Text style={styles.signOutText}>Sign Out</Text>
                </Pressable>
            </View>

            <View style={styles.bigSeparator} />

            <Text style={styles.subtitle}>Personal</Text>
            <View style={styles.infoWrapper}>
                <View style={styles.inputBacking}>
                    <Text style={styles.inputTextTitle}>First Name</Text>
                    <TextInput
                        style={styles.userInput}
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholder="Enter your first name"
                        placeholderTextColor='#9B9B9B'
                    />

                    <View style={styles.infoSeparator} />

                    <Text style={styles.inputTextTitle}>Last Name</Text>
                    <TextInput
                        style={styles.userInput}
                        value={lastName}
                        onChangeText={setLastName}
                        placeholder="Enter your last name"
                        placeholderTextColor='#9B9B9B'
                    />

                    <View style={styles.infoSeparator} />

                    <Text style={styles.inputTextTitle}>Email</Text>
                    <TextInput
                        style={styles.userInput}
                        value={userEmail}
                        onChangeText={setUserEmail}
                        placeholder="Enter your email address"
                        placeholderTextColor='#9B9B9B'
                    /> 

                    <View style={styles.infoSeparator} />

                    <Text style={styles.inputTextTitle}>Phone Number</Text>
                    <View style={styles.phoneInputContainer}>
                        <Text style={styles.phoneFormat}>(</Text>
                        <TextInput
                            style={styles.phoneInput}
                            value={firstPart}
                            onChangeText={handleFirstPartComplete}
                            maxLength={3}
                            keyboardType="number-pad"
                            placeholder="123"
                            placeholderTextColor='#9B9B9B'
                        />
                        <Text style={styles.phoneFormat}>)  -</Text>
                        <TextInput
                            ref={secondPartRef}
                            style={styles.phoneInput}
                            value={secondPart}
                            onChangeText={handleSecondPartComplete}
                            maxLength={3}
                            keyboardType="number-pad"
                            placeholder="456"
                            placeholderTextColor='#9B9B9B'
                        />
                        <Text style={styles.phoneFormat}> - </Text>
                        <TextInput
                            ref={thirdPartRef}
                            style={styles.phoneInputLast}
                            value={thirdPart}
                            onChangeText={setThirdPart}
                            maxLength={4}
                            keyboardType="number-pad"
                            placeholder="7890" 
                            placeholderTextColor='#9B9B9B'
                        />                        
                    </View>{/*phoneInputContainer*/}
                    <View style={styles.infoSeparator} />
                </View>{/*inputBacking*/}       
            </View>{/*infoWrapper*/}

            <Text style={styles.subtitle}>Address (Optional)</Text>
            <View style={styles.infoWrapper}>
                <View style={styles.inputBacking}>

                    <Text style={styles.inputTextTitle}>Street Address</Text>
                    <TextInput
                        style={styles.userInput}
                        value={userAddress}
                        onChangeText={setUserAddress}
                        placeholder="Example: 1018 J St."
                        placeholderTextColor='#9B9B9B'
                    /> 

                    <View style={styles.infoSeparator} />

                    <Text style={styles.inputTextTitle}>Apartment/Suite/Other</Text>
                    <TextInput
                        style={styles.userInput}
                        value={aptNum}
                        onChangeText={setAptNum}
                        placeholder="Ex. #2, 247"
                        placeholderTextColor='#9B9B9B'
                    />

                    <View style={styles.infoSeparator} />

                    <Text style={styles.inputTextTitle}>Zip Code</Text>
                    <TextInput
                        style={styles.userInput}
                        value={aptNum}
                        onChangeText={setAptNum}
                        placeholder="Ex. 98501"
                        placeholderTextColor='#9B9B9B'
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        //justifyContent: 'flex-start',
        //backgroundColor: '#FFF',
    },
    addressWrapper: {

    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    phoneInput: {
        height: 40,
        width: 50,
        textAlign: 'center',
        color: '#676767',
        fontSize: 18,
        fontFamily: 'JBM',
    },
    phoneInputLast: {
        height: 40,
        width: 60, // Adjust the width as needed for the last field (four digits)
        textAlign: 'center',
        color: '#676767',
        fontSize: 18,
        fontFamily: 'JBM',
    },
    phoneFormat: {
        fontSize: 16,
    },
    infoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1,
    },
    userInput: {// user input text
        color: '#676767',
        fontSize: 18,
        fontFamily: 'JBM',
        textAlign: 'left',
    },
    inputBacking: {// white rectangle behind personal info section
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        width: '95%',
        backgroundColor: '#FFF',
    },
    infoSeparator: {
        width: '100%',
        height: 2,
        backgroundColor: '#D9D9D9',
        //paddingVertical: 2
    },
    inputTextTitle: {
        fontSize: 13,
        fontFamily: 'JBM',
        textAlign: 'left',
        color: '#9B9B9B',
        //paddingVertical: 10,
        marginTop: 15,
        marginBottom: 5
    },
    bigSeparator: {
        width: '100%',
        height: 2,
        backgroundColor: '#D9D9D9',
    },
    titleText: {
        //fontWeight: 'bold',   //bold makes this font look weird o.O
        fontFamily: 'JBM',
        fontSize: 26,
        color: '#2F2DA3',
        textAlign: 'left',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    titleWrapper: {// My Profile / Sign Out button wrapper
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loginIcon: {
        width: 20,
        height: 20,
        marginRight: 2,
    },
    signOutButton: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    signOutText: {
        color: '#6F6F6F',
        textAlign: 'right',
        paddingHorizontal: 15,
        paddingVertical: 8,
        fontSize: 17,
        fontFamily: 'JBM',
    },
    foreheadWrapper: {// forehead button wrapper
        flexDirection: 'row', 
        width: Dimensions.get('screen').width,
        height: 55,
        backgroundColor: '#FFF',
    },
    foreheadButton: {//forehead buttons style
        flex: 1,
        justifyContent: 'space-evenly',
    },
    foreheadSeparator: { // line between 'Profile' and 'Business' in forehead
        width: 2, 
        alignSelf: 'stretch',
        backgroundColor: '#D9D9D9',
        alignItems: 'center'
    },
    subtitle: {
        fontFamily: 'JBM',
        fontSize: 18,
        color: '#BEA315',
        textAlign: 'left',
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    infoHeader: {
        fontSize: 26,
        color: '#2F2DA3',
        textAlign: 'left',
    },
    foreheadProfileText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'JBM',
        fontSize: 18,
        color: '#BEA315',
        height: '100%',
        paddingVertical: 12
    },
    foreheadBusinessText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'JBM',
        fontSize: 18,
        color: '#6F6F6F',
        height: '100%',
        paddingVertical: 12
    }
})