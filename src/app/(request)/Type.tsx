import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import CustomText from '../(components)/CustomText';
import { global, shadowUniversal } from "../../customs";
//import SearchBar from '../(components)/RequestType/SearchBar';
import SearchBar from '../(components)/Profile/SearchBar';
import CreateButton from '../(components)/RequestConfirmation/SubmitButton';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { requestTypes } from '../../addresses';

export default function Type()
{
    const nav = useNavigation()
    const router = useRouter()
    const navigateToRequestConfirm = (arg0: string, arg1: string) => {
        router.push({pathname: '/RequestConfirm', params: {reqType: arg0, reqDesc: arg1}});
    }
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
            <SearchBar style={styles.searchStyle} placeholder='Search For A Service' />
            <ScrollView contentContainerStyle={styles.listStyle}>
                <View style={styles.listPaddingTop}></View>
                     {
                        requestTypes.map((obj) => {
                            return <View style={styles.typeWrapper} key={obj.id}>
                                <View style={styles.typeTitleWrapper}><Text style={styles.typeTitle}>{obj.type}</Text></View>
                                {
                                    obj.subTypes.map((sub) => {
                                        return <TouchableOpacity onPress={() => {navigateToRequestConfirm(sub.subType, sub.description)}} key={sub.id} style={[styles.subTypeWrapper, shadowUniversal.default]}>
                                            <View style={styles.subTypeTitleWrapper}><Text style={styles.subTypeTitle}>{sub.subType}</Text></View>
                                            <Text style={styles.subTypeDescription}>{sub.description}</Text>
                                        </TouchableOpacity>
                                    })
                                }
                            </View>
                        })
                     }
                <View style={styles.listPaddingBottom}></View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
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
        color: global.baseBackground100,
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

//  

    searchStyle: {
        position: 'absolute',
        top: '12%',
        zIndex: 1,
        width: '95%',
        left: '2.5%',
        borderWidth: 1,
        borderColor: global.baseBlue100,
    },
    listStyle: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    listPaddingTop: {
        height: '0.6%',
    },
    listPaddingBottom: {
        height: 150,
    },
    typeWrapper: {
        width: '100%',
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    typeTitleWrapper: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: global.baseBlue100,
    },
    typeTitle: {
        fontSize: 25,
        color: global.baseBlue100,
        fontFamily: 'JBM',
        marginLeft: '2%',
    },
    subTypeWrapper: {
        width: '90%',
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: global.baseBackground100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
    },
    subTypeTitleWrapper: {
        width: '100%',
        backgroundColor: global.baseGold100,
        borderRadius: 15,
        padding: 2,
    },
    subTypeTitle: {
        marginLeft: '2.5%',
        fontFamily: 'JBM-B',
        fontSize: 18,
        color: global.baseBackground100
    },
    subTypeDescription: {
        marginTop: '3%',
        marginLeft: '3%',
        fontFamily: 'JBM',
        fontSize: 15,
        color: global.baseGrey100,
    },
});