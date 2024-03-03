import { View, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { useState } from 'react';
import NewsFeed from "../(components)/Home/NewsFeed";
import ButtonPanel from "../(components)/Home/ButtonPanel";
import ForeHead from "../(components)/Home/ForeHead";
import RequestList from "../(components)/Home/RequestList";
import { globalFont, global } from "../../customs";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import RssFeed from './RssFeed';
import { TextInput } from "react-native-gesture-handler";


export default function News()
{
    const navigation = useNavigation();

    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('None');

    return (
        <>
        <View style={styles.pageWrapper}>
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                    <TouchableOpacity onPress={() => {(navigation.navigate as (screen: string) => void)('Home')}}> 
                        <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                    </TouchableOpacity>
                    <Text style={styles.barText}>City News</Text>
                </View>
            </View>
            <View style={styles.headlineBarWrapper}>
                <Text style={styles.headlineText}>TODAY'S HEADLINES</Text>
            </View>
            
            <View style={styles.listPaddingTop}></View>
            {
                <RssFeed />
            }
            <View style={styles.listPaddingBottom}></View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    searchIcon: {
        position: 'absolute',
        left: 10,
        top: 15,
        width: 20,
        height: 20,
    },
    searchInput: {
        height: '100%',
        borderRadius: 25,
        paddingLeft: 40,
        paddingRight: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        fontFamily: globalFont.chosenFont
    },
    searchInputWrapper: {
        width: Dimensions.get('screen').width,
        height: 50,
        borderColor: global.baseBlue100,
        borderWidth: 1,
        borderRadius: 25,
        elevation: 10,
        backgroundColor: 'white',
    },
    listPaddingTop: {
        height: '0%',
    },
    listPaddingBottom: {
        height: '7%',
    },
    returnWrapper: {
        alignItems:'center',
        width: '60%',
        borderRadius:10,
        backgroundColor: global.baseBlue100,
        shadowColor: '#000',
        shadowOffset:{
            width:-2,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
    },
    pageWrapper:{
        width: '100%',
        height: '100%',
        backgroundColor: global.baseBackground100,
    },
    innerPageWrapper:{
        height:'83%',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    headlineBarWrapper:{
        backgroundColor: global.baseGrey100,
        width:'100%',
        shadowColor: '#000',
        shadowOffset:{
            width:-2,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        height:'6%',
    },
    headlineWrapper:{
        backgroundColor: global.baseGrey100,
        width:'100%',
        shadowColor: '#000',
        shadowOffset:{
            width:-2,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        //height:'6%',
    },
    headlineText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop:'3%',
        fontFamily: globalFont.chosenFont,
        color:global.baseBackground100
    },
    returnText: {
        color: 'white',
        fontSize: 25,
        fontFamily: globalFont.chosenFont,
        padding:'3%',
    },
    basicText: {
        fontSize: 22,
        lineHeight: 50,
    },
    barText: {
        textAlign: 'center',
        fontSize: 25,
        marginLeft:'21%',
        fontFamily: globalFont.chosenFont,
        color:global.baseBackground100
    },
    infoWrapper:{
        paddingTop:'5%',
        width:'90%',
    },
    resizeIcon:{
        width:30,
        height:30,
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
    rowWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    innerExitWrapper:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginLeft:'6%',
        marginTop:'13%',
    },
    addressHeader: {
        alignSelf: 'center',
        fontSize: 20,
        color: global.baseBackground100,
        backgroundColor: global.baseBlue100,
        padding: 5,
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: 'center'
    }
})