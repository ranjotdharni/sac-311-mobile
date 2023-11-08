import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";   //By default, this component uses Google Maps as provider
import SearchBar from "../(components)/Profile/SearchBar";

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

export default function Explore()
{
    let sQuery = ''

    function setQuery(arg1: string) {
        sQuery = arg1
        if (sQuery.trim() === '')     return    //break clause

    }

    return (
        <View style={{flex: 1}}>
            <SearchBar style={styles.searchBar} passUp={setQuery} placeholder='Search Address' />
            <MapView provider={PROVIDER_GOOGLE} region={getInitialState()} style={{width: '100%', height: '100%'}} />
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
        position: 'absolute',
        zIndex: 2,
        top: '5%',
    }
})