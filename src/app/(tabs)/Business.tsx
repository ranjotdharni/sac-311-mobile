import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar, View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';

export default function Business() {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState<string>('');

    const navigateToProfile3 = () => {
        (navigation.navigate as (screen: string) => void)('Profile3');
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleAddBusiness = () => {
        // Add functionality here
    };

    return (
        <View style={styles.container}>
            <View style={styles.foreheadWrapper}>
                <Pressable style={styles.foreheadButton} onPress={navigateToProfile3}>
                    <Text style={styles.foreheadProfileText}>Profile</Text>
                </Pressable>
                <View style={styles.foreheadSeparator} />
                <Text style={styles.foreheadBusinessText}>Business</Text>
            </View>
            <View style={styles.bigSeparator} />
            
            {/* New Container */}
            <View style={styles.newContainer}>
                <Text style={styles.sharedText}>Business Case?</Text>
                <View style={styles.radioButtonGroup}>
                    <Pressable
                        style={[styles.radioButton, selectedOption === 'Yes' && styles.radioButtonSelected]}
                        onPress={() => handleOptionSelect('Yes')}
                    >
                        <Text style={styles.radioButtonText}>Yes</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.radioButton, selectedOption === 'No' && styles.radioButtonSelected]}
                        onPress={() => handleOptionSelect('No')}
                    >
                        <Text style={styles.radioButtonText}>No</Text>
                    </Pressable>
                </View>
                <Pressable
                    style={({ pressed }) => [
                        styles.addButton,
                        {
                            backgroundColor: pressed ? '#BEA315' : '#FFF',
                            marginTop: 200, // Adjusted marginTop for the "Add Business" button only
                        },
                    ]}
                    onPress={handleAddBusiness}
                >
                    <Text style={styles.addButtonLabel}>Add Business</Text>
                </Pressable>
            </View>
            {/* End of New Container */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    foreheadWrapper: {
        flexDirection: 'row', 
        width: Dimensions.get('screen').width,
        height: 55,
        backgroundColor: '#FFF',
    },
    foreheadButton: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
    foreheadSeparator: { 
        width: 2, 
        alignSelf: 'stretch',
        backgroundColor: '#D9D9D9',
        alignItems: 'center'
    },
    foreheadProfileText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'JBM',
        fontSize: 18,
        color: '#6F6F6F',
        height: '100%',
        paddingVertical: 12
    },
    foreheadBusinessText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontFamily: 'JBM',
        fontSize: 18,
        color: '#BEA315',
        height: '100%',
        paddingVertical: 12
    },
    bigSeparator: {
        width: '100%',
        height: 2,
        backgroundColor: '#D9D9D9',
    },
    newContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
    },
    sharedText: {
        fontFamily: 'JBM',
        fontSize: 27,
        color: '#2F2DA3',
        marginBottom: 10,
    },
    radioButtonGroup: {
        flexDirection: 'row',
    },
    radioButton: {
        width: 80, // Decreased width of the radio buttons
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#2F2DA3',
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
        justifyContent: 'center', // Center text vertically
    },
    radioButtonText: {
        fontFamily: 'JBM',
        fontSize: 16,
        color: '#333',
        textAlign: 'center', // Center text horizontally
    },
    radioButtonSelected: {
        backgroundColor: '#BEA315',
        borderWidth: 1,
        borderColor: '#2F2DA3',
    },
    addButton: {
        borderWidth: 1,
        borderColor: '#2F2DA3',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    addButtonLabel: {
        fontFamily: 'JBM',
        fontSize: 18,
        color: '#6F6F6F',
    },
});