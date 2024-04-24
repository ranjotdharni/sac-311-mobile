import { View, StyleSheet, Dimensions, Pressable, Animated, Easing } from "react-native";
import MapView, { Details, PROVIDER_GOOGLE, Region } from "react-native-maps";   //By default, this component uses Google Maps as provider
import SearchBar from "../(components)/Profile/SearchBar";
import { global, shadowUniversal, generateEndpointUrl, responseType, dateAtDaysAgo, dateToFormat, generateSymbolUrl, inclusiveRandom, responseObjectToParameter, ParamType, globalColorTheme, DEFAULT_REGION } from "../../customs";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import CustomText from "../(components)/CustomText";
import { TouchableOpacity, PanGestureHandler, GestureEvent, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import Request from "../(components)/Request";
import { MaterialIcons } from "@expo/vector-icons";
import CustomMarker from "../(components)/CustomMarker";
import { Loader } from "../(components)/Loader";
import { FlashList } from "@shopify/flash-list"
import _ from 'lodash'
import { fontGetter } from "../../customs";
import { globalFont } from '../../customs';
import { useRouter, router, useLocalSearchParams } from "expo-router";
import Filter, { CreateQueryParameters, INITIAL_PARAMETERS, INITIAL_QUERY, generateFilteredEndpointUrl } from "../(components)/Explore/Filter";

//const padKeySuffix: string = '-padRequests'
const markerKeySuffix: string = '-markerPrimary'
//const searchKeySuffix: string = '-scrollAddresses'

const padHiddenHeight = Dimensions.get('screen').height
const padVisibleHeight = Dimensions.get('screen').height * 0.47
const previewHiddenHeight = Dimensions.get('screen').height
const previewVisibleHeight = Dimensions.get('screen').height * 0.85

const filterHiddenPosition: number = -1 * Dimensions.get('screen').width 

const requestItemWidth = 0.75 // as a decimal percentage of screen width, used in multiple places simultaneously so stored here for maintainability 
//const padAnimationTiming = 1000

const reloadStop = {
    "latitudeDelta": 0.03216870535133154, 
    "longitudeDelta": 0.019018203020110036
}
const activeZoom = {
    "latitudeDelta": 0.008829555726720173, 
    "longitudeDelta": 0.005219578742995168
}

function Explore()
{
    const { requestData } = useLocalSearchParams()

    const router = useRouter()
    const controller = new AbortController()
    const mapRef = useRef<MapView>(null)
    const padPanAnim = useRef(new Animated.Value(padHiddenHeight)).current
    const previewPanAnim = useRef(new Animated.Value(previewVisibleHeight)).current
    const filterPanAnim = useRef(new Animated.Value(filterHiddenPosition)).current

    const [markerQuery, setMarkerQuery] = useState<{whereClause: CreateQueryParameters, count: number, distance: number}>({whereClause: INITIAL_PARAMETERS[0], count: INITIAL_PARAMETERS[1], distance: INITIAL_PARAMETERS[3]})
    const [addressQuery, setAddressQuery] = useState<string>('')
    const [markers, setMarkers] = useState<Array<responseType>>([])
    const [padObject, setPadObject] = useState<responseType>()
    //const [padDistrict, setPadDistrict] = useState<string>('')
    //const [padAddress, setPadAddress] = useState<string>('')
    const [loader, setLoader] = useState<boolean>(false)
    const [previewLoader, setPreviewLoader] = useState<boolean>(false)
    const [addressesLoading, setAddressesLoading] = useState<boolean>(false)
    const [requests, setRequests] = useState<Array<responseType>>([])
    const [data, setData] = useState<Array<responseType>>([])
    const [results, showResults] = useState<boolean>(false)
    const [requestFetch, triggerRequestFetch] = useState<responseType>()
    const [padPan, setPadPan] = useState(padHiddenHeight)
    const [previewPan, setPreviewPan] = useState(previewVisibleHeight)
    const [filterPan, setFilterPan] = useState(filterHiddenPosition)
    const [filterFade, setFilterFade] = useState(0)
    const [region, setRegion] = useState<Region>(DEFAULT_REGION)

    const forwardLocation = () => {
        const paramObj = responseObjectToParameter(padObject!)
        paramObj.Service_Type__c = ''
        paramObj.Sub_Service_Type__c = ''
        paramObj.returnRoute = 'Explore'
        router.push({pathname: '/(request)/Type', params: paramObj})
    }

    function hidePad() {
        setPreviewPan(previewVisibleHeight)
        setPadPan(padHiddenHeight)
    }

    function showPad() {
        setFilterPan(filterHiddenPosition)
        setPreviewPan(previewHiddenHeight)
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

    function initializePad(obj: responseType) { //will wipe current active marker!!!!!!!!!!!!!!
        showResults(false)
        setPadObject(obj)
        mapRef.current?.animateToRegion({latitude: obj.geometry.y - 0.001, longitude: obj.geometry.x, latitudeDelta: activeZoom.latitudeDelta, longitudeDelta: activeZoom.longitudeDelta})
        showPad()
    }   //notice: latitude is geometry.y and longitude is geometry.x

    function showOrHideFilter() {
        if (filterPan !== filterHiddenPosition) {
            setFilterPan(filterHiddenPosition)
            setTimeout(() => {
                setFilterFade(0)
            }, 500)
        }
        else {
            setFilterFade(1)
            setFilterPan(0)
        }
    }

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
        })
    }, 750, {leading: false, trailing: true})

    function setQuery(value: string) {
        setAddressQuery(value.trim())
        fetchAddresses()
    }

    function handlePress(obj: responseType) {
        controller.abort()
        setAddressQuery(obj.attributes.Address)
        initializePad(obj)
        setLoader(true)

        setTimeout(() => triggerRequestFetch(obj), 1250)
    }

    function activateMarker(obj: responseType) {
        initializePad(obj)
        setRequests([obj, ...requests.filter(r => r.attributes.Address === obj.attributes.Address)])
    }

    const onRegionChange = _.debounce(async (Cregion: Region, details: Details, force: boolean) => {
        if (!force && region.latitudeDelta < reloadStop.latitudeDelta && region.longitudeDelta < reloadStop.longitudeDelta) {
            return
        }

        setMarkers([])
        setPreviewLoader(true)
    
        let set = new Set<string>()
        function filterFunction(item: responseType) {   // Filters out duplicate addresses, needed to prevent two markers in same location blinking on top of one another
            const s1: number = set.size; 
            set.add(item.attributes.Address); 
            const s2: number = set.size; 
            return s1 !== s2
        }

        let q: string = generateFilteredEndpointUrl(markerQuery.whereClause, markerQuery.count, region, markerQuery.distance)

        await fetch(q).then((middle) => {
            return middle.json()
        }).then((res) => {
            let marks: responseType[] = res.features.filter(filterFunction)
            if (padObject !== undefined && marks.filter(m => m.attributes.ReferenceNumber === padObject.attributes.ReferenceNumber).length === 0) {
                setMarkers([padObject, ...marks])
            }
            else {
                setMarkers(marks)
            }
        }).catch(err => {
            return
        })

        setPreviewLoader(false)
    }, 1000, {leading: false, trailing: true})

    useEffect(() => {
        Animated.spring(padPanAnim, {
            toValue: padPan,
            useNativeDriver: true
        }).start()
    }, [padPan])

    useEffect(() => {
        Animated.spring(previewPanAnim, {
            toValue: previewPan,
            useNativeDriver: true
        }).start()
    }, [previewPan])

    useEffect(() => {
        Animated.spring(filterPanAnim, {
            toValue: filterPan,
            useNativeDriver: true
        }).start()
    }, [filterPan])

    useEffect(() => {
        onRegionChange(region, {}, false)
    }, [])

    useEffect(() => {
        setFilterPan(filterHiddenPosition)
    }, [addressQuery])

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

    useEffect(() => {
        if (requestData !== undefined) {
            setTimeout(() => {
                let initObj: responseType = JSON.parse(requestData as string)
                initializePad(initObj)
                if (requests.filter(r => r.attributes.ReferenceNumber === initObj.attributes.ReferenceNumber).length === 0) {
                    setRequests([initObj, ...requests])
                }
                if (markers.filter(m => m.attributes.ReferenceNumber === initObj.attributes.ReferenceNumber).length === 0) {
                    setMarkers([initObj, ...markers])
                }
            }, 1500)
        }
    }, [requestData])

    useEffect(() => {
        let obj: Details | undefined = undefined
        onRegionChange(region, obj!, true)
    }, [markerQuery])

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

    const memoizedAddressData = useMemo(() => data.map((addr, idx) => {
        return (
            <TouchableOpacity key={idx} onPress={ () => handlePress(addr) } style={[styles.resultShadow, shadowUniversal.default]}>
                <CustomText text={addr.attributes.Address} style={styles.result} nol={0} font={fontGetter()} />
            </TouchableOpacity>
        )
    }), [data])

    return (
        <View style={{flex: 1}}>
                <Animated.View style={[styles.filterContainer, shadowUniversal.default, { opacity: filterFade, transform: [ { translateX: filterPanAnim } ] }]}>
                    <Filter region={region} passUpQuery={setMarkerQuery} />
                </Animated.View>
                <Animated.View style={[styles.markerPreview, shadowUniversal.default, { transform: [ { translateY: previewPanAnim } ] }]}>
                    <MaterialIcons onPress={showOrHideFilter} name="filter-alt" size={25} color={global.baseGrey100} style={{left: '5%'}} />
                    <View style={styles.markerPreviewContent}>
                        {
                            previewLoader ?
                            <Loader dashWidth={2} styling={{width: '75%', aspectRatio: 1 / 1}} /> :
                            <CustomText font="JBM" style={{fontSize: 18, color: global.baseGold100}} nol={0} text={markers.length + ""} />
                        }
                    </View>
                </Animated.View>
                <Animated.View style={[styles.requestWindow, { transform: [{ translateY: padPanAnim }] }]}>
                    <PanGestureHandler onEnded={detectSwipeEnd} onGestureEvent={watchSwipe}>
                        <View style={styles.padTopBar}>                            
                            <View style={styles.padLeftPartition}>
                                <CustomText nol={3} text={(padObject?.attributes.Address || '')} font={fontGetter()} style={styles.padAddress} />
                                <View style={{flexDirection: 'row', marginBottom: '1%'}}>
                                    <MaterialIcons name='delete-outline' size={30} color={global.baseGrey200} />
                                    <CustomText text='Thursday' nol={0} font={fontGetter()} style={{marginTop: '4%', marginLeft: '2.5%', color: global.baseGrey200}} />
                                </View>
                            </View>

                            <View style={styles.padRightPartition}>
                                <CustomText text={(padObject?.attributes.CouncilDistrictNumber || '')} nol={0} font={fontGetter()} style={styles.padDistrict} />
                                <TouchableOpacity onPress={forwardLocation} style={styles.newRequestButton}>
                                    <CustomText text='New Request' nol={0} font={fontGetter()} style={{fontSize: 15, padding: 15, color: 'white', textAlign: 'center'}} />
                                </TouchableOpacity>
                            </View>

                            <Pressable style={styles.closeBar} onPress={hidePad}><MaterialIcons name='arrow-drop-down' size={20} color={global.baseBackground100} /></Pressable>
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
                    <MapView onRegionChange={(r: Region, d: Details) => { setRegion(r); onRegionChange(r, d, false) }} ref={mapRef} provider={PROVIDER_GOOGLE} initialRegion={region} style={{width: '100%', height: '100%', position:'absolute'}}>
                        {
                            markers.map((mark, index) => {
                                return (
                                    <CustomMarker 
                                        key={mark.attributes.ReferenceNumber + markerKeySuffix} 
                                        markerData={mark} 
                                        image={generateSymbolUrl(mark.attributes.CategoryLevel1)}
                                        iconScale={50}
                                        fadeInDelay={index * 50}
                                        backgroundColor={global.baseBlue100}
                                        activeColor={global.baseGold100}
                                        active={padObject?.attributes.ReferenceNumber === mark.attributes.ReferenceNumber && padPan !== padHiddenHeight}
                                        passUp={activateMarker}
                                    />
                                )
                            })
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

/*#
<MapView onRegionChange={onRegionChange} ref={mapRef} provider={PROVIDER_GOOGLE} initialRegion={region} style={{width: '100%', height: '100%', position:'absolute'}}>
                    {
                        memoizedMarkerRender
                    }
                </MapView>
#*/

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
        height: 40,
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
        top: '12%',
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
        width: 20,
        height: 20,
        top: '5%',
        left: '97.5%',
        backgroundColor: global.baseBlue100,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        fontSize: 14,
        fontFamily: globalFont.chosenFont
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
        fontFamily: globalFont.chosenFont,
    },

    padDistrict: {
        marginTop: '33%',
        marginRight: '10%',
        color: global.baseGrey100,
        fontSize: 15,
        fontFamily: globalFont.chosenFont,
        alignSelf: 'flex-end'
    },

    newRequestButton: {
        backgroundColor: global.baseBlue100,
        borderRadius: 30,
        marginBottom: '5%',
    },

    markerPreview: {
        position: 'absolute',
        width: '18%',
        height: '4%',
        left: '75%',
        borderRadius: 5,
        zIndex: 2,
        backgroundColor: global.baseBackground100,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    markerPreviewContent: {
        position: 'absolute',
        width: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    filterContainer: {
        position: 'absolute',
        zIndex: 2,
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.35,
        top: '12.5%',
        left: Dimensions.get('screen').width * 0.05,

        backgroundColor: global.baseBackground100,
        borderRadius: 10,
    }
})

export default Explore