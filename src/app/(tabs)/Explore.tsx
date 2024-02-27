import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Details, PROVIDER_GOOGLE, Region } from "react-native-maps";   //By default, this component uses Google Maps as provider
import SearchBar from "../(components)/Profile/SearchBar";
import { global, shadowUniversal, generateEndpointUrl, responseType, dateAtDaysAgo, dateToFormat, generateSymbolUrl } from "../../customs";
import { useEffect, useMemo, useRef, useState } from "react";
import CustomText from "../(components)/CustomText";
import { TouchableOpacity, PanGestureHandler, GestureEvent, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import Request from "../(components)/Request";
import { FontAwesome } from "@expo/vector-icons";
import CustomMarker from "../(components)/CustomMarker";
import { Loader } from "../(components)/Loader";
import Animated from "react-native-reanimated";
import { FlashList } from "@shopify/flash-list"
import _ from 'lodash'
import { fontGetter } from "../../customs";

//const padKeySuffix: string = '-padRequests'
const markerKeySuffix: string = '-markers'
//const searchKeySuffix: string = '-scrollAddresses'

const padHiddenHeight = Dimensions.get('screen').height
const padVisibleHeight = Dimensions.get('screen').height * 0.47

const requestItemWidth = 0.75 // as a decimal percentage of screen width, used in multiple places synchronously so stored here for maintainability 
//const padAnimationTiming = 1000

function Explore()
{
    const controller = new AbortController()

    const mapRef = useRef<MapView>(null)

    const [addressQuery, setAddressQuery] = useState<string>('')
    const [markers, setMarkers] = useState<Array<responseType>>([])
    const [padDistrict, setPadDistrict] = useState<string>('')
    const [padAddress, setPadAddress] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)
    const [addressesLoading, setAddressesLoading] = useState<boolean>(false)
    const [requests, setRequests] = useState<Array<responseType>>([])
    const [data, setData] = useState<Array<responseType>>([])
    const [results, showResults] = useState<boolean>(false)
    const [requestFetch, triggerRequestFetch] = useState<responseType>()
    const [padPan, setPadPan] = useState(padHiddenHeight)
    const [region, setRegion] = useState<Region>({
        latitude: 38.574713,
        longitude: -121.491489,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    function hidePad() {
        //setActiveMarker('')
        setPadPan(padHiddenHeight)
    }

    function showPad() {
        setPadPan(padVisibleHeight)
    }

    /* 
        react-native-reanimated was giving compatability issues out the wazoo, fixed the issue for 
        react-native-reanimated and expo complains about compatability, fixed the issue for expo and
        react-native-reanimated complains about compatability; came up with below hacky animation 
        as temporary solution 
    */

    function watchSwipe(evt: GestureEvent<PanGestureHandlerEventPayload>) {
        setPadPan(Math.max(padVisibleHeight, padVisibleHeight + (evt.nativeEvent.translationY / 1.5)))
    }

    function detectSwipeEnd() {
        if (padPan > padVisibleHeight + 100) {
            hidePad()
        }
        else {
            setPadPan(padVisibleHeight)
        }
    }

    //WIP for fetching and parsing the JSON data, uncommenting this makes Expo Go crash every minute or so
    //const [requests, setRequests] = useState([]);
    //fetch('https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/SalesForce311_View/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    //.then(response => response.json())
    //.then(json => setRequests(json));

    function initializePad(obj: responseType) { //will wipe current active marker!!!!!!!!!!!!!!
        //setActiveMarker('')
        //setData([])
        //setRequests([])
        showResults(false)
        setPadDistrict(obj.attributes.CouncilDistrictNumber)
        setPadAddress(obj.attributes.Address)
        mapRef.current?.animateToRegion({latitude: obj.geometry.y - 0.005, longitude: obj.geometry.x, latitudeDelta: region.latitudeDelta, longitudeDelta: region.longitudeDelta})
        showPad()
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

        await fetch(query, { signal: controller.signal }).then((middle) => {
            return middle.json()
        }).then((res) => {
            setAddressesLoading(false)
            setData(res.features)
        }).catch(err => {
            return
            //console.log(err.message)
        })
    }, 750, {leading: false, trailing: true})

    function setQuery(value: string) {
        setAddressQuery(value.trim())
        fetchAddresses()
    }

    function handlePress(obj: responseType) {
        //showResults(false)
        controller.abort()
        setAddressQuery(obj.attributes.Address)
        initializePad(obj)
        setLoader(true)

        setTimeout(() => triggerRequestFetch(obj), 1250)
    }

    function activateMarker(obj: responseType) {
        initializePad(obj)

        //setActiveMarker(obj.attributes.ReferenceNumber + markerKeySuffix)
        setRequests([obj, ...requests])
    }

    const onRegionChange = _.debounce(async (region: Region, details: Details) => {
        // default markers are requests w/ valid addresses and created within in the last 7 days
        const params: [string, string][] = [
            ['orderByFields', 'Address'],
            ['geometryType', 'esriGeometryPoint'],
            ['geometry', `${region.longitude},${region.latitude}`],
            ['distance', '2000'],
            ['returnDistinctValues', 'true']
        ]
        const query = generateEndpointUrl(`NOT(Address='') AND DateCreated > DATE '${dateToFormat('YYYY-MM-DD', dateAtDaysAgo(3))}'`, 75, params)
    
        await fetch(query).then((middle) => {
            return middle.json()
        }).then((res) => {
            setMarkers(res.features)
        }).catch(err => {
            return
            //console.log(err.message)
        })
    }, 1000)

    useEffect(() => {
        async function grabInitialProps() {
            // default markers are requests w/ valid addresses and created within in the last 7 days
            const params: [string, string][] = [
                ['orderByFields', 'Address'],
                ['geometryType', 'esriGeometryPoint'],
                ['geometry', `${region.longitude},${region.latitude}`],
                ['distance', '1000']
            ]
            const query = generateEndpointUrl(`NOT(Address='') AND DateCreated > DATE '${dateToFormat('YYYY-MM-DD', dateAtDaysAgo(7))}'`, 100, params)
        
            await fetch(query).then((middle) => {
                return middle.json()
            }).then((res) => {
                setMarkers(res.features)
            }).catch(err => {
                return
                //console.log(err.message)
            })
        }

        grabInitialProps()
    }, [])

    useEffect(() => {
        async function grabRequests() {
            const query = generateEndpointUrl(`Address='${requestFetch?.attributes.Address}'`, 100, [['orderByFields', 'DateCreated']])

            await fetch(query).then((middle) => {
                return middle.json()
            }).then((res) => {
                setLoader(false)
                setRequests(res.features)
            }).catch(err => {
                return
                //console.log(err.message)
            })
        }

        grabRequests()

    }, [requestFetch])

    const memoizedMarkerRender = useMemo(() => {
        return markers.map((mark, index) => {
            return (
                <CustomMarker 
                    key={mark.attributes.ReferenceNumber + markerKeySuffix} 
                    markerData={mark} 
                    image={generateSymbolUrl(mark.attributes.CategoryLevel1)}
                    iconScale={25}
                    fadeInDelay={index * 50}
                    passUp={activateMarker}
                />
            )
        })
    }, [markers])

    /*const memoizedRequestsRender = useCallback(({item} : {item: any}) => 
        <Request
            data={item}
            width={Dimensions.get('screen').width * 0.75}
            height={Dimensions.get('screen').height * 0.1}
            compact={true}
    />, [])*/

    const memoizedRequestData = useMemo(() => requests.map((req, idx) => {
        return (
            <Request 
                key={idx}
                data={req}
                width={Dimensions.get('screen').width * requestItemWidth}
                height={Dimensions.get('screen').height * 0.1}
                compact={true}
            />
        )
    }), [requests])
    //req.attributes.ReferenceNumber + padKeySuffix

    const memoizedAddressData = useMemo(() => data.map((addr, idx) => {
        return (
            <TouchableOpacity key={idx} onPress={ () => handlePress(addr) } style={[styles.resultShadow, shadowUniversal.default]}>
                <CustomText text={addr.attributes.Address} style={styles.result} nol={0} font={fontGetter()} />
            </TouchableOpacity>
        )
    }), [data])

    return (
        <View style={{flex: 1}}>
                <Animated.View style={[styles.requestWindow, { transform: [{ translateY: padPan }] }]}>
                    <PanGestureHandler onEnded={detectSwipeEnd} onGestureEvent={watchSwipe}>
                        <View style={styles.padTopBar}>
                            <View style={styles.closeBar}></View>
                            
                            <View style={styles.padLeftPartition}>
                                <CustomText nol={3} text={padAddress} font={fontGetter()} style={styles.padAddress} />
                                <View style={{flexDirection: 'row', marginBottom: '1%'}}>
                                    <FontAwesome name='trash' size={30} color={global.baseGrey200} />
                                    <CustomText text='Thursday' nol={0} font={fontGetter()} style={{marginTop: '4%', marginLeft: '2.5%', color: global.baseGrey200}} />
                                </View>
                            </View>

                            <View style={styles.padRightPartition}>
                                <CustomText text={padDistrict} nol={0} font={fontGetter()} style={styles.padDistrict} />
                                <TouchableOpacity style={styles.newRequestButton}>
                                    <CustomText text='New Request' nol={0} font={fontGetter()} style={{fontSize: 15, padding: 15, color: 'white', textAlign: 'center'}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </PanGestureHandler>
                    {
                        loader ? 
                        <Loader /> :
                        <FlashList
                            contentContainerStyle={{paddingLeft: Dimensions.get('screen').width * ((1 - requestItemWidth) / 4), paddingBottom: Dimensions.get('screen').height * 0.05}}
                            data={memoizedRequestData}
                            renderItem={({item}) => item}
                            estimatedItemSize={100}
                        />
                    }
                </Animated.View>
                <Animated.View style={{width: '100%', height: '100%'}}>
                <MapView onRegionChange={onRegionChange} ref={mapRef} provider={PROVIDER_GOOGLE} region={region} style={{width: '100%', height: '100%', position:'absolute'}}>
                    {
                        memoizedMarkerRender
                    }
                </MapView>
                </Animated.View>
                <SearchBar value={addressQuery} style={styles.searchBar} onSubmit={() => { showResults(false) }} passUp={setQuery} onClear={() => { setAddressQuery('') }} placeholder={'Search Address'} />
                {
                    (
                        results ?
                        <View style={[styles.searchResults, shadowUniversal.default]}>
                            {
                                (
                                    addressesLoading ? 
                                    <Loader /> :
                                    <FlashList 
                                        estimatedItemSize={15}
                                        data={memoizedAddressData}
                                        renderItem={({item}) => item}
                                    />
                                )
                            }
                        </View> :
                        <></>
                    )
                }
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
        marginTop: '2.5%',
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
        borderBottomWidth: 2,
        display: 'flex',
        flexDirection: 'row',
    },

    closeBar: {
        position: 'absolute',
        width: '25%',
        height: 5,
        top: 5,
        left: '37.5%',
        borderRadius: 15,
        backgroundColor: global.baseGrey200,
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