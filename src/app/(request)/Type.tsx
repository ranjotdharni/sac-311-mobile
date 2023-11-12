import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import CustomText from '../(components)/CustomText';
import { useNavigation } from 'expo-router';
import { global } from "../../dummy";
import SearchBar from '../(components)/RequestType/SearchBar';



export default function Type()
{
    const nav = useNavigation()
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                    <Text style={styles.barText}>Select A Service</Text>
                    <TouchableOpacity onPress={() => { nav.goBack() }}> 
                        <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <SearchBar />
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <Text style={styles.serviceCardPlaceholder}>
                        Modular service card UI goes here (WIP).
                    </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: global.baseBackground100,
    },
    exitWrapper:{
        backgroundColor: global.baseBlue100,
        width:'100%',
        shadowColor: '#000',
        shadowOffset:{
            width:-2,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        height:'12%',
    },
    innerExitWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:'6%',
        marginTop:'13%',
    },
    barText: {
        fontSize: 25,
        marginLeft:'5%',
        fontFamily:'JBM',
        color:global.baseBackground100
    },
    resizeIcon:{
        width:30,
        height:30,
    },
    serviceCardPlaceholder: {
        fontSize: 25, 
        fontFamily: 'JBM', 
        color: '#000000', 
        textAlign: 'center', 
        marginTop: 15,
    },
});