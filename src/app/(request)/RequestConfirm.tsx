import { useLocalSearchParams } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, StyleSheet, } from "react-native";
import { global } from "../../dummy";
import React from 'react';

export default function RequestConfirm(){
    const nav = useNavigation()
    const { reqType, reqDesc } = useLocalSearchParams()

    const navigateToExplore2 = () => {
        (nav.navigate as (screen: string) => void)('Explore2');
    };

    return (
        <View style={styles.pageWrapper}>
            {/*Top Bar*/}


            <View style={styles.innerPageWrapper}>
                {/*Main Info*/}
                <View style={styles.infoWrapper}>
                    {/*Possibly add category title here*/}
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Service:</Text>
                        <Text style={[styles.basicText, {fontSize: 15}]}>{(reqType || '(the selected service)')}</Text> 
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Location:</Text>
                        <TouchableOpacity onPress={navigateToExplore2}>
                            <Text style={styles.basicText}>(Select Location)</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Details:</Text>
                        <Text style={[styles.basicText, {fontSize: 15}]}>{(reqDesc || '(the submitted details)')}</Text> 
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Attachments:</Text>
                        <Text style={styles.basicText}>(the attached file)</Text> 
                    </View>

                

                

            </View>
            {/*Submit Button*/}
            <TouchableOpacity onPress={() => { nav.goBack() }} style={styles.returnWrapper}> 
                    <Text style={styles.returnText}>Submit Request</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
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
        fontFamily:'JBM',
        padding:'3%',
    },
    basicText: {
        fontSize: 22,
        lineHeight: 25,
    },
    barText: {
        fontSize: 25,
        marginLeft:'5%',
        fontFamily:'JBM',
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
}) 