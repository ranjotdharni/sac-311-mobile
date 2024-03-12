import React from 'react';
import { View, ScrollView, Dimensions, Text, Pressable, StyleSheet, Image } from "react-native";
import {globalFont, global} from "../../customs"
import { router } from "expo-router";

export default function BusinessTab() 
{
    return (
        <View style={styles.pageWrapper}>
            <View style={{paddingTop:'10%'}}/>
            <View style={styles.tabName}>
                <Text style={styles.tabText}>Business Information</Text>
            </View>
            <Image style={styles.imageBanner} source={require('../../assets/png/skyline.png')}/>
            <View style={styles.buttonMenu}>

                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonLabel}>Business License Application & Renewal</Text>
                    <Text style={styles.buttonDesc}>Resources for applying for or renewing a Sacramento business license.</Text>
                    <Pressable style={styles.buttons} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://finance.saccounty.gov/Tax/pages/obla.aspx"}})}}>
                        <Text style={styles.buttonText}>SacCounty.gov</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonLabel}>Building Permits</Text>
                    <Text style={styles.buttonDesc}>Contact information, FAQs, and more regarding obtaining a Sacramento building permit.</Text>
                    <Pressable style={styles.buttons} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://building.saccounty.gov/Pages/default.aspx"}})}}>
                        <Text style={styles.buttonText}>SacCounty.gov</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonLabel}>Business Tax Services</Text>
                    <Text style={styles.buttonDesc}>Tax applications, renewal, and more.</Text>
                    <Pressable style={styles.buttons} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://sacramento.hdlgov.com/"}})}}>
                        <Text style={styles.buttonText}>Sacramento.hdlgov.com</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageWrapper:{
        width: '100%',
        height: '100%',
        backgroundColor: global.baseBackground100,
    },

    imageBanner:{
        width: '100%',
        height: '15%'
    },

    tabName:{
        justifyContent: 'center',
        width: '100%',
        height:'6%',
        backgroundColor: global.baseBlue100
    },

    tabText:{
        fontFamily: globalFont.chosenFont,
        paddingLeft: '3%',
        color: global.baseBackground100,
        fontSize: 18
    },

    buttonMenu:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },

    buttonWrapper:{
        backgroundColor: '#f2f2f2',
        width:'85%',
        height: 'auto',
        padding:'2%',
        justifyContent: 'center',
        borderRadius:15,
        marginTop:'3%',
        marginBottom:'3%',
    },

    buttonLabel:{
        fontFamily: globalFont.chosenFont,
        fontSize: 18
    },

    buttonDesc:{
        fontFamily: globalFont.chosenFont,
        fontSize: 12
    },

    buttons:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        borderRadius: 10,
        width:'80%',
        height:'auto',
        backgroundColor: global.baseGold200,
        marginTop:'2%',
        marginBottom:'2%',
        paddingTop:'2%',
        paddingBottom:'2%'
    },

    buttonText:{
        fontFamily: globalFont.chosenFont,
        fontSize: 16,
    }
})