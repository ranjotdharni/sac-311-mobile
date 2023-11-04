import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchInputWrapper}>
                <Image style={styles.searchIcon} source={require('../../../assets/png/search.png')} />
                {searchQuery === '' && <Text style={styles.placeholder}>Request Number</Text>}
                <TextInput
                    style={styles.searchInput}
                    value={searchQuery}
                    onChangeText={handleSearch}
                    placeholderTextColor="#D3D3D3"
                />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginTop: 10,
    },
    searchInputWrapper: {
        height: 50,
        borderRadius: 25, // Increase this to make the ends more circular
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
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
        backgroundColor: 'transparent',
        fontFamily: 'JBM',
    },
});






