import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Animated, Easing } from "react-native";
import { dateToFormat, generateSymbolUrl, global, requestTypes, responseType, shadowUniversal } from "../../customs";
import CustomText from "../(components)/CustomText";
import { fontGetter } from "../../customs";
import { globalFont } from "../../customs";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";

//==================================//
//  Pass the necessary parameters   //
//  when using this component!!!!   //
//==================================//

interface StatusColorMapType {
    "NEW": string,
    "IN PROGRESS": string,
    "CLOSED": string
}

interface DetailBoxProps {
    title: string,
    items: Array<[string, string]>
}

const viewBorderRadius: number = 20
const cutOffLength: number = 13
const CategoryLevel2CharWidth: number = 10

const statusColorMap: StatusColorMapType = {
    "NEW": 'green',
    "IN PROGRESS": global.baseGold100,
    "CLOSED": 'red'
}

export default function RequestFullView() {
    const nav = useNavigation()
    let data: responseType = JSON.parse(useLocalSearchParams<{ requestData: string }>().requestData)  //notice type after parsing!!!

    const initialRegion: Region = {
        latitude: data.geometry.y,
        longitude: data.geometry.x,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
    }

    let offsetLeft1 = useRef(new Animated.Value(0)).current
    let offsetLeft2 = useRef(new Animated.Value(data.attributes.CategoryLevel2.length * CategoryLevel2CharWidth)).current

    function grabDescription(): string {
        //requestTypes.filter(item => item.type === data.attributes.CategoryLevel1)[0].subTypes.filter(subItem => subItem.subType === data.attributes.CategoryLevel2)[0].description
        const top: {id: string, type: string, subTypes: Array<{id: string, description: string, subType: string}>} = requestTypes.filter(item => item.type === data.attributes.CategoryLevel1)[0]
        if (top === undefined) {
            return `${data.attributes.CategoryLevel2} request for ${data.attributes.CategoryLevel1} deparment.`
        }

        const item: {id: string, description: string, subType: string} = top.subTypes.filter(subItem => subItem.subType === data.attributes.CategoryLevel2)[0]
        return item === undefined ? `${data.attributes.CategoryLevel2} request for ${data.attributes.CategoryLevel1} deparment.` : item.description
    }

    useEffect(() => {
        if (data.attributes.CategoryLevel2.length > cutOffLength) {
            Animated.loop(
                Animated.parallel(
                    [
                        Animated.timing(offsetLeft1, {
                        toValue: (data.attributes.CategoryLevel2.length) * -(CategoryLevel2CharWidth * 2),
                        duration: (data.attributes.CategoryLevel2.length) * 300,
                        easing: Easing.linear,
                        delay: 1500,
                        useNativeDriver: true,
                      }),
                      Animated.timing(offsetLeft2, {
                        toValue: (data.attributes.CategoryLevel2.length) * -(CategoryLevel2CharWidth),
                        duration: (data.attributes.CategoryLevel2.length) * 300,
                        easing: Easing.linear,
                        delay: 1500,
                        useNativeDriver: true,
                      })
                    ]
                ) 
            ).start()
        }
    })

    function DetailBox(props: DetailBoxProps) {
        return (
            <View style={[{width: '85%', borderRadius: 10, backgroundColor: global.baseBackground100, paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, marginBottom: 20}, shadowUniversal.default]}>
                <View key={data.attributes.ReferenceNumber + "DetailBoxTitle"} style={{width: '100%', marginBottom: 10}}>
                    <CustomText text={props.title} nol={0} font='jbm' style={{fontSize: 15, color: global.darkGrey200}} />
                    <View style={{width: '99%', height: 1, backgroundColor: 'rgba(13, 13, 13, 0.25)'}}></View>
                </View>
                {
                    props.items.map((item, index) => {
                        return (
                            <View key={data.attributes.ReferenceNumber + `DetailBoxItem${index}`} style={{width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginLeft: '2.5%', marginBottom: 5}}>
                                <CustomText key={data.attributes.ReferenceNumber + `DetailBoxItemTitle`} text={`${item[0]}:`} nol={0} font='jbm' style={{fontSize: 10, color: global.baseGrey200}} />  
                                <CustomText key={data.attributes.ReferenceNumber + `DetailBoxItemValue`} text={item[1]} nol={0} font='jbm' style={{fontSize: item[1].length > 25 ? 10 : 14, color: global.darkGrey100}} />                                                      
                            </View>
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style={styles.pageWrapper}>
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                    <View style={{height: '90%', aspectRatio: 1 / 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '5%'}}>
                        <Image style={{height: '100%', aspectRatio: 1 / 1}} source={{uri: generateSymbolUrl(data.attributes.CategoryLevel1)}} />
                    </View>
                    <Text style={styles.barText}>{data.attributes.CategoryLevel1}</Text>
                    <TouchableOpacity onPress={() => { nav.goBack() }}> 
                        <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <MapView scrollEnabled={false} zoomEnabled={false} style={styles.embeddedMap} initialRegion={initialRegion} provider={PROVIDER_GOOGLE}>
                <Marker style={{overflow: 'visible', backgroundColor: 'transparent'}} coordinate={{latitude: data.geometry.y, longitude: data.geometry.x}}>
                    <View style={{overflow: 'visible', backgroundColor: 'transparent'}}>
                        <View style={{zIndex: 1, width: 50, aspectRatio: 1 / 1, backgroundColor: global.baseBlue100, borderRadius: 25, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <MaterialIcons name={(data.attributes.PublicStatus === 'CLOSED' ? 'check' : 'build')} size={25} color={global.baseBackground100} />
                        </View>
                        <View style={{zIndex: 0, width: 25, aspectRatio: 1 / 1, position: 'relative', top: -20, backgroundColor: global.baseBlue100, alignSelf: 'center', transform: [{rotate: '45deg'}]}}></View>
                    </View>
                </Marker>
            </MapView>
            <View style={styles.innerPageWrapper}>
                {/*Main Info*/}
                <ScrollView style={styles.infoWrapper} contentContainerStyle={{alignItems: 'center'}}>
                    <View style={{width: '100%', marginBottom: 5}}>
                        <Text style={{fontSize: 20, color: global.darkGrey200}}>
                            Description
                        </Text>
                    </View>

                    <View style={{width: '95%', marginBottom: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <CustomText text={grabDescription()} nol={0} font='jbm' style={{color: global.darkGrey100}} />
                    </View>

                    <DetailBox key={data.attributes.ReferenceNumber + `DetailBoxArea`} title="Area" items={[['Neighborhood', (data.attributes.Neighborhood || 'N/A')], ['Cross Street', (data.attributes.CrossStreet || 'N/A')], ['ZIP Code', (data.attributes.ZIP || 'N/A')], ['Council District', (data.attributes.CouncilDistrictNumber || 'N/A')]]} />
                    <DetailBox key={data.attributes.ReferenceNumber + `DetailBoxDetails`} title="Details" items={[['Created On', dateToFormat('MMM DD, YYYY', new Date(data.attributes.DateCreated))], ['Last Updated', dateToFormat('MMM DD, YYYY', new Date(data.attributes.DateUpdated))], ['Date Closed', data.attributes.DateClosed === null ? 'N/A' : dateToFormat('MMM DD, YYYY', new Date(data.attributes.DateClosed!))]]} />
                
                    <View style={{height: 325}}></View>
                </ScrollView>
                <View style={styles.padTopContainer}>
                    <View style={{position: 'absolute', top: '7.5%', borderRadius: 5, width: '97.5%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <View style={{backgroundColor: global.baseGold100, width: '30%', borderRadius: 5, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <Animated.Text style={{fontSize: 17, width: data.attributes.CategoryLevel2.length * CategoryLevel2CharWidth, minWidth: '30%', color: global.baseBackground100, paddingLeft: data.attributes.CategoryLevel2.length < 7 ? 0 : 7, paddingRight: 7, paddingTop: 2, paddingBottom: 2, maxHeight: 30, marginLeft: (data.attributes.CategoryLevel2.length > cutOffLength ? 0 : ((cutOffLength - data.attributes.CategoryLevel2.length) / 2) * CategoryLevel2CharWidth), transform: [{translateX: offsetLeft1}]}}>
                                {data.attributes.CategoryLevel2}
                            </Animated.Text>
                            <Animated.Text style={{fontSize: 17, width: data.attributes.CategoryLevel2.length * CategoryLevel2CharWidth, minWidth: '30%', color: global.baseBackground100, paddingLeft: data.attributes.CategoryLevel2.length < 7 ? 0 : 7, paddingTop: 2, paddingBottom: 2, maxHeight: 30, transform: [{translateX: offsetLeft2}]}}>
                                {data.attributes.CategoryLevel2}
                            </Animated.Text>
                        </View>
                    </View>

                    <View style={{position: 'absolute', top: 10, left: 10, zIndex: 1}}>
                        <View style={{padding: 5, borderRadius: 10, backgroundColor: global.baseBlue100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <CustomText text={data.attributes.Address} nol={0} font='jbm' style={{fontSize: 20, maxWidth: 250, color: global.baseBackground100}} />
                        </View>

                        <TouchableOpacity style={{left: 10, top: 5, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                            <CustomText text="View in Map" font='jbm' nol={0} style={{fontSize: 17, color: '#2B60E9'}} />
                            <MaterialIcons name="chevron-right" color='#2B60E9' size={20} />
                        </TouchableOpacity>
                    </View>

                    <View style={{position: 'absolute', left: '51%', top: 40, width: '45%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                            <CustomText text={data.attributes.PublicStatus} nol={0} font='jbm' style={{color: statusColorMap[data.attributes.PublicStatus as keyof StatusColorMapType]}} />
                    </View>

                    <View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                        <View style={{width: '44%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', marginRight: '2.5%', marginBottom: '1%'}}>
                            <View style={{backgroundColor: global.baseBlue100, borderRadius: 5}}>
                                <CustomText text={dateToFormat('MMM DD, YYYY', new Date(data.attributes.DateCreated))} nol={0} font='jbm' style={{color: global.baseBackground100, padding: 3}} />
                            </View>
                            <CustomText text="Date Created" nol={0} font='jbm' style={{fontSize: 10, color: global.baseGrey200}} />                                                        
                        </View>
                        <View style={{width: '44%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', marginRight: '2.5%', marginBottom: '-1%'}}>
                            <View style={{backgroundColor: global.baseBlue100, borderRadius: 5}}>
                                <CustomText text={data.attributes.CouncilDistrictNumber} nol={0} font='jbm' style={{color: global.baseBackground100, padding: 3}} />
                            </View>
                            <CustomText text="Locale" nol={0} font='jbm' style={{fontSize: 10, color: global.baseGrey200}} />                                                        
                        </View>
                    </View>

                    <View style={styles.padTopBottomBorder}></View>
                </View>
                {/*Return Button*/}
                <TouchableOpacity onPress={() => { nav.goBack() }} style={styles.returnWrapper}> 
                    <Text style={styles.returnText}>Return</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

/*
<View style={{width: '45%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginRight: '2.5%', marginBottom: '0.5%'}}>
                            <CustomText text="Status" nol={0} font='jbm' style={{fontSize: 10, color: global.baseGrey200}} />
                            <CustomText text={data.attributes.PublicStatus} nol={0} font='jbm' style={{color: global.darkGrey100}} />
                        </View>
*/

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
        marginTop: -35,
        backgroundColor: global.baseBackground100,
        borderRadius: viewBorderRadius,
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
        fontFamily: globalFont.chosenFont,
        lineHeight: 50,
    },
    barText: {
        fontSize: 25,
        fontFamily: globalFont.chosenFont,
        color:global.baseBackground100
    },
    infoWrapper:{
        paddingTop: 10,
        width:'90%',
        marginTop: 160
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
        borderRadius: viewBorderRadius,
        zIndex: 1
    },
    rowWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    innerExitWrapper:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginRight:'6%',
        marginTop:'13%',
    },
    addressHeader: {
        alignSelf: 'center',
        fontSize: 20,
        color: global.baseBackground100,
        backgroundColor: global.baseBlue100,
        padding: 5,
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: 'center'
    },

    embeddedMap: {
        width: '100%',
        height: '43%',
        position: 'relative',
        top: '-2%',
        zIndex: 0
    },
    
    padTopContainer: {
        position: 'absolute', 
        width: '100%', 
        height: 150, // Call this value x (see next comment)...
        backgroundColor: global.baseBackground100, 
        borderTopLeftRadius: viewBorderRadius, 
        borderTopRightRadius: viewBorderRadius,
    },

    padTopBottomBorder: {
        position: 'absolute',
        top: 160,   // then this value MUST BE x + 10!!!!!!!!!
        left: '2%',
        width: '96%',
        height: '1%',
        backgroundColor: global.baseGrey200,
        borderRadius: 10
    }
}) 