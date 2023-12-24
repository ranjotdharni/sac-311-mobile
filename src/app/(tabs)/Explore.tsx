import { View, StyleSheet, ScrollView, Dimensions, FlatList } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";   //By default, this component uses Google Maps as provider
import SearchBar from "../(components)/Profile/SearchBar";
import { global, shadowUniversal, generateEndpointUrl, responseType, dateAtDaysAgo, dateToFormat, generateSymbolUrl } from "../../customs";
import { useEffect, useMemo, useRef, useState, memo, useCallback } from "react";
import CustomText from "../(components)/CustomText";
import { TouchableOpacity, PanGestureHandler, GestureEvent, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import Request from "../(components)/Request";
import { FontAwesome } from "@expo/vector-icons";
import CustomMarker from "../(components)/CustomMarker";
import { Loader } from "../(components)/Loader";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import _ from 'lodash'
import { Logs } from 'expo'

Logs.enableExpoCliLogging()

const padKeySuffix: string = '-padRequests'
const markerKeySuffix: string = '-markers'
const searchKeySuffix: string = '-scrollAddresses'

const padHiddenHeight = Dimensions.get('screen').height * 0.8
const padVisibleHeight = Dimensions.get('screen').height * 0.47

function Explore()
{
    const mapRef = useRef<MapView>(null)

    const [addressQuery, setAddressQuery] = useState<string>('')
    const [activeMarker, setActiveMarker] = useState<string>('')
    const [markers, setMarkers] = useState<Array<responseType>>([])
    const [padDistrict, setPadDistrict] = useState<string>('')
    const [padAddress, setPadAddress] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)
    const [addressesLoading, setAddressesLoading] = useState<boolean>(false)
    const [requests, setRequests] = useState<Array<responseType>>([])
    const [data, setData] = useState<Array<responseType>>([])
    const [results, showResults] = useState<boolean>(data.length !== 0)
    const [requestFetch, triggerRequestFetch] = useState<responseType>()

    const swipeAnim = useSharedValue(padHiddenHeight)
    const fadeAnim = useSharedValue(0)

    const padAnimation = {
        transform: [{
            translateY: swipeAnim.value
        }],
        opacity: fadeAnim.value
    }

    function swipeIn() {
        swipeAnim.value = withTiming(padVisibleHeight, { duration: 450 })
    }

    function fadeIn() {
        fadeAnim.value = withTiming(1, { duration: 450 })
    }

    function swipeOut() {
        swipeAnim.value = withTiming(padHiddenHeight, { duration: 450 })
    }

    function fadeOut() {
        fadeAnim.value = withTiming(0, { duration: 450 })
    }

    const memoizedShowPad = useCallback(function showPad() {
        fadeIn()
        swipeIn()
    }, [])

    const memoizedHidePad = useCallback(function hidePad() {
        setActiveMarker('')
        fadeOut()
        swipeOut()
    }, [])

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

    function initializePad(obj: responseType) { //will wipe current active marker!!!!!!!!!!!!!!
        setActiveMarker('')
        setData([])
        //setRequests([])
        showResults(false)
        setPadDistrict(obj.attributes.CouncilDistrictNumber)
        setPadAddress(obj.attributes.Address)
        memoizedShowPad()
        mapRef.current?.animateToRegion({latitude: obj.geometry.y - 0.005, longitude: obj.geometry.x, latitudeDelta: getInitialState().latitudeDelta, longitudeDelta: getInitialState().longitudeDelta})
    }   //notice: latitude is geometry.y and longitude is geometry.x

    const fetchAddresses = _.throttle(async () => {
        if (addressQuery === '') {
            setAddressesLoading(false)
            showResults(false)
            return
        }   //break clause

        setAddressesLoading(true)
        showResults(true)

        const query = generateEndpointUrl(`NOT(Address='') AND UPPER(Address) LIKE UPPER('%${addressQuery}%')`, 15, [])

        await fetch(query).then((middle) => {
            return middle.json()
        }).then((res) => {
            setAddressesLoading(false)
            setData(res.features)
        })
    }, 750)

    function setQuery(value: string) {
        setAddressQuery(value.trim())
        fetchAddresses()
    }

    function handlePress(obj: responseType) {
        setAddressQuery(obj.attributes.Address)
        initializePad(obj)
        setLoader(true)
        triggerRequestFetch(obj)
    }

    function activateMarker(obj: responseType) {
        initializePad(obj)

        setActiveMarker(obj.attributes.ReferenceNumber + markerKeySuffix)
        setRequests([obj])
    }

    useEffect(() => {
        async function grabInitialProps() {
            // default markers are requests w/ valid addresses and created within in the last 7 days
            const query = generateEndpointUrl(`NOT(Address='') AND DateCreated > DATE '${dateToFormat('YYYY-MM-DD', dateAtDaysAgo(7))}'`, 1500, [['orderByFields', 'Address']])
        
            await fetch(query).then((middle) => {
                return middle.json()
            }).then((res) => {
                setMarkers(res.features)
            })
        }

        grabInitialProps()
    })

    useEffect(() => {
        async function grabRequests() {
            const query = generateEndpointUrl(`Address='${requestFetch?.attributes.Address}'`, 100, [])

            await fetch(query).then((middle) => {
                return middle.json()
            }).then((res) => {
                setLoader(false)
                setRequests(res.features)
            })
        }

        grabRequests()
    }, [requestFetch])

    const memoizedMarkerRender = useMemo(() => markers.map((mark) => {
        return (
            <CustomMarker 
                key={mark.attributes.ReferenceNumber + markerKeySuffix} 
                markerData={mark} 
                image={generateSymbolUrl(mark.attributes.CategoryLevel1)}
                passUp={activateMarker}
            />
        )
    }), [markers])

    //const memoizedRequestsRender = useMemo(() => requests, [requests])
    const memoizedRequestRender = useCallback(({item} : {item: any}) => 
        <Request
            data={item}
            width={Dimensions.get('screen').width * 0.75}
            height={Dimensions.get('screen').height * 0.1}
            compact={true}
    />, [requests])

    const memoizedAddressRender = useCallback(({item} : {item: any}) => 
        <TouchableOpacity onPress={() => handlePress(item) } style={[styles.resultShadow, shadowUniversal.default]}>
            <CustomText text={item.attributes.Address} style={styles.result} nol={0} font="JBM" />
        </TouchableOpacity>,    
    [data])

    return (
        <View style={{flex: 1}}>
                <Animated.View style={[styles.requestWindow, padAnimation]}>
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
                        <TouchableOpacity onPress={memoizedHidePad} style={{top: 5, left: -5, alignSelf: 'center'}}>
                            <FontAwesome name='remove' size={20} color={global.baseGrey200} />
                        </TouchableOpacity>
                    </View>
                    {
                        loader ? 
                        <Loader /> :
                        <FlatList
                            contentContainerStyle={{alignItems: 'center', paddingBottom: Dimensions.get('screen').height * 0.05}}
                            data={requests}
                            keyExtractor={item => item.attributes.ReferenceNumber + padKeySuffix}
                            renderItem={memoizedRequestRender}
                        />
                    }
                </Animated.View>
                <MapView ref={mapRef} provider={PROVIDER_GOOGLE} region={getInitialState()} style={{width: '100%', height: '100%', position:'absolute'}}>
                    {
                        memoizedMarkerRender
                    }
                </MapView>
                <SearchBar value={addressQuery} style={styles.searchBar} onSubmit={() => { showResults(false) }} passUp={setQuery} onClear={() => { setAddressQuery('') }} placeholder={'Search Address'} />
                {(
                    addressesLoading ?
                    <View style={[styles.searchResults, shadowUniversal.default]}><Loader /></View>:
                    <FlatList 
                        style={[styles.searchResults, shadowUniversal.default, {display: (results ? 'flex' : 'none')}]}
                        keyExtractor={item => item.attributes.ReferenceNumber + searchKeySuffix}
                        data={data}
                        renderItem={memoizedAddressRender}
                    />
                )}
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
        zIndex: 5,
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
        backgroundColor: global.baseBackground100,
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
        backgroundColor: global.baseBackground100,
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

export default Explore