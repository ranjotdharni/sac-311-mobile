import React from 'react';
import { View, ScrollView, Dimensions, Text, Pressable, StyleSheet, Image } from "react-native";
import {globalFont, global} from "../../customs"
import { router } from "expo-router";


export default function VisitorTab() {
    return(
        <View style={styles.pageWrapper}>
            <View style={{paddingTop:'10%'}}/>
            <View style={styles.tabName}>
                <Text style={styles.tabText}>Visitor Information</Text>
            </View>
            <Image style={styles.imageBanner} source={require('../../assets/png/visit.png')}/>
            <View style={styles.buttonMenu}>

                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonLabel}>Explore Sacramento</Text>
                    <Text style={styles.buttonDesc}>Find out more about what there is to do in Sacramento.</Text>
                    <Pressable style={styles.buttons} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.visitcalifornia.com/places-to-visit/sacramento/"}})}}>
                        <Text style={styles.buttonText}>VisitCalifornia.com</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonLabel}>Book Your Stay</Text>
                    <Text style={styles.buttonDesc}>Explore options booking a hotel, places to eat nearby, and more.</Text>
                    <Pressable style={styles.buttons} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.visitsacramento.com/"}})}}>
                        <Text style={styles.buttonText}>VisitSacramento.com</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonLabel}>Tripadvisor: Sacramento</Text>
                    <Text style={styles.buttonDesc}>Find hotels, vacation rentals, browse travel forums, and more on Tripadvisor.</Text>
                    <Pressable style={styles.buttons} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.tripadvisor.com/Tourism-g32999-Sacramento_California-Vacations.html"}})}}>
                        <Text style={styles.buttonText}>Tripadvisor.com</Text>
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