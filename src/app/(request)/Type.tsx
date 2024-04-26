import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList , TextInput, Pressable, Modal} from 'react-native';
import { ParamType, categoryLevelToType, global, requestTypes, salesforceDevelopmentSignature, shadowUniversal } from "../../customs";
import SearchBar from '../(components)/Profile/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { globalFont } from '../../customs';
import { FontAwesome } from '@expo/vector-icons';
import { globalColorTheme } from '../../customs';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Type()
{
    const nav = useNavigation()
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('None');
    const [modalData, setModalData] = useState({
        type: '',
        subtype: '',
        desc: '',
        desc2: ''
    });

    // Function to filter requestTypes based on searchValue
    const filteredRequestTypes = requestTypes.map(obj => {
        // Filter subtypes based on search value
        const filteredSubTypes = obj.subTypes.filter(sub => {
            const combinedText = `${sub.subType.toLowerCase()} ${sub.description.toLowerCase()}`;
            return combinedText.includes(searchValue.toLowerCase());
        });
        //empty subtype value to be used as null
        const emptySubtype = obj.subTypes.filter(sub => {
            const nullTxt = ``;
            return nullTxt.includes("empty");
        });
        // If no filter chosen, only use the subtype search term
        if (filterValue == 'None'){
            return {
                ...obj,
                subTypes: filteredSubTypes,
                type: obj.type
            };
        }
        //if a filter is chosen, then only search through the subtypes of the filtered type
        else if (filterValue == obj.type.valueOf()){
            return {
                ...obj,
                subTypes: filteredSubTypes,
                type: filterValue
            };
        }
        //otherwise return null
        else
            return {
                ...obj,
                subTypes: emptySubtype,
                type: ''
            };
    }).filter(obj => obj.subTypes.length > 0);
    const {
        Subject,
        Service_Type__c, // CategoryLevel1
        Sub_Service_Type__c, // CategoryLevel2
        Council_District__c, // CouncilDistrictNumber
        GIS_Street_Address__c, // CrossStreet
        GIS_Zip_Code__c, // ZIP
        Address__c, // Address
        GIS_System_Info__c, // "<Data_Source>  <SourceLevel1>"
        GIS_Neighborhood_Name__c, // Neighborhood
        description,
        Address_Geolocation__Latitude__s,
        Address_Geolocation__Longitude__s,
        returnRoute
    } = (
        useLocalSearchParams().Subject === undefined ?
                {
            Subject: salesforceDevelopmentSignature,
            Service_Type__c: '', // CategoryLevel1
            Sub_Service_Type__c: '', // CategoryLevel2
            Council_District__c: '', // CouncilDistrictNumber
            GIS_Street_Address__c: '', // CrossStreet
            GIS_Zip_Code__c: '', // ZIP
            Address__c: '', // Address
            GIS_System_Info__c: '', // "<Data_Source>  <SourceLevel1>"
            GIS_Neighborhood_Name__c: '', // Neighborhood
            description: '',
            Address_Geolocation__Latitude__s: 0,
            Address_Geolocation__Longitude__s: 0,
            returnRoute: useLocalSearchParams().returnRoute
        } : 
        useLocalSearchParams()
    )

    const forwardRequest = (type: string, subtype: string, desc: string) => {
        router.push({pathname: '/Location', params: {
            Subject,
            Service_Type__c: categoryLevelToType(type), // CategoryLevel1
            Sub_Service_Type__c: categoryLevelToType(subtype), // CategoryLevel2
            Council_District__c, // CouncilDistrictNumber
            GIS_Street_Address__c, // CrossStreet
            GIS_Zip_Code__c, // ZIP
            Address__c, // Address
            GIS_System_Info__c, // "<Data_Source>  <SourceLevel1>"
            GIS_Neighborhood_Name__c, // Neighborhood
            description: desc,
            Address_Geolocation__Latitude__s,
            Address_Geolocation__Longitude__s,
            returnRoute
        }})
    }
    // {pathname: '/Location', params: {reqType: arg0, reqDesc: arg1, reqLoc: (p.reqLoc || '')}}

    const pushToPopup = (type: string, subtype: string, desc: string, desc2: string) => {
        const data = {
            type: type,
            subtype: subtype,
            desc: desc,
            desc2: desc2
        }
        setModalData(data);
    }

    return (
        <View style={[styles.mainWrapper, {backgroundColor: globalColorTheme.backgroundColor}]}>
            <Modal visible={modalData.type !== ''} animationType='slide' transparent={true} onRequestClose={() => {setModalData({...modalData, type: ''});}}>
                <View style={styles.modalView}>
                    <Text style={styles.requestPopupType}>{modalData.subtype}</Text>
                    <Text style={styles.requestPopupDescription}>{modalData.desc}</Text>
                    <Text style={[styles.requestPopupDetails, modalData.desc2 ==""?{fontSize:0}:{}]}>{modalData.desc2}</Text>
                    <Text style={styles.requestConfirmationText}>Place this type of request?</Text>
                    <View style={styles.requestBtnWrapper}>
                        <Pressable style={styles.cancelRequestBtn} onPress={() => {setModalData({...modalData, type: ''});}}>
                            <Text style={styles.cancelRequestText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.placeRequestBtn} onPress={() => {setModalData({...modalData, type: ''}); forwardRequest(modalData.type, modalData.subtype, modalData.desc)}}> 
                                <Text style={styles.placeRequestText}>Confirm</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View style={[styles.exitWrapper, {backgroundColor: globalColorTheme.blue}]}>
                <View style={styles.innerExitWrapper}>
                <Text style={[styles.barText, {color: globalColorTheme.text}]}>Select A Service</Text>
                        <TouchableOpacity onPress={() => { nav.goBack() }}> 
                            <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                        </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.searchContainer, {backgroundColor: globalColorTheme.backgroundColor2}]}>
                <Image style={styles.searchIcon} source={require('../../assets/png/search.png')} />
                <TextInput
                    style={styles.searchInput}
                    value={searchValue}
                    onChangeText={text => setSearchValue(text)}
                    placeholder='Search for Services'
                    placeholderTextColor={globalColorTheme.color}
                />
                        <TouchableOpacity onPress={() => setSearchValue('')} style={[styles.clearButton, {backgroundColor: globalColorTheme.backgroundColor2}]}>
                    <FontAwesome name='remove' size={20} color={globalColorTheme.color} />
                </TouchableOpacity>
            </View>
            <View style={styles.allFiltersWrapper}>
                <FlatList
                    horizontal
                    persistentScrollbar
                    data={requestTypes}
                    renderItem={({item}) => 
                    <TouchableOpacity key={item.id} style={[styles.filterWrapper, {backgroundColor: globalColorTheme.backgroundColor}]} onPress={() => setFilterValue(item.type)}>
                        <Text style={[styles.filterText, {backgroundColor: globalColorTheme.blue, color: globalColorTheme.text}]}>{item.type}</Text>
                    </TouchableOpacity>
                }
                />
                <TouchableOpacity style={[styles.filterWrapper, {backgroundColor: globalColorTheme.backgroundColor}]} onPress={() => setFilterValue("None")}>
                                <Text style={[styles.clearFilterText, {backgroundColor: globalColorTheme.backgroundColor2, color: globalColorTheme.color}]}>Clear Filter</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredRequestTypes}
                renderItem={({item}) => 
                <View style={styles.typeWrapper} key={item.id}>
                    <View style={styles.typeTitleWrapper}><Text style={[styles.typeTitle, {color: globalColorTheme.color}]}>{item.type}</Text></View>
                    <FlatList
                        data={item.subTypes}
                        renderItem={({item: subTypes}) => 
                        <TouchableOpacity onPress={() => {pushToPopup(item.type, subTypes.subType, subTypes.description, subTypes.desc2);}} style={[styles.subTypeWrapper, shadowUniversal.default, {backgroundColor: globalColorTheme.backgroundColor2}]}>
                            <View style={[styles.subTypeTitleWrapper, {backgroundColor: globalColorTheme.blue}]}><Text style={styles.subTypeTitle}>{subTypes.subType}</Text></View>
                            <Text style={[styles.subTypeDescription, {color: globalColorTheme.color}]}>{subTypes.description}</Text>
                        </TouchableOpacity>
                    }
                    />
                </View>
            }
            />
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
        fontFamily: globalFont.chosenFont,
        color: global.baseBackground100,
    },
    resizeIcon:{
        width:30,
        height:30,
    },
    serviceCardPlaceholder: {
        fontSize: 25, 
        fontFamily: globalFont.chosenFont, 
        color: '#000000', 
        textAlign: 'center', 
        marginTop: 15,
    },
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
    typeWrapper: {
        width: '100%',
        marginBottom: 15,
    },
    typeTitleWrapper: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: global.baseGold100,
    },
    typeTitle: {
        fontSize: 25,
        color: global.baseBlue100,
        fontFamily: globalFont.chosenFont,
        marginLeft: '2%',
    },
    subTypeWrapper: {
        width: '96%',
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: global.baseWhite100,
        padding: 10,
        marginLeft: '2%'
    },
    subTypeTitleWrapper: {
        width: '100%',
        backgroundColor: global.baseBlue100,
        borderRadius: 12,
        padding: 2,
    },
    subTypeTitle: {
        marginLeft: '2.5%',
        fontFamily: globalFont.chosenFont,
        fontSize: 18,
        color: global.baseWhite100
    },
    subTypeDescription: {
        marginTop: '3%',
        marginLeft: '3%',
        fontFamily: globalFont.chosenFont,
        fontSize: 15,
        color: global.baseGrey100,
    },
    subTypeDesc2: {
        marginTop: '3%',
        marginLeft: '3%',
        fontFamily: globalFont.chosenFont,
        fontSize: 12,
        color: global.baseGrey200,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: global.baseBlue100,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '96%',
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontFamily: globalFont.chosenFont
    },
    clearButton: {
        marginLeft: 5,
    },
    allFiltersWrapper:{
        marginTop:'3%',
        backgroundColor:'rgba(0, 0, 0, 0)',
        flexDirection: 'row',
        height: '7%',
    },
    filterWrapper:{
        backgroundColor: global.baseBackground100,
    },
    filterText:{
        fontFamily: globalFont.chosenFont,
        backgroundColor: global.baseBlue100,
        marginHorizontal: 3,
        fontSize: 14,
        color: 'white',
        borderRadius: 10,
        padding: 10,
    },
    clearFilterText:{
        fontFamily: globalFont.chosenFont,
        backgroundColor: global.darkGrey100,
        marginHorizontal: 3,
        fontSize: 14,
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    requestPopupWrapper:{
        backgroundColor: 'yellow',
        width: '80%',
        height:'70%',
        zIndex:100,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
    },
    modalView:{
        width:'90%',
        backgroundColor: 'white',
        padding:20,
        alignItems:"center",
        borderRadius:25,
        alignSelf:'center',
        marginVertical:'70%',
        elevation:10
    },
    requestPopupType:{
        fontSize:25,
        textAlign:'center',
        paddingBottom:15,
        color: global.baseBlue100,
        fontFamily: globalFont.chosenFont
    },
    requestPopupDescription:{
        fontSize:16,
        paddingBottom:15,
        color: global.darkGrey100,
        fontFamily: globalFont.chosenFont
    },
    requestPopupDetails:{
        fontSize:15,
        color: global.baseGrey200,
        paddingBottom: 20,
        fontFamily: globalFont.chosenFont
    },
    requestConfirmationText:{ 
        fontSize:19,
        paddingBottom:10,
        color: global.darkGrey100,
        fontFamily: globalFont.chosenFont
    },
    requestBtnWrapper:{
        flexDirection: 'row'
    },
    placeRequestBtn:{
        backgroundColor: global.baseBlue200,
        padding:10,
        width:'40%',
        borderRadius:30,
        marginHorizontal:"2%"
    },
    placeRequestText:{
        color: 'white',
        padding: 10,
        textAlign:'center',
        fontFamily: globalFont.chosenFont
    },
    cancelRequestBtn:{
        backgroundColor: 'red',
        padding: 10,
        width:'40%',
        borderRadius:30,
        marginHorizontal:"2%"
    },
    cancelRequestText:{
        color: global.baseWhite100,
        padding: 10,
        textAlign:'center',
        fontFamily: globalFont.chosenFont,
    },
});