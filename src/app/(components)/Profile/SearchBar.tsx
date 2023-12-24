import { FontAwesome } from '@expo/vector-icons';
import React, { memo, useCallback, useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { global } from '../../../customs';

function SearchBar({ placeholder, value, passUp, onSubmit, onClear, style } : { placeholder: string, value: string, passUp: (inputText: string) => void, onSubmit: () => void, style?: any, onClear: () => void }) {
    return (
        <View style={[styles.container, style ? style : {}]}>
            <View style={styles.searchInputWrapper}>
                <Image style={styles.searchIcon} source={require('../../../assets/png/search.png')} />
                {value === '' && <Text style={styles.placeholder}>{placeholder}</Text>}
                <TextInput
                    onSubmitEditing={onSubmit}
                    style={styles.searchInput}
                    value={value}
                    onChangeText={passUp}
                    placeholderTextColor="#D3D3D3"
                />
                <TouchableOpacity onPress={onClear} style={styles.clearButton}>
                    <FontAwesome name='remove' size={20} color={global.baseGrey200} />
                </TouchableOpacity>
            </View>
        </View>        
    );
}



const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: 'red',
        width: Dimensions.get('screen').width,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    searchInputWrapper: {
        width: Dimensions.get('screen').width,
        height: 50,
        borderRadius: 25, // Increase this to make the ends more circular
        elevation: 10,
        backgroundColor: 'white',
    },
    placeholder: {
        position: 'absolute', // Add this line
        left: 40, // Add this line
        top: 15, // Adjust this value as needed
        fontFamily: 'JBM', // Add this line
        color: '#D3D3D3', // Add this line
    },
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
        paddingLeft: 40, // Adjust this value as needed to make room for the icon
        paddingRight: 10,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        fontFamily: 'JBM',
    },
    clearButton: {
        position: 'absolute',
        width: '10%',
        height: '50%',
        left: '82.5%',
        top: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: global.baseBackground100,
        zIndex: 2
    },
});

export default memo(SearchBar)