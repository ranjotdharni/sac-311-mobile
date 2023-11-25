import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import CustomText from '../(components)/CustomText';
import { useNavigation } from 'expo-router';
import { global } from "../../dummy";
import localData from './patch.json';
import BulletPointDisplay from './BulletPoints';

export type WhatsNewData = {
    header: string;
    body: string;
  };

export default function WhatsNew(){
    // Define the state with the correct type
  const [data, setData] = useState<WhatsNewData | null>(null);

  useEffect(() => {
    // Directly set the imported JSON data to state
    setData(localData);
  }, []);

    const navi = useNavigation()
    return(
        <View style={styles.mainWrapper}>

            <View style={styles.xWrapper}>
                <View style={styles.inXWrapper}>
                    <TouchableOpacity onPress={() => { navi.goBack() }}> 
                        <Image style={styles.xIcon} source={require('../../assets/png/exit_x.png')} />
                    </TouchableOpacity>
                    <Text style={styles.topText}>Patch Notes</Text>
                </View>
            </View>
            <View style={styles.container}>
              <Image
                    source={require('../../assets/png/whatsnewbg.png')}
                    style={styles.bgImage}
                />
             <View style={styles.overlay}>
                {data ? (
                    <>
                   <Text style={styles.headerText}>{data.header}</Text>
                   <BulletPointDisplay />
                   <Text style={styles.bodyText}>{data.body}</Text>
                   </>
                ) : (
                    <Text style={styles.headerText}> Loading... </Text>
                )}
               </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: global.baseBackground100,
    },
    container: {
        width: '100%',
        height: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    xWrapper:{
        width: '100%',
        height: '7%',
        shadowColor: '#000',
        shadowOffset:{
            width:-2,
            height:-2
        },
        shadowOpacity: .25,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: global.baseBlue100,
    },
    xIcon:{
        width: 25,
        height: 25,
    },
    inXWrapper:{
        marginright: '10%',
        left: 20,
        marginTop: '6%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bgImage:{
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        opacity: .8,
    },
    overlay:{
        width: '80%',
        height: '80%',
        top: 20,
        backgroundColor: 'rgba(255,255,255, .85)',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 8,
    },
    topText: {
        fontSize: 20,
        color: global.baseBackground100,
        marginRight: '41%',
    },
    headerText: {
        fontSize: 18,
        color: 'black',
        fontFamily: 'JBM-B',
        textAlign: 'center',
    },
    bodyText: {
        fontSize: 16,
        top: 20,
        color: 'black',
        fontFamily: 'JBM',
        textAlign: 'center',
    },
});





