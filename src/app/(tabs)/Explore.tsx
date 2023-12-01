import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";   //By default, this component uses Google Maps as provider
import SearchBar from "../(components)/Profile/SearchBar";
import { global, shadowUniversal } from "../../dummy";
import { places } from "../../addresses";
import { useRef, useState } from "react";
import CustomText from "../(components)/CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Explore()
{
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

    let sQuery = ''

    const [data, setData] = useState<Array<{address: string, latitude: number, longitude: number}>>([])
    const [results, showResults] = useState(data.length !== 0)

    const mapRef = useRef<MapView>(null)

    function setQuery(arg1: string, arg2: boolean) {
        sQuery = arg1.trim()
        if (sQuery === '')     return    //break clause
        
        let middle = places.filter((e) => {
            return e.address.toLowerCase().includes(sQuery.toLowerCase())
        })

        setData(middle)
        if (!results || arg2)   showResults(true)
        if (!arg2)  showResults(false)
    }

    function handlePress(obj : { address: string, latitude: number, longitude: number }) {
        setData([])
        showResults(false)
        mapRef.current?.animateToRegion({latitude: obj.latitude, longitude: obj.longitude, latitudeDelta: getInitialState().latitudeDelta, longitudeDelta: getInitialState().longitudeDelta})
    }

    return (
        <View style={{flex: 1}}>
                <MapView ref={mapRef} provider={PROVIDER_GOOGLE} region={getInitialState()} style={{width: '100%', height: '100%'}} />
                <SearchBar style={styles.searchBar} passUp={setQuery} placeholder='Search Address' />
                <ScrollView style={[styles.searchResults, shadowUniversal.default, {display: (results ? 'flex' : 'none')}]}>
                    {
                        data.map((obj: { address: string, latitude: number, longitude: number }) => {
                            return (
                                <TouchableOpacity onPress={() => {handlePress(obj)}} key={Math.floor(Math.random() * 100000000)} style={[styles.resultShadow, shadowUniversal.default]}>
                                    <CustomText text={obj.address} style={styles.result} nol={0} font="JBM" />
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
})