import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, View, ScrollView, Text, StyleSheet, Pressable, Dimensions, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { shadowUniversal, global } from "../../customs";
import { MaterialIcons } from "@expo/vector-icons"
import { globalFont } from "../../customs";

/*
TODO:
- remove navbar when keyboard is open
- shadows on boxes behind input fields and forehead buttons (inputBacking)
    - change background color of main container (container) to white once shadows are implemented
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
    const handleSignOutPress = async () => {
        await AsyncStorage.clear(); // clear user data
        (navigation.navigate as (screen: string) => void)('Profile2');
    };

    // save user data in async storage
    const saveUserData = async () => {
        try {
            await AsyncStorage.setItem('userData', JSON.stringify({
                firstName,
                lastName,
                userEmail,
                userAddress,
                aptNum,
                zipCode,
                firstPart,
                secondPart,
                thirdPart,
            }));
        } catch (error) {
          // handle errors here
        }
    };

    const loadUserData = async () => {
        try {
            const userDataString = await AsyncStorage.getItem('userData');
            if (userDataString !== null) {
                const userData = JSON.parse(userDataString);
                setFirstName(userData.firstName);
                setLastName(userData.lastName);
                setUserEmail(userData.userEmail);
                setFirstPart(userData.firstPart);
                setSecondPart(userData.secondPart);
                setThirdPart(userData.thirdPart);
                setUserAddress(userData.userAddress);
                setAptNum(userData.aptNum);
                setZipCode(userData.zipCode);
            }
        } catch (error) {
          // handle errors here
        }
    };

    // load user data when user clicks back into profile view
    React.useEffect(() => {
        loadUserData();
    }, []);
    
    // undo profile changes
    const revertUserData = async () => { 
        loadUserData();
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

            <View style={styles.bigSeparator} />{/*end of forehead*/}

            <ScrollView>
            <View style={{paddingBottom: 90}}>
            
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
                            value={zipCode}
                            onChangeText={setZipCode}
                            placeholder="Ex. 98501"
                            placeholderTextColor='#9B9B9B'
                        />
                    </View>
                </View>{/*end of address*/}

                <View style={styles.saveDeleteButtons}>{/*save/delete buttons*/}
                    <Pressable style={styles.saveButton} onPress={saveUserData}>
                        <Text style={styles.buttonText}>Save</Text>
                    </Pressable>

                    <Pressable style={styles.deleteButton} onPress={revertUserData}>
                        <Text style={styles.buttonText}>Delete</Text>
                    </Pressable>
                </View>
            </View>
            </ScrollView>
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
    saveDeleteButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10, 
        paddingVertical: 5,
        paddingBottom: 20, 
    },
    saveButton: {
        backgroundColor: '#2F2DA3',
        borderRadius: 15,
        marginRight: 10,
        flex: 0.33,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    deleteButton: {
        backgroundColor: '#E01D11',
        borderRadius: 15,
        flex: 0.33,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: globalFont.chosenFont
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
        fontFamily: globalFont.chosenFont
    },
    phoneInputLast: {
        height: 40,
        width: 60, // Adjust the width as needed for the last field (four digits)
        textAlign: 'center',
        color: '#676767',
        fontSize: 18,
        fontFamily: globalFont.chosenFont
    },
    phoneFormat: {
        fontSize: 16,
    },
    infoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInput: {// user input text
        color: '#676767',
        fontSize: 18,
        fontFamily: globalFont.chosenFont,
        textAlign: 'left',
    },
    inputBacking: {// white rectangle behind personal info sections
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        width: '95%',
        backgroundColor: '#FFF',
    },
    infoSeparator: {
        width: '100%',
        height: 2,
        backgroundColor: '#D9D9D9',
    },
    inputTextTitle: {
        fontSize: 13,
        fontFamily: globalFont.chosenFont,
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
        fontFamily: globalFont.chosenFont,
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
        fontFamily: globalFont.chosenFont
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
        fontFamily: globalFont.chosenFont,
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
        fontFamily: globalFont.chosenFont,
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
        fontFamily: globalFont.chosenFont,
        fontSize: 18,
        color: '#6F6F6F',
        height: '100%',
        paddingVertical: 12
    }
})