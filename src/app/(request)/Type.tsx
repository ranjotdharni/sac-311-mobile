import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, FlatList , TextInput} from 'react-native';
import { ParamType, categoryLevelToType, global, requestTypes, salesforceDevelopmentSignature, shadowUniversal } from "../../customs";
import SearchBar from '../(components)/Profile/SearchBar';
import { useNavigation } from '@react-navigation/native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { globalFont } from '../../customs';
import { FontAwesome } from '@expo/vector-icons';

export default function Type()
{
    const nav = useNavigation()
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('None');

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

    return (<View style={styles.mainWrapper}>
        <View style={styles.exitWrapper}>
            <View style={styles.innerExitWrapper}>
            <Text style={styles.barText}>Select A Service</Text>
                    <TouchableOpacity onPress={() => { nav.goBack() }}> 
                        <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                    </TouchableOpacity>
            </View>
        </View>
        <View style={styles.searchContainer}>
            <Image style={styles.searchIcon} source={require('../../assets/png/search.png')} />
            <TextInput
                style={styles.searchInput}
                value={searchValue}
                onChangeText={text => setSearchValue(text)}
                placeholder='Search for Services'
                placeholderTextColor='#D3D3D3'
            />
            <TouchableOpacity onPress={() => setSearchValue('')} style={styles.clearButton}>
                <FontAwesome name='remove' size={20} color={global.baseGrey200} />
            </TouchableOpacity>
        </View>
        <View style={styles.allFiltersWrapper}>
            <FlatList
                horizontal
                persistentScrollbar
                data={requestTypes}
                renderItem={({item}) => 
                <TouchableOpacity key={item.id} style={styles.filterWrapper} onPress={() => setFilterValue(item.type)}>
                    <Text style={styles.filterText}>{item.type}</Text>
                </TouchableOpacity>
            }
            />
            <TouchableOpacity style={styles.filterWrapper} onPress={() => setFilterValue("None")}>
                            <Text style={styles.clearFilterText}>Clear Filter</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={filteredRequestTypes}
            renderItem={({item}) => 
            <View style={styles.typeWrapper} key={item.id}>
                <View style={styles.typeTitleWrapper}><Text style={styles.typeTitle}>{item.type}</Text></View>
                <FlatList
                    data={item.subTypes}
                    renderItem={({item: subTypes}) => 
                    <TouchableOpacity onPress={() => {forwardRequest(item.type, subTypes.subType, subTypes.description)}} key={subTypes.id} style={[styles.subTypeWrapper, shadowUniversal.default]}>
                        <View style={styles.subTypeTitleWrapper}><Text style={styles.subTypeTitle}>{subTypes.subType}</Text></View>
                        <Text style={styles.subTypeDescription}>{subTypes.description}</Text>
                        <Text style={styles.subTypeDesc2}>{subTypes.desc2}</Text>
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
        borderRadius: 15,
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
});