import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, TextInput, Image } from 'react-native';
import { global, requestTypes, shadowUniversal } from "../../customs";
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { globalFont } from '../../customs';

export default function Resources() {
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

    return (
        <View style={styles.mainWrapper}>
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                    <View style={styles.tabNamesWrapperSelected}>
                        <Text style={styles.barText}>Services</Text>
                    </View>
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => { router.replace('/(tabs)/ResourceAnswers') }}>
                        <Text style={styles.barText}>Answers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => { router.replace('/(tabs)/ResourceAbout') }}>
                        <Text style={styles.barText}>About</Text>
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
                
                <ScrollView horizontal={true} contentContainerStyle={styles.filterScroll}>
                    <TouchableOpacity style={styles.filterWrapper} onPress={() => setFilterValue("None")}>
                        <Text style={styles.filterText}>Clear Filter</Text>
                    </TouchableOpacity>
                    {requestTypes.map((obj) => {
                        return (
                            <TouchableOpacity key={obj.id} style={styles.filterWrapper} onPress={() => setFilterValue(obj.type)}>
                                <Text style={styles.filterText}>{obj.type}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>  
            <ScrollView contentContainerStyle={styles.listStyle}>
                <View style={styles.listPaddingTop}></View>
                {filteredRequestTypes.map((obj) => {
                    return (
                        <View style={styles.typeWrapper} key={obj.id}>
                            <View style={styles.typeTitleWrapper}><Text style={styles.typeTitle}>{obj.type}</Text></View>
                            {obj.subTypes.map((sub) => {
                                return (
                                    <TouchableOpacity key={sub.id} style={[styles.subTypeWrapper, shadowUniversal.default]}>
                                        <View style={styles.subTypeTitleWrapper}><Text style={styles.subTypeTitle}>{sub.subType}</Text></View>
                                        <Text style={styles.subTypeDescription}>{sub.description}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    );
                })}
                <View style={styles.listPaddingBottom}></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: global.baseBackground100,
    },
    exitWrapper: {
        backgroundColor: global.baseBackground100,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '12%',
    },
    innerExitWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '15%',
        paddingHorizontal: 15,
    },
    tabNamesWrapper: {
        width: 'auto',
        backgroundColor: global.baseWhite100,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    tabNamesWrapperSelected: {
        width: 'auto',
        backgroundColor: global.baseGold300,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    barText: {
        fontSize: 17,
        padding: 2,
        fontFamily: globalFont.chosenFont,
        color: global.baseBlue100,
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
    listStyle: {
        flexGrow: 1,
        alignItems: 'center',
    },
    listPaddingTop: {
        height: 10,
    },
    listPaddingBottom: {
        height: 150,
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
    filterScroll:{
        backgroundColor: 'rgba(0, 0, 0, 0)',
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
        marginHorizontal: 5,
        fontSize: 14,
        color: 'white',
        borderRadius: 10,
        padding: 10,
    },
});
