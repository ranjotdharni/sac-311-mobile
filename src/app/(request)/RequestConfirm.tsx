import { useLocalSearchParams } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { global } from "../../customs";
import React from 'react';
import { globalFont } from "../../customs";
import { fontGetter } from "../../customs";

export default function RequestConfirm() {
    const nav = useNavigation()
    const { reqType, reqDesc } = useLocalSearchParams()

    const navigateToExplore2 = () => {
        (nav.navigate as (screen: string) => void)('Explore2');
    };

    return (
        <View style={styles.pageWrapper}>
            <View style={styles.innerPageWrapper}>
                <View style={styles.infoWrapper}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.basicText, { color: '#BEA315' }]}>Service</Text>
                        <View style={[styles.rectangle, styles.shadow, styles.editButtonContainer]}>
                            <Text style={[styles.basicText, styles.rectangleText]}>
                                {(reqType || '(the selected service)')}
                            </Text>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.editButtonText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.basicText, { color: '#BEA315' }]}>Location</Text>
                        <TouchableOpacity onPress={navigateToExplore2}>
                            <View style={[styles.rectangle, styles.shadow, styles.editButtonContainer]}>
                                <Text style={[styles.basicText, styles.rectangleText]}>
                                    (Select Location)
                                </Text>
                                <TouchableOpacity style={styles.editButton}>
                                    <Text style={styles.editButtonText}>Edit</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.basicText, { color: '#BEA315' }]}>Details</Text>
                        <View style={[styles.rectangle, styles.shadow]}>
                            <Text style={[styles.basicText, styles.rectangleText]}>
                                {(reqDesc || '(the submitted details)')}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.basicText, { color: '#BEA315' }]}>Attachments</Text>
                        <View style={[styles.attachmentRectangle, styles.shadow]}>
                            <Text style={[styles.basicText, styles.rectangleText]}>
                                (the attached file)
                            </Text>
                            <TouchableOpacity style={styles.attachmentButton}>
                                <Text style={styles.attachmentButtonText}>Browse</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => { nav.goBack() }} style={styles.returnWrapper}>
                    <Text style={[styles.returnText]}>Submit Request</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    returnText: {
        color: 'white',
        fontSize: 25,
        fontFamily: globalFont.chosenFont,
        padding:'3%',
    },
    basicText: {
        fontSize: 22,
        lineHeight: 25,
        color: '#BEA315',
    },
    barText: {
        fontSize: 25,
        marginLeft:'5%',
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
        justifyContent:'space-between',
        marginRight:'6%',
        marginTop:'13%',
    },
    rectangle: {
        borderRadius: 15, // Increase the borderRadius value for more rounded corners
        padding: 20,
        marginTop: 5,
        backgroundColor: 'white',
    },
    textContainer: {
        marginBottom: 40, // Adjust the marginBottom to increase or decrease spacing
    },
    boldText: {
        fontWeight: 'bold',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    rectangleText: {
        fontSize: 18, // Set a specific font size for the text inside the rectangles
        color: '#000000',
    },
    editButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    editButton: {
        backgroundColor: global.baseBlue100,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginLeft: 10,
    },
    editButtonText: {
        color: 'white',
        fontSize: 15,
        fontFamily: globalFont.chosenFont,
        fontWeight: 'bold',
    },
    attachmentRectangle: {
        borderRadius: 15, // Increase the borderRadius value for more rounded corners
        padding: 15,
        marginTop: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    attachmentButton: {
        backgroundColor: global.baseBlue100,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 15,
    },

    attachmentButtonText: {
        color: 'white',
        fontSize: 15,
        fontFamily: globalFont.chosenFont,
        fontWeight: 'bold',
    },

})