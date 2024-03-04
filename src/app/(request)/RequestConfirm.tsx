import { useLocalSearchParams } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, StyleSheet, Image, Alert, ScrollView } from "react-native";
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { global } from "../../customs";
import { globalFont } from "../../customs";
import { fontGetter } from "../../customs";
import CustomText from "../(components)/CustomText";


export default function RequestConfirm() {
    const nav = useNavigation()
    const { reqType, reqDesc, reqLoc } = useLocalSearchParams()

    const [image, setImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        requestMediaLibraryPermission();
    }, []);

    const requestMediaLibraryPermission = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            setError('Permission Denied: Sorry, we need camera roll permission to upload images.');
        }
    };

    const navigateToExplore2 = () => {
        (nav.navigate as (screen: string) => void)('Explore2');
    };

    const pickImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            
            if (status !== 'granted') {
                setError('Permission Denied: Sorry, we need camera roll permission to upload images.');
            } else {
                const result = await ImagePicker.launchImageLibraryAsync();
                
                if (result && 'uri' in result && typeof result.uri === 'string') {
                    setImage(result.uri);
                    setError(null);
                } else {
                    setError('No image selected');
                }
            }
        } catch (error) {
            setError('Error picking image: ' + (error as Error).message);
        }
    };

    return (
        <View style={styles.pageWrapper}>
            <View style={styles.exitWrapper}>
                    <View style={styles.innerExitWrapper}>
                        <CustomText style={styles.barText} text='Confirm Request' nol={0} font='jbm' />
                        <TouchableOpacity onPress={() => { nav.goBack() }}> 
                            <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                        </TouchableOpacity>
                    </View>
            </View>
            <ScrollView style={styles.innerPageWrapper} contentContainerStyle={{alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={styles.infoWrapper}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.basicText, { color: '#BEA315' }]}>Service</Text>
                        <View style={[styles.rectangle, styles.shadow, styles.editButtonContainer]}>
                            <View style={{width: '70%'}}>
                                <Text style={[styles.basicText, styles.rectangleText]}>
                                    {reqType || '(the selected service)'}
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.editButtonText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.textContainer}>
                            <Text style={[styles.basicText, { color: '#BEA315' }]}>Location</Text>                        
                        <TouchableOpacity onPress={navigateToExplore2}>
                            <View style={[styles.rectangle, styles.shadow, styles.editButtonContainer]}>
                                <View style={{width: '70%'}}>
                                    <Text style={[styles.basicText, styles.rectangleText]}>
                                        {(reqLoc || 'Select Location')}
                                    </Text>
                                </View>
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
                                {reqDesc || '(the submitted details)'}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={[styles.basicText, { color: '#BEA315' }]}>Add Files</Text>
                        <View style={[styles.attachmentRectangle, styles.shadow]}>
                            <Text style={[styles.basicText, styles.rectangleText]}>
                                (Your files)
                            </Text>
                            <TouchableOpacity style={styles.attachmentButton}>
                                <Text style={styles.attachmentButtonText}>Upload Files</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={[styles.basicText, { color: '#BEA315' }]}>Add Photos</Text>
                        <View style={[styles.rectangle, styles.shadow, styles.editButtonContainer]}>
                            <TouchableOpacity style={styles.editButton} onPress={pickImage}>
                                <Text style={styles.editButtonText}>Upload Photos</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {image && (
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: image }} style={styles.image} />
                        </View>
                    )}

                    {error && (
                        <Text style={styles.errorText}>{error}</Text>
                    )}
                </View>

                <TouchableOpacity onPress={() => nav.goBack()} style={styles.returnWrapper}>
                    <Text style={[styles.returnText]}>Submit Request</Text>
                </TouchableOpacity>

                <View style={styles.pagePad}></View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
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
        height:'10%',
    },
    innerExitWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:'6%',
        marginTop:'13%',
    },
    barText: {
        fontSize: 25,
        marginTop: '-6%',
        marginLeft:'5%',
        fontFamily: globalFont.chosenFont,
        color: global.baseBackground100,
    },
    resizeIcon:{
        width:30,
        height:30,
        marginTop: '-75%',
    },
    returnWrapper: {
        alignItems: 'center',
        width: '60%',
        borderRadius: 10,
        backgroundColor: global.baseBlue100,
        shadowColor: '#000',
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    pageWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: global.baseBackground100,
    },
    innerPageWrapper: {
        height: '83%',
        flexDirection: 'column',
    },
    pagePad: {
        height: 30
    },
    returnText: {
        color: 'white',
        fontSize: 25,
        fontFamily: globalFont.chosenFont,
        padding: '3%',
    },
    basicText: {
        fontSize: 22,
        lineHeight: 25,
        color: '#BEA315',
    },
    infoWrapper: {
        paddingTop: '5%',
        width: '90%',
    },
    rectangle: {
        borderRadius: 15,
        padding: 20,
        marginTop: 5,
        backgroundColor: 'white',
    },
    textContainer: {
        marginBottom: 40,
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
        fontSize: 15,
        fontFamily: globalFont.chosenFont,
        color: global.baseGrey100,
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
        borderRadius: 15,
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
    imageContainer: {
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});