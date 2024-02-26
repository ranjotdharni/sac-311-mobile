import { View, Text, Dimensions, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import { shadowUniversal, global } from "../../customs";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons"
import { Switch } from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { globalFont } from '../../customs';
import { fontGetter } from '../../customs';
import { fontSetter } from '../../customs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useEffect } from 'react';
import { globalColorTheme } from '../../customs';
import { colorThemeGetter } from '../../customs';
import { colorThemeSetter } from '../../customs';

const Tab = createMaterialTopTabNavigator();

function CityInfo() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Pressable style={styles.infoButton} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.cityofsacramento.gov/city-government/executive-team"}})}}>
                <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Government Offices</Text>
            </Pressable>
            <Pressable style={styles.infoButton} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.cityofsacramento.gov/city-government/accessibility"}})}}>
                <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Sacramento Accessibility Policy</Text>
            </Pressable>
            <Pressable style={styles.infoButton} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://data.cityofsacramento.org/"}})}}>
                <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Browse All City Data</Text>
            </Pressable>
            <Pressable style={styles.infoButton} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.cityofsacramento.gov/city-government/contact-us"}})}}>
                <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Contact Us</Text>
            </Pressable>
        </View>
    )
}
function AppInfo() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Pressable style={styles.infoButton} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://311.cityofsacramento.org/s/about-311"}})}}>
                <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>About 311</Text>
            </Pressable>
            <Pressable style={styles.infoButton} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.cityofsacramento.gov/city-government/web-policies"}})}}>
                <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Privacy Policy</Text>
            </Pressable>
            <Pressable style={styles.infoButton}>
                <Text style={{color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Leave Feedback</Text>
            </Pressable>
        </View>
    )
}
function General() {
    const [notif, setNotif] = useState(false);
    const [dark, setDarkMode] = useState(false);
    const toggleNotifs = () => setNotif(previousState => !previousState);
    const toggleDarkMode = () => setDarkMode(previousState => !previousState);

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAccessibleMode, setIsAccessibleMode] = useState(false);

    useEffect(() => {
        const setAccessibleMode = async (): Promise<void> => {
            const result = JSON.parse(
                (await AsyncStorage.getItem('accessibilityToken')) || 'false',
            ) as boolean;

            setIsAccessibleMode(result);
        };

        setAccessibleMode();
        fontSetter(fontGetter());

    }, []);



    useEffect(() => {
        const setDarkMode = async (): Promise<void> => {
            const result = JSON.parse(
                (await AsyncStorage.getItem('darkToken')) || 'false',
            ) as boolean;

            setIsDarkMode(result);
        };

        setDarkMode();
        colorThemeSetter(colorThemeGetter());
        
    }, []);




    return (
        <View style={{paddingTop:"5%"}}>
             <View style={styles.IconContainer}>
                <MaterialIcons name="notifications" size={Dimensions.get('screen').width * 0.065} color={'#c9b15b'}/>
                <View style= {styles.NotificationContainer}>
                    <Text style={styles.ButtonText}>Push Notifications</Text>
                    <Switch onValueChange={toggleNotifs} value = {notif} trackColor={{true: '#9a9ce6'}} thumbColor={notif? 'default': '#2b20a8' }/>
                </View>
            </View>
            <Text style={styles.DescriptionText}>Notify me when a request I submit receives an update</Text>
            <View style={styles.IconContainer}>
                <MaterialIcons name="bedtime" size={Dimensions.get('screen').width * 0.065} color={globalColorTheme.color}/>
                <View style={styles.NotificationContainer}>
                    <Text style={styles.ButtonText}>Dark Mode</Text>
                    <Switch
                        onValueChange={(darkResult) => {
                            AsyncStorage.setItem(
                                "darkToken",
                                JSON.stringify(darkResult),
                            );
                            colorThemeSetter(darkResult ? 'lightTheme' : 'darkTheme');
                            colorThemeGetter()

                            setIsDarkMode(darkResult);
                            
                        }}
                        value={isDarkMode}
                        trackColor={{true: '#9a9ce6'}}
                        thumbColor={isDarkMode? 'default': '#2b20a8' }
                        />
                </View>
            </View>
            <Text style={styles.DescriptionText}>Enable a darker theme to reduce brightness and eye strain</Text>

            <View style={styles.IconContainer}>
                <MaterialIcons name="font-download" size={Dimensions.get('screen').width * 0.065} color={'#c9b15b'}/>
                <View style={styles.NotificationContainer}>
                    <Text style={styles.ButtonText}>Accessibility Font</Text>
                    <Switch
                        onValueChange={(result) => {
                            AsyncStorage.setItem(
                                "accessibilityToken",
                                JSON.stringify(result),
                            );
                            fontSetter(result ? 'opendyslexic' : 'Helvetica');
                            setIsAccessibleMode(result);
                            
                        }}
                        value={isAccessibleMode}
                        trackColor={{true: '#9a9ce6'}}
                        thumbColor={isAccessibleMode? 'default': '#2b20a8' }
                        />
                </View>
            </View>
            <Text style={styles.DescriptionText}>Switch all text to use the 'OpenDyslexic' typeface.</Text>

            <View style={{alignItems:"center", padding:'4%', justifyContent:"space-evenly"}}>
                <Pressable style={styles.logButton}>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Log Out</Text> 
                </Pressable>
                <Pressable style={styles.button}>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold'}}>Delete My Account</Text> 
                </Pressable>
            </View>
        </View>
    )
}

export default function Settings()
{
    return(
        <View style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, paddingBottom:"25%"}}>
            <View style={{padding:"5%"}}/>
            <View style={{backgroundColor:"#3f69d4"}}>
                <Text style={styles.Settings}>Settings</Text>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="General" component={General} />
                <Tab.Screen name="City Info" component={CityInfo} />
                <Tab.Screen name="App Info" component={AppInfo} />
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    Settings:{
        fontSize:40,
        fontFamily: globalFont.chosenFont,
        paddingTop:"4%", 
        paddingLeft:"6%",
        marginRight:"25%", 
        paddingBottom:"4%", 
        fontWeight: "700", 
        color:'#ffffff', 
        backgroundColor:'#2b20a8',
        borderTopRightRadius:50,
        borderBottomRightRadius:50
    },

    ButtonText:{
        fontSize: 19,
        fontFamily: globalFont.chosenFont,
        paddingLeft: '5%',
        fontWeight: '500'
    },

    DescriptionText:{
        fontSize: 13,
        fontFamily: globalFont.chosenFont,
        paddingLeft: '5%',
        paddingBottom: '3%',
        fontWeight: '300'
    },
    NotificationContainer:{
        width:"90%",
        justifyContent:'space-between', 
        flexDirection:"row", 
        alignItems:'center',
        paddingRight:'3%',
    },
    IconContainer:{
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:"5%",
        justifyContent:'space-between'
    },

    button: {
        paddingTop:'5%',
        paddingBottom: '5%',
        textAlign: "center",
        justifyContent:"center",
        width: '80%',
        borderRadius: 50,
        backgroundColor: '#de3131',
        color: '#ffffff'
      },
    
    logButton: {
        marginBottom:"5%",
        marginTop:"30%",
        paddingTop:'5%',
        paddingBottom: '5%',
        textAlign: "center",
        justifyContent:"center",
        width: '80%',
        borderRadius: 50,
        backgroundColor: '#95959e',
        color: '#ffffff'
    },

    infoButton: {
        marginBottom:"5%",
        paddingTop:"5%",
        paddingBottom: "5%",
        textAlign: "center",
        justifyContent: "center",
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#1c299e',
        color: "#ffffff"
    }
})