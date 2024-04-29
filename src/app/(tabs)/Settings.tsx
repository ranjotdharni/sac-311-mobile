import { View, Text, Dimensions, StyleSheet, Pressable, Platform } from "react-native";
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
import * as Notifications from 'expo-notifications';

const Tab = createMaterialTopTabNavigator();

function CityInfo() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:globalColorTheme.backgroundColor}}>
            <Pressable style={[styles.infoButton, {backgroundColor:globalColorTheme.blue}]} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.cityofsacramento.gov/city-government/executive-team"}})}}>
                <Text style={{color: globalColorTheme.text, textAlign: 'center', fontWeight: 'bold'}}>Government Offices</Text>
            </Pressable>
            <Pressable style={[styles.infoButton, {backgroundColor:globalColorTheme.blue}]} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.cityofsacramento.gov/city-government/accessibility"}})}}>
                <Text style={{color: globalColorTheme.text, textAlign: 'center', fontWeight: 'bold'}}>Sacramento Accessibility Policy</Text>
            </Pressable>
            <Pressable style={[styles.infoButton, {backgroundColor:globalColorTheme.blue}]} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://data.cityofsacramento.org/"}})}}>
                <Text style={{color: globalColorTheme.text, textAlign: 'center', fontWeight: 'bold'}}>Browse All City Data</Text>
            </Pressable>
            <Pressable style={[styles.infoButton, {backgroundColor:globalColorTheme.blue}]} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.cityofsacramento.gov/city-government/contact-us"}})}}>
                <Text style={{color: globalColorTheme.text, textAlign: 'center', fontWeight: 'bold'}}>Contact Us</Text>
            </Pressable>
        </View>
    )
}
function AppInfo() {
    return (
        
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:globalColorTheme.backgroundColor}}>
            
            <Pressable style={[styles.infoButton, {backgroundColor:globalColorTheme.blue}]} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://311.cityofsacramento.org/s/about-311"}})}}>
                <Text style={{color: globalColorTheme.text, textAlign: 'center', fontWeight: 'bold'}}>About 311</Text>
            </Pressable>
            <Pressable style={[styles.infoButton, {backgroundColor:globalColorTheme.blue}]} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.cityofsacramento.gov/city-government/web-policies"}})}}>
                <Text style={{color: globalColorTheme.text, textAlign: 'center', fontWeight: 'bold'}}>Privacy Policy</Text>
            </Pressable>
            <Pressable style={[styles.infoButton, {backgroundColor:globalColorTheme.blue}]}>
                <Text style={{color: globalColorTheme.text, textAlign: 'center', fontWeight: 'bold'}}>Leave Feedback</Text>
            </Pressable>
        </View>
    )
}
function General() {
    const [notifEnabled, setNotifEnabled] = useState(false);
    const [dark, setDarkMode] = useState(false);
    useEffect(() => {
        const loadNotificationPermission = async () => {
            const permissionStatus = await AsyncStorage.getItem('notificationPermission');
            setNotifEnabled(permissionStatus === 'granted');
        };

        loadNotificationPermission();
    }, []);

    const toggleNotifs = async () => {
        if (notifEnabled) {
            setNotifEnabled(false);
            if (Platform.OS === 'android') {
                await Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.NONE,
                });
            }
            await Notifications.cancelAllScheduledNotificationsAsync();
            await Notifications.dismissAllNotificationsAsync();
            await Notifications.setBadgeCountAsync(0);
            await AsyncStorage.setItem('notificationPermission', 'denied');
        } else {
            const { status } = await Notifications.requestPermissionsAsync();
            if (status === 'granted') {
                setNotifEnabled(true);
                await AsyncStorage.setItem('notificationPermission', 'granted');
            } else {
                setNotifEnabled(false);
                await AsyncStorage.setItem('notificationPermission', 'denied');
            }
        }
    };
    const toggleDarkMode = () => setDarkMode(previousState => !previousState);

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAccessibleMode, setIsAccessibleMode] = useState(false);

    // font change activated by the accessibility toggle
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


    // theme change activated by the dark-mode toggle
    useEffect(() => {
        const setDarkMode = async (): Promise<void> => {
            const result = JSON.parse(
                (await AsyncStorage.getItem('darkToken')) || 'false',
            ) as boolean;
            setIsDarkMode(result);
            }
        const tempvar: any = colorThemeGetter('theme');
        colorThemeSetter(globalColorTheme.theme);
        setDarkMode();
    }, [dark]);

    return (
        <View style={{ paddingTop: "5%", backgroundColor: globalColorTheme.backgroundColor }}>
            <View style={{ backgroundColor: globalColorTheme.backgroundColor, flexDirection: "row", alignItems: "center", paddingLeft: "5%", justifyContent: 'space-between' }}>
                <MaterialIcons name="notifications" size={Dimensions.get('screen').width * 0.065} color={globalColorTheme.blue} />
                <View style={{ backgroundColor: globalColorTheme.backgroundColor, width: "90%", justifyContent: 'space-between', flexDirection: "row", alignItems: 'center', paddingRight: '3%' }}>
                    <Text style={{ fontSize: 19, fontFamily: globalFont.chosenFont, color: globalColorTheme.color, paddingLeft: '5%', fontWeight: '500' }}>
                        Notification Permissions
                    </Text>
                    <Switch
                        onValueChange={toggleNotifs} 
                        value={notifEnabled}
                        trackColor={{false:'#DDDDDD', true:'#00EE63'}}
                        thumbColor={globalColorTheme.blue}
                    />
                </View>
            </View>
            <Text style={{ backgroundColor: globalColorTheme.backgroundColor, color: globalColorTheme.color, fontSize: 13, fontFamily: globalFont.chosenFont, paddingLeft: '5%', paddingBottom: '3%', fontWeight: '300' }}>
                Ask permission for notifications if its not already allowed.
            </Text>
            <View style={{backgroundColor:globalColorTheme.backgroundColor,flexDirection:"row",alignItems:"center",paddingLeft:"5%",justifyContent:'space-between'}}>
                <MaterialIcons name="bedtime" size={Dimensions.get('screen').width * 0.065} color={globalColorTheme.blue}/>
                <View style={{backgroundColor:globalColorTheme.backgroundColor, width:"90%", justifyContent:'space-between', flexDirection:"row", alignItems:'center', paddingRight:'3%',}}>
                    <Text style={{fontSize: 19, fontFamily: globalFont.chosenFont, color:globalColorTheme.color, paddingLeft: '5%', fontWeight: '500'}}>
                    Dark Mode</Text>
                    <Switch
                        onValueChange={(darkResult) => {
                            AsyncStorage.setItem(
                                "darkToken",
                                JSON.stringify(darkResult),
                            );
                            colorThemeSetter(darkResult ? 'darkTheme' : 'lightTheme'); // theme change requires the exact theme name used from 'customs.tsx'
                            setIsDarkMode(darkResult);
                        }}
                        value={isDarkMode}
                        trackColor={{false:'#DDDDDD', true:'#00EE63'}} // standard IOS green and gray
                        thumbColor={globalColorTheme.blue}
                        />
                </View>
            </View>
            <Text style={{backgroundColor:globalColorTheme.backgroundColor, color:globalColorTheme.color, fontSize: 13, fontFamily: globalFont.chosenFont, paddingLeft: '5%', paddingBottom: '3%', fontWeight: '300'}}>
                Enable a darker theme to reduce brightness and eye strain</Text>
            <View style={{backgroundColor:globalColorTheme.backgroundColor,flexDirection:"row",alignItems:"center",paddingLeft:"5%",justifyContent:'space-between'}}>
                <MaterialIcons name="font-download" size={Dimensions.get('screen').width * 0.065} color={globalColorTheme.blue}/>
                <View style={{backgroundColor:globalColorTheme.backgroundColor, width:"90%", justifyContent:'space-between', flexDirection:"row", alignItems:'center', paddingRight:'3%',}}>
                    <Text style={{fontSize: 19, fontFamily: globalFont.chosenFont, color:globalColorTheme.color, paddingLeft: '5%', fontWeight: '500'}}>
                    Accessibility Font</Text>
                    <Switch
                        onValueChange={(result) => {
                            AsyncStorage.setItem(
                                "accessibilityToken",
                                JSON.stringify(result),
                            );
                            fontSetter(result ? 'opendyslexic' : 'jbm'); // font change requires the exact font name used from '_layout.tsx'
                            setIsAccessibleMode(result);
                        }}
                        value={isAccessibleMode}
                        trackColor={{false:'#DDDDDD', true:'#00EE63'}} // standard IOS green and gray
                        thumbColor={globalColorTheme.blue}
                        />
                </View>
            </View>
            
            <Text style={{backgroundColor:globalColorTheme.backgroundColor, color:globalColorTheme.color, fontSize: 13, fontFamily: globalFont.chosenFont, paddingLeft: '5%', paddingBottom: '3%', fontWeight: '300'}}>
                Switch all text to use the 'OpenDyslexic' typeface.</Text>
            <View style={{alignItems:"center", padding:'4%', justifyContent:"space-evenly", backgroundColor:globalColorTheme.backgroundColor}}>

                <Pressable style={styles.logButton}>
                  <Text style={{ color: globalColorTheme.text, textAlign: 'center', fontWeight: 'bold'}}>Log Out</Text> 
                </Pressable>
                <Pressable style={styles.button}>
                  <Text style={{ color: globalColorTheme.text, textAlign: 'center', fontWeight: 'bold'}}>Delete My Account</Text> 
                </Pressable>
            </View>
        </View>
    )
}

export default function Settings()
{
    return(
        <View style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, paddingBottom:"25%", backgroundColor:globalColorTheme.backgroundColor}}>
            <View style={{padding:"5%", backgroundColor:globalColorTheme.backgroundColor}}/>
            <View style={{backgroundColor:globalColorTheme.blue}}>
                <Text style={[styles.Settings, {color:'#FFFFFF', backgroundColor:globalColorTheme.blue}]}>Settings</Text>
                
            </View>
           <Tab.Navigator screenOptions={({route}) => ({
                tabBarStyle: {backgroundColor:globalColorTheme.backgroundColor},
                tabBarActiveTintColor:globalColorTheme.color,
                tabBarInactiveTintColor:globalColorTheme.color,
                tabBarIndicatorStyle:{backgroundColor: globalColorTheme.blue},
            })}
                >
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
        borderTopRightRadius:50,
        borderBottomRightRadius:50
    },

    ButtonText:{
        fontSize: 19,
        fontFamily: globalFont.chosenFont,
        paddingLeft: '5%',
        fontWeight: '500'
    },



    button: {
        paddingTop:'5%',
        paddingBottom: '5%',
        textAlign: "center",
        justifyContent:"center",
        width: '80%',
        borderRadius: 50,
        backgroundColor: '#de3131',
        color: globalColorTheme.color
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
        backgroundColor: "#878787",
        color: globalColorTheme.color
    },

    infoButton: {
        marginBottom:"5%",
        paddingTop:"5%",
        paddingBottom: "5%",
        textAlign: "center",
        justifyContent: "center",
        width: '80%',
        borderRadius: 10,
        backgroundColor: globalColorTheme.backgroundColor,
        color: globalColorTheme.color
    }
})
