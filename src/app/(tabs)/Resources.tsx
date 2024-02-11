import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, TextInput, Image } from 'react-native';
import { global, shadowUniversal } from "../../customs";
import { useRouter } from 'expo-router';
import { requestTypes } from '../../addresses';
import { FontAwesome } from '@expo/vector-icons';

export default function Resources() {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');

    // Function to filter requestTypes based on searchValue
    const filteredRequestTypes = requestTypes.map(obj => {
        // Filter subtypes based on search value
        const filteredSubTypes = obj.subTypes.filter(sub => {
            const combinedText = `${sub.subType.toLowerCase()} ${sub.description.toLowerCase()}`;
            return combinedText.includes(searchValue.toLowerCase());
        });
        // Return the main type object with filtered subtypes
        return {
            ...obj,
            subTypes: filteredSubTypes
        };
    }).filter(obj => obj.subTypes.length > 0);

    return (
        <View style={styles.mainWrapper}>
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                    <View style={styles.tabNamesWrapperSelected}>
                        <Text style={styles.barText}>Services</Text>
                    </View>
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => { router.replace('/(tabs)/ResourceArticles') }}>
                        <Text style={styles.barText}>Articles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => { router.replace('/(tabs)/ResourceAbout') }}>
                        <Text style={styles.barText}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => { router.replace('/(tabs)/ResourceFAQ') }}>
                        <Text style={styles.barText}>FAQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <Image style={styles.searchIcon} source={require('../../assets/png/search.png')} />
                <TextInput
                    style={styles.searchInput}
                    value={searchValue}
                    onChangeText={text => setSearchValue(text)}
                    placeholder='Search For Service Related Resources'
                    placeholderTextColor='#D3D3D3'
                />
                <TouchableOpacity onPress={() => setSearchValue('')} style={styles.clearButton}>
                    <FontAwesome name='remove' size={20} color={global.baseGrey200} />
                </TouchableOpacity>
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
        backgroundColor: 'white',
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
        backgroundColor: global.baseBackground100,
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
        fontFamily: 'JBM',
        color: global.baseGold100,
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
        fontFamily: 'JBM',
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
