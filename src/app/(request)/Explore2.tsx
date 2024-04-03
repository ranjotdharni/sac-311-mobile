import React, { useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region, Marker } from "react-native-maps";
import SearchBar from "../(components)/Profile/SearchBar";
import { global } from "../../customs";
import { places } from "../../addresses";
import { useNavigation } from '@react-navigation/native';
import { globalColorTheme } from "../../customs";

function getInitialState() {
  return {
    latitude: 38.56506,
    longitude: -121.42630,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
}

export default function Explore2() {
  const [data, setData] = useState<
    Array<{ address: string; latitude: number; longitude: number }>
  >([]);
  const [results, showResults] = useState(false);

  const mapRef = useRef<MapView>(null);

  const navigation = useNavigation();

  const navigateToRequestConfirm = () => {
    (navigation.navigate as (screen: string) => void)('RequestConfirm');
  };

  const [dummyLocation, setDummyLocation] = useState<{
    latitude: number;
    longitude: number;
    address: string;
  }>({
    latitude: 38.5691,
    longitude: -121.42636,
    address: "6000 J St, Sacramento, CA 95819",
  });

  // Create a Region object based on dummyLocation
  const initialRegion: Region = {
    latitude: dummyLocation.latitude,
    longitude: dummyLocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  function setQuery(arg1: string) {
    const sQuery = arg1.trim();
    if (sQuery === "") return; // break clause

    const middle = places.filter((e) => e.address.toLowerCase().includes(sQuery.toLowerCase()));

    setData(middle);
    if (!results) showResults(true);
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        region={initialRegion}
        style={{ width: '100%', height: '100%', position: 'absolute' }}
      >
        {/* Custom Marker for Dummy Location */}
        <Marker
          coordinate={{
            latitude: dummyLocation.latitude,
            longitude: dummyLocation.longitude,
          }}
          title="CSUS"
          description="California State University, Sacramento"
          pinColor="red"
          onPress={navigateToRequestConfirm} // Add onPress prop to navigate directly
        />
      </MapView>
      <SearchBar
        style={styles.searchBar}
        passUp={setQuery}
        value=''
        placeholder="Search Address"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: '95%',
    position: 'absolute',
    zIndex: 2,
    top: '5%',
    left: '2.5%',
    borderWidth: 1,
    borderColor: global.baseBlue100,
  },
});