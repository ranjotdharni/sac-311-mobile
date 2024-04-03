import { View, StyleSheet, Dimensions, Image, Animated } from "react-native";
import { dateAtDaysAgo, dateToFormat, generateEndpointUrl, generateSymbolUrl, responseType, shadowUniversal } from "../../../customs";
import { global } from "../../../customs";
import { useEffect, useRef, useState } from "react";
import { globalFont } from "../../../customs";
import * as Location from 'expo-location';
import MapView, { LatLng, Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Loader } from "../Loader";
import { MaterialIcons } from "@expo/vector-icons";
import CustomText from "../CustomText";
import { router } from "expo-router";

const initialRegion: Region = {
    latitude: 38.574713,
    longitude: -121.491489,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const markerViewWidth = 0.9 // as percentage of screen width
const markerItemRadius = 5
const defaultQuery = generateEndpointUrl(`NOT(Address='')`, 5, [])
const params: [string, string][] = [
    ['orderByFields', 'ReferenceNumber'],
    ['geometryType', 'esriGeometryPoint'],
    ['distance', '1000'],
    ['returnDistinctValues', 'true']
]

const initialLatLng: LatLng = {
    latitude: 38.574713,
    longitude: -121.491489
}

export default function RequestList()
{
    const mapRef = useRef<MapView>(null)
    let offsetLeft = useRef(new Animated.Value(0)).current

    const [loader, setLoader] = useState<boolean>(false)
    const [testData, setTestData] = useState<Array<responseType>>([])
    const [latlng, setLatlng] = useState<LatLng>(initialLatLng)
    const [highlight, setHighlight] = useState<number>(0)
    const [permission, setPermission] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('Use My Location')
    const [left, setLeft] = useState<boolean>(false)
    const [right, setRight] = useState<boolean>(false)

    async function fetchTestData() {
        setLoader(true)
        let temp: responseType[] = []

        await fetch((generateEndpointUrl(`NOT(Address='') AND DateCreated > DATE '${dateToFormat('YYYY-MM-DD', dateAtDaysAgo(3))}'`, 5, [...params, ['geometry', `${latlng.longitude},${latlng.latitude}`]]))).then((middle) => {
            return middle.json()
        }).then((res) => {
            temp = [...res.features]
        })

        if (temp.length === 0) {
            await fetch(defaultQuery).then(middle => middle.json()).then(res => setTestData(res.features))
            setMessage('No Nearby Requests')
            setTimeout(() => {setMessage('Use My Location')}, 7000)
        }
        else {
            setTestData(temp)
            setMessage(latlng === initialLatLng ? 'Use My Location' : 'Nearby Requests')
        }

        setLoader(false)
    }

    function toRight() {
        if (testData.length === 0 || highlight === testData.length - 1)
            return

        if (highlight < testData.length - 1) {
            setHighlight(highlight + 1)
            setRight(true)
        }
    }

    function toLeft() {
        if (testData.length === 0 || highlight === 0)
            return

        if (highlight > 0) {
            setHighlight(highlight - 1)
            setLeft(true)
        }
    }
/*
<CustomMarker 
                    key={mark.attributes.ReferenceNumber + "NearbyMarkerSuffix"} 
                    markerData={mark} 
                    image={generateSymbolUrl(mark.attributes.CategoryLevel1)}
                    iconScale={45}
                    fadeInDelay={index * 50}
                    backgroundColor={global.baseBlue100}
                    passUp={() => {}}
                />
*/

    /*
        useEffect(() => {
        fetchTestData()
    }, [latlng])
    */

    async function getPermissions() {
        setPermission((await Location.getForegroundPermissionsAsync()).status === 'granted')
    }

    /*
    useEffect(() => {
        (async () => {

          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLatlng({latitude: location.coords.latitude, longitude: location.coords.longitude})
        })();
    }, []);
    */

    async function useMyLocation() {
        if (!permission) {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setPermission(false)
                return
            }
            else {
                setPermission(true)
            }
        }

        let location = await Location.getCurrentPositionAsync()
        setLatlng({latitude: location.coords.latitude, longitude: location.coords.longitude})
    }

    useEffect(() => {
        if (testData.length !== 0) {
            setTimeout(() => {
                mapRef.current?.fitToCoordinates(
                    testData.map((item) => { 
                        return {latitude: item.geometry.y, longitude: item.geometry.x}
                    }),
                    {
                        animated: true,
                        edgePadding: {
                            top: 50,
                            bottom: 50,
                            right: 50,
                            left: 50
                        }
                    }
                )
            }, 1000)
        }
    }, [testData])

    useEffect(() => {
        Animated.spring(offsetLeft, {
            toValue: (Dimensions.get('screen').width - Dimensions.get('screen').width * ((1 - markerViewWidth) / 2)) * highlight  * -1,
            //duration: 250,
            //easing: Easing.ease,
            useNativeDriver: true,
        }).start()

        if (right) {
            setRight(false)
        }

        if (left) {
            setLeft(false)
        }
    }, [highlight])

    useEffect(() => {
        getPermissions()

        if (permission) {
            useMyLocation()
        }
        
        fetchTestData()
    }, [router])

    return (
        loader ? 
        <Loader /> :
        <View style={styles.listWrapper}> 

            <MapView zoomEnabled={false} scrollEnabled={false} rotateEnabled={false} ref={mapRef} provider={PROVIDER_GOOGLE} initialRegion={initialRegion} style={[styles.embeddedMap, {width: Dimensions.get('screen').width * 0.9}]}>
                {
                    testData.map((mark, index) => {
                        return (
                            <Marker onPress={() => setHighlight(index)} id={mark.attributes.ReferenceNumber + "MarkerId"} key={mark.attributes.ReferenceNumber  + "MarkerEmbeddedKey"} coordinate={{latitude: mark.geometry.y, longitude: mark.geometry.x}}>
                                <Image style={[styles.mapMarker, {width: index === highlight ? 30 : 15}]} source={{uri: generateSymbolUrl(mark.attributes.CategoryLevel1)}} />
                            </Marker>
                        )
                    })
                }
            </MapView>
            <View style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height * 0.05}}>
                <Animated.View style={{transform: [{ translateX: offsetLeft }], marginTop: 10, width: 'auto', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                    {
                        testData.map(item => {
                            return (
                                <View key={item.attributes.ReferenceNumber} style={[{width: Dimensions.get('screen').width * markerViewWidth, marginLeft: Dimensions.get('screen').width * ((1 - markerViewWidth) / 2), height: '90%', backgroundColor: global.baseBackground100, borderRadius: markerItemRadius, display: 'flex', flexDirection: 'row'}, shadowUniversal.default]}>
                                    <View style={{width: '15%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: global.baseBlue100, borderTopLeftRadius: markerItemRadius, borderBottomLeftRadius: markerItemRadius}}>
                                        <Image style={{height: '100%', aspectRatio: 1 / 1}} source={{uri: generateSymbolUrl(item.attributes.CategoryLevel1)}} />
                                    </View>
                                    <View style={{width: '85%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                                        <View style={{width: '75%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                            <CustomText text={item.attributes.CategoryLevel1} style={{color: global.baseGold100, fontSize: 20}} font='jbm' nol={2} />
                                        </View>
                                        <TouchableOpacity onPress={() => router.push({pathname: '/(requestview)/RequestFullView', params: {requestData: JSON.stringify(item)}})} style={{width: '55%', height: '60%', padding: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: global.baseBlue100, borderRadius: 15}}>
                                            <CustomText text='View' style={{color: global.baseBackground100, fontSize: 13, position: 'relative', left: 5}} font='jbm' nol={0} />
                                            <MaterialIcons size={23} style={{position: 'relative', left: 5}} color={global.baseBackground100} name="chevron-right" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                    }
                </Animated.View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: Dimensions.get('screen').width * 0.9, height: 75}}>
                <TouchableOpacity onPress={() => { useMyLocation(); fetchTestData(); }} style={{marginLeft: 10}}>
                    <CustomText text={message} font='jbm' nol={0} style={{fontSize: 17, color: '#2B60E9'}} />
                </TouchableOpacity>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: Dimensions.get('screen').width * 0.3}}>
                    <TouchableOpacity onPress={toLeft} style={{borderRadius: 15, backgroundColor: (highlight === 0 ? global.baseGrey200 : global.baseBlue100), width: Dimensions.get('screen').width * 0.125, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <MaterialIcons size={25} color={global.baseBackground100} name="chevron-left" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toRight} style={{borderRadius: 15, backgroundColor: (highlight === testData.length - 1 ? global.baseGrey200 : global.baseBlue100), width: Dimensions.get('screen').width * 0.125, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <MaterialIcons size={25} color={global.baseBackground100} name="chevron-right" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

/*#
<MapView zoomEnabled={false} scrollEnabled={false} rotateEnabled={false} ref={mapRef} provider={PROVIDER_GOOGLE} initialRegion={initialRegion} style={[styles.embeddedMap, {width: Dimensions.get('screen').width * 0.9}]}>
                {
                    testData.map((mark, index) => {
                        return (
                            <Marker onPress={() => setHighlight(index)} id={mark.attributes.ReferenceNumber + "MarkerId"} key={mark.attributes.ReferenceNumber  + "MarkerEmbeddedKey"} coordinate={{latitude: mark.geometry.y, longitude: mark.geometry.x}}>
                                <Image style={[styles.mapMarker, {width: index === highlight ? 30 : 15}]} source={{uri: generateSymbolUrl(mark.attributes.CategoryLevel1)}} />
                            </Marker>
                        )
                    })
                }
            </MapView>
#*/

const styles = StyleSheet.create({
    listWrapper: {
        backgroundColor: global.baseBackground100,
        position: 'relative',
        width: Dimensions.get('screen').width,
        height: 'auto',
        alignItems: 'center',
        overflow: 'visible',
        
    },
    listTitleWrapper: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.05,
    },
    listTitle: {
        color: 'white',
        alignSelf: 'flex-start',
        fontFamily: globalFont.chosenFont,
        fontSize: 30,
        padding: 0,
        backgroundColor: global.baseGold100,
        borderRadius: 8,
        overflow: 'hidden',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginLeft: '6%',
        position: 'relative',
        top: '0.75%',
    },

    embeddedMap: {
        height: 175,
        marginTop: 15,
        borderColor: global.baseBlue100,
        borderWidth: 7,
        borderRadius: 20
    },

    mapMarker: {
        aspectRatio: 1 / 1
    }
})