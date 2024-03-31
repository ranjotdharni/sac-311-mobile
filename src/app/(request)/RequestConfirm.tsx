import { useLocalSearchParams } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, StyleSheet, Image, Alert, ScrollView, TextInput } from "react-native";
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ParamType, global, grabImmediateRoute, typeToCategoryLevel } from "../../customs";
import { globalFont } from "../../customs";
import { fontGetter } from "../../customs";
import CustomText from "../(components)/CustomText";
import { Loader } from "../(components)/Loader";
import * as DocumentPicker from 'expo-document-picker'; // Import DocumentPicker

export default function RequestConfirm() {
    const [selectedFile, setSelectedFile] = useState<DocumentPicker.DocumentPickerResult | null>(null);
    const nav = useNavigation()

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
    } = useLocalSearchParams()

    const [submit, setSubmit] = useState<boolean>(false)
    const [details, setDetails] = useState<string>(description as string)
    const [image, setImage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        requestMediaLibraryPermission();
    }, [])

    useEffect(() => {
        nav.setOptions({ gestureEnabled: !submit })
    }, [submit])

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

                if (result.canceled == false) {
                    setImage(result.assets[0].uri);
                    setError(null);
                } else {
                    setError('No image selected');
                }
            }
        } catch (error) {
            setError('Error picking image: ' + (error as Error).message);
        }
    };

    const handleUploadFilesPress = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync(); // Open document picker
            if (!result.canceled && result.assets?.length > 0) {
                console.log("File selected:", result.assets[0].uri);
                setSelectedFile(result);
                // Handle the file here, such as uploading to server or processing
            } else {
                console.log("Document picking cancelled or no file selected");
            }
        } catch (error) {
            console.error("Error while selecting document:", error);
            Alert.alert('Error', 'An error occurred while selecting document.');
        }
    };

    const SubmitView = ({ requestParams } : { requestParams: ParamType}) => {
        const [loading, setLoading] = useState<boolean>(true)
        const [error, setError] = useState<boolean>(false)
        
        async function createRequest(paramObj: ParamType) {
            await fetch(process.env.EXPO_PUBLIC_SANDBOX_URL + '/sobjects/Case', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': process.env.EXPO_PUBLIC_ACCESS_TOKEN as string
                },
                body: JSON.stringify(paramObj)
            }).then((middle) => {
                return middle.json()
            }).then((res) => {
                if (res.success !== true) {
                    setError(true)
                }
            }).catch(err => {
                setError(true)
                console.log(err)
            }).finally(() => {
                setLoading(false)
            })
        }

        useEffect(() => {
            createRequest(requestParams)
        }, [])

        return (
            <View style={{width: '100%', height: '100%', backgroundColor: global.baseBackground100}}>
                {
                    (
                        loading ? 
                        <Loader /> :
                        <>
                            <CustomText text={(error ? 'Request Error' : 'Request Submitted')} nol={0} font='jbm' style={{fontSize: 30, color: error ? 'red' : global.baseGold100, alignSelf: 'center', marginTop: 200}} />
                            <TouchableOpacity style={{backgroundColor: global.baseBlue100, alignSelf: 'center', width: 'auto', paddingHorizontal: 10, borderRadius: 15, marginTop: 15}} onPress={(submit ? () => (nav.navigate as (screen: string) => void)(returnRoute as string) : nav.goBack)}> 
                                <CustomText text='Go Back'  nol={0} font='jbm' style={{fontSize: 20, color: global.baseBackground100, alignSelf: 'center'}} />
                            </TouchableOpacity>
                        </>
                    )
                }
            </View>
        )
    }

    return (
        <View style={styles.pageWrapper}>
            <View style={styles.exitWrapper}>
                    <View style={styles.innerExitWrapper}>
                        <CustomText style={styles.barText} text={typeToCategoryLevel(Service_Type__c as string)} nol={0} font='jbm' />
                        <TouchableOpacity onPress={(submit ? () => (nav.navigate as (screen: string) => void)(returnRoute as string) : nav.goBack)}> 
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
                                    {typeToCategoryLevel(Sub_Service_Type__c as string)}
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
                                        {(Address__c || 'Select Location')}
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
                            <TextInput value={details} multiline onChangeText={setDetails} style={[styles.basicText, styles.rectangleText]}></TextInput>
                        </View>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={[styles.basicText, { color: '#BEA315' }]}>Add Files</Text>
                        <View style={[styles.attachmentRectangle, styles.shadow]}>
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.basicText, styles.rectangleText, { maxWidth: '70%' }]}>
                                    {(selectedFile ? selectedFile.assets?.[0].uri : 'No file selected')}
                                </Text>
                            </View>
                            <TouchableOpacity style={[styles.attachmentButton, { justifyContent: 'center' }]} onPress={handleUploadFilesPress}>
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

                <TouchableOpacity onPress={() => {setSubmit(true)}} style={styles.returnWrapper}>
                    <Text style={[styles.returnText]}>Submit Request</Text>
                </TouchableOpacity>

                <View style={styles.pagePad}></View>
            </ScrollView>
            {
                (submit ? <SubmitView requestParams={{
                    Subject,
                    Service_Type__c, // CategoryLevel1
                    Sub_Service_Type__c, // CategoryLevel2
                    Council_District__c, // CouncilDistrictNumber
                    GIS_Street_Address__c, // CrossStreet
                    GIS_Zip_Code__c, // ZIP
                    Address__c, // Address
                    GIS_System_Info__c, // "<Data_Source>  <SourceLevel1>"
                    GIS_Neighborhood_Name__c, // Neighborhood
                    description: details,
                    Address_Geolocation__Latitude__s,
                    Address_Geolocation__Longitude__s
                } as ParamType} /> : <></>)
            }
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