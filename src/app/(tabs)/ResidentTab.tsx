import React from 'react';
import { View, ScrollView, Dimensions, Text, Pressable, StyleSheet, Image } from "react-native";
import {globalFont, global} from "../../customs"
import { router } from "expo-router";

export default function ResidentTab() {
    return(
        <View style={styles.pageWrapper}>
            <View style={{paddingTop:'10%'}}/>
            <View style={styles.tabName}>
                <Text style={styles.tabText}>Resident Information</Text>
            </View>
            <Image style={styles.imageBanner} source={require('../../assets/png/bridge.png')}/>
            <View style={styles.buttonMenu}>

                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonLabel}>Debt Relief Services</Text>
                    <Text style={styles.buttonDesc}>Explore your options for debt relief within Sacramento.</Text>
                    <Pressable style={styles.buttons} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.bbb.org/us/ca/sacramento/category/debt-relief-services"}})}}>
                        <Text style={styles.buttonText}>BetterBusinessBureau.gov</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonLabel}>Pet Adoption and Clinics</Text>
                    <Text style={styles.buttonDesc}>Find pets available for adoption and clinics within Sacramento.</Text>
                    <Pressable style={styles.buttons} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.sspca.org/"}})}}>
                        <Text style={styles.buttonText}>SacramentoSPCA.org</Text>
                    </Pressable>
                </View>

                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonLabel}>Sacramento Parks and Recreation</Text>
                    <Text style={styles.buttonDesc}>View nearby parks, fields, dog parks, and more in Sacramento.</Text>
                    <Pressable style={styles.buttons} onPress={() => {router.push({pathname:'/(web)/WebView', params: {url: "https://www.cityofsacramento.org/ParksandRec"}})}}>
                        <Text style={styles.buttonText}>CityofSacramento.com</Text>
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