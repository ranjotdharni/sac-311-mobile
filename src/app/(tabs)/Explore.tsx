import { View, StyleSheet, ScrollView, Dimensions, Animated, Image, Easing} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";   //By default, this component uses Google Maps as provider
import SearchBar from "../(components)/Profile/SearchBar";
import { global, shadowUniversal, generateEndpointUrl, responseType, unixTimeDaysAgo } from "../../customs";
import { useEffect, useRef, useState } from "react";
import CustomText from "../(components)/CustomText";
import { TouchableOpacity, PanGestureHandler, GestureEvent, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import Request from "../(components)/Request";
import { FontAwesome } from "@expo/vector-icons";
import CustomMarker from "../(components)/CustomMarker";

const padKeySuffix: string = '-padRequests'
const markerKeySuffix: string = '-markers'
const searchKeySuffix: string = '-scrollAddresses'

function Loader() {
    const loaderAnim = useRef(new Animated.Value(0)).current

    Animated.loop(
        Animated.timing(loaderAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
        })
    ).start()

    return (
        <Animated.View style={[styles.loader, {transform: [{ rotate: loaderAnim.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg']}) }]}]}></Animated.View>
    )
}

export default function Explore()
{
    let sQuery = ''

    const [activeMarker, setActiveMarker] = useState<string>('')
    const [markers, setMarkers] = useState<Array<responseType>>([])
    const [padDistrict, setPadDistrict] = useState<string>('')
    const [padAddress, setPadAddress] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)
    const [requests, setRequests] = useState<Array<responseType>>([])
    const [data, setData] = useState<Array<responseType>>([])
    const [results, showResults] = useState<boolean>(data.length !== 0)

    const padHiddenHeight = Dimensions.get('screen').height * 0.8
    const padVisibleHeight = Dimensions.get('screen').height * 0.47

    const swipeAnim = useRef(new Animated.Value(padHiddenHeight)).current
    const fadeAnim = useRef(new Animated.Value(0)).current

    async function grabInitialProps() {
        const query = generateEndpointUrl(`NOT(Address='')`, 100, [])
    
        await fetch(query).then((middle) => {
            return middle.json()
        }).then((res) => {
            setMarkers(res.features)
        })
    }

    function swipeIn() {
        Animated.timing(swipeAnim, {
            toValue: padVisibleHeight,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    function fadeIn() {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    function swipeOut() {
        Animated.timing(swipeAnim, {
            toValue: padHiddenHeight,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    function fadeOut() {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    function showPad() {
        fadeIn()
        swipeIn()
    }

    function hidePad() {
        setActiveMarker('')
        fadeOut()
        swipeOut()
    }

    function getInitialState() {
        return (
            {
                latitude: 38.574713,
                longitude: -121.491489,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        )
    }

    //WIP for fetching and parsing the JSON data, uncommenting this makes Expo Go crash every minute or so
    //const [requests, setRequests] = useState([]);
    //fetch('https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/SalesForce311_View/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    //.then(response => response.json())
    //.then(json => setRequests(json));

    const mapRef = useRef<MapView>(null)

    function initializePad(obj: responseType) { //will wipe current active marker!!!!!!!!!!!!!!
        setActiveMarker('')
        setData([])
        setRequests([])
        showResults(false)
        setPadDistrict(obj.attributes.CouncilDistrictNumber)
        setPadAddress(obj.attributes.Address)
        showPad()
        mapRef.current?.animateToRegion({latitude: obj.geometry.y, longitude: obj.geometry.x, latitudeDelta: getInitialState().latitudeDelta, longitudeDelta: getInitialState().longitudeDelta})
    }

    function onSwipe(evt: GestureEvent<PanGestureHandlerEventPayload>) {
        if (evt.nativeEvent.translationY > 15)
        {
            hidePad()
        }
    }

    async function setQuery(arg1: string, arg2: boolean) {
        sQuery = arg1.trim()
        if (sQuery === '')     return    //break clause

        const query = generateEndpointUrl(`NOT(Address='') AND UPPER(Address) LIKE UPPER('%${sQuery}%')`, 15, [])

        await fetch(query).then((middle) => {
            return middle.json()
        }).then((res) => {
            setData(res.features)
        })

        if (!results || arg2)   showResults(true)
        if (!arg2)  showResults(false)
    }

    async function handlePress(obj: responseType) {
        initializePad(obj)

        const query = generateEndpointUrl(`Address='${obj.attributes.Address}'`, 100, [])

        setLoader(true)
        await fetch(query).then((middle) => {
            return middle.json()
        }).then((res) => {
            setLoader(false)
            setRequests(res.features)
        })
    }

    function activateMarker(obj: responseType) {
        obj.geometry.y -= 0.005    //adjust geometry first b/c pad initialization will set coords based off of passed in object
        initializePad(obj)

        setActiveMarker(obj.attributes.ReferenceNumber + markerKeySuffix)
        setRequests([obj])
    }

    useEffect(() => {
        grabInitialProps()
    })

    return (
        <View style={{flex: 1}}>
                <Animated.View style={[styles.requestWindow, {opacity: fadeAnim, transform: [{translateY: swipeAnim}]}]}>
                    <View style={styles.padTopBar}>
                        <View style={styles.padLeftPartition}>
                            <CustomText nol={3} text={padAddress} font='JBM' style={styles.padAddress} />
                            <View style={{flexDirection: 'row', marginBottom: '1%'}}>
                                <FontAwesome name='trash' size={30} color={global.baseGrey200} />
                                <CustomText text='Thursday' nol={0} font='JBM-B' style={{marginTop: '4%', marginLeft: '2.5%', color: global.baseGrey200}} />
                            </View>
                        </View>
                        <View style={styles.padRightPartition}>
                            <CustomText text={padDistrict} nol={0} font='JBM' style={styles.padDistrict} />
                            <TouchableOpacity style={styles.newRequestButton}>
                                <CustomText text='New Request' nol={0} font='JBM' style={{fontSize: 15, padding: 15, color: 'white', textAlign: 'center'}} />
                            </TouchableOpacity>
                        </View>

                        <PanGestureHandler onGestureEvent={onSwipe}>
                            <View style={{position: 'absolute', width: '100%', height: '100%'}}>
                                <TouchableOpacity style={{top: 7, backgroundColor:"grey", width: 75, height: 5, borderRadius: 10, alignSelf: 'center'}}></TouchableOpacity>
                            </View>
                        </PanGestureHandler>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems: 'center', paddingBottom: Dimensions.get('screen').height * 0.05}}>
                        {
                            (loader ? <Loader /> :
                                requests.map((item) => {
                                    return (
                                        <Request
                                            key={item.attributes.ReferenceNumber + padKeySuffix}
                                            data={item}
                                            width={'90%'}
                                            height={Dimensions.get('screen').height * 0.1}
                                            compact={true}
                                        />
                                    )
                                })
                            )
                        }
                    </ScrollView>
                </Animated.View>
                <MapView ref={mapRef} provider={PROVIDER_GOOGLE} region={getInitialState()} style={{width: '100%', height: '100%', position:'absolute'}}>
                    {
                        markers.map((mark) => {
                            return (
                                <CustomMarker 
                                    key={mark.attributes.ReferenceNumber + markerKeySuffix} 
                                    markerData={mark} 
                                    isActive={activeMarker === mark.attributes.ReferenceNumber + markerKeySuffix}
                                    passUp={activateMarker}
                                />
                            )
                        })
                    }
                </MapView>
                <SearchBar style={styles.searchBar} passUp={setQuery} placeholder={'Search Address'} />
                <ScrollView style={[styles.searchResults, shadowUniversal.default, {display: (results ? 'flex' : 'none')}]}>
                    {
                        data.map((obj: responseType) => {
                            return (
                                <TouchableOpacity onPress={() => {handlePress(obj)}} key={obj.attributes.ReferenceNumber + searchKeySuffix} style={[styles.resultShadow, shadowUniversal.default]}>
                                    <CustomText text={obj.attributes.Address} style={styles.result} nol={0} font="JBM" />
                                </TouchableOpacity>
                            )
                        })
                    }
                    <View style={styles.searchResultsPaddingBottom} />
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    searchBar: {
        width: '95%',
        position: 'absolute',
        zIndex: 2,
        top: '5%',
        left: '2.5%',
        borderWidth: 1,
        borderColor: global.baseBlue100,
    },

    searchResults: {
        backgroundColor: global.baseBackground100,
        width: '90%',
        height: '40%',
        position: 'absolute',
        top: '13.5%',
        left: '5%',
        borderRadius: 15,
        paddingTop: '5%',
    },

    searchResultsPaddingBottom: {
        width: '100%',
        height: 25,
    },

    resultShadow: {
        backgroundColor: global.baseBackground100,
        borderRadius: 10,
        alignSelf: 'center',
        marginBottom: '2.5%',
        padding: '5%',
        width: '90%',
    },

    result: {
        textAlign: 'center',
        overflow: 'hidden',
    },

    requestWindow: {
        backgroundColor: '#ffffffdd',
        borderRadius: 15,
        alignSelf: 'center',
        width: '88%',
        height: '40%',
        overflow: 'scroll',
        zIndex: 3,
        position: 'absolute',
        borderColor: 'transparent',
        shadowColor: "#000000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.30,
        shadowRadius: 6,
        elevation: 9,
    },

    padTopBar: {
        width: '90%',
        height: '35%',
        left: '5%',
        borderBottomColor: '#1b1b1b2f',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
    },

    requestBubble: {
        backgroundColor: '#c79d3c',
        color: '#ffffff',
        opacity: 1,
        borderRadius: 15,
        alignSelf: 'center',
        width: '90%',
        height: 'auto',
        padding:5,
        margin:3,
        shadowColor: "#000000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 6,
        elevation: 1,
    },

    requestText: {
        color: '#ffffff',
        left: "5%",
        fontSize: 14
    },

    loader: {
        width: '15%',
        aspectRatio: 1 / 1,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: '20%',
        borderColor: global.baseGold100,
        borderWidth: 3,
        borderStyle: 'dotted',
    },

    padLeftPartition: {
        width: '60%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    padRightPartition: {
        width: '40%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    padAddress: {
        marginTop: '10%',
        color: global.baseGold100,
        fontSize: 18.5,
    },

    padDistrict: {
        marginTop: '16%',
        marginRight: '10%',
        color: global.baseGrey100,
        fontSize: 15,
        alignSelf: 'flex-end'
    },

    newRequestButton: {
        backgroundColor: global.baseBlue100,
        borderRadius: 30,
        marginBottom: '5%',
    }
})