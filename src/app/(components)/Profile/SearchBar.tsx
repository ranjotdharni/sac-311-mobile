import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function SearchBar({ placeholder, passUp, style } : { placeholder: string, passUp?: (inputText: string, keyboardOpen: boolean) => void, style?: any }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <View style={[styles.container, style ? style : {}]}>
            <View style={styles.searchInputWrapper}>
                <Image style={styles.searchIcon} source={require('../../../assets/png/search.png')} />
                {searchQuery === '' && <Text style={styles.placeholder}>{placeholder}</Text>}
                <TextInput
                    onSubmitEditing={() => {if (passUp !== undefined) {passUp(searchQuery, false)}}}
                    style={styles.searchInput}
                    value={searchQuery}
                    onChangeText={(e: string) => {handleSearch(e); passUp ? passUp(e, true) : undefined}}
                    placeholderTextColor="#D3D3D3"
                />
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
});






