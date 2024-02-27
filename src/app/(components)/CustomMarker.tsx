import { Marker } from "react-native-maps";
import { responseType } from "../../customs";
import { memo, useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { Easing } from "react-native-reanimated";

function CustomMarker({ markerData, image, fadeInDelay, iconScale, passUp } : { markerData: responseType, image: string, fadeInDelay: number, iconScale: number, passUp: (obj: responseType) => void }) {
    let opacity = useRef(new Animated.Value(0)).current
    const [trigger, setTrigger] = useState(false)
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true,
            delay: fadeInDelay
        }).start()
        setTimeout(() => {
            setTrigger(true)
        }, 100)
    }, [])
    
    return (
        markerData.geometry === undefined ?
        <></> :
        <Marker.Animated opacity={opacity} key={markerData.attributes.ReferenceNumber + "MarkerTop"} style={{width: iconScale, height: iconScale}} tracksViewChanges={true} coordinate={{latitude: markerData.geometry.y, longitude: markerData.geometry.x}} onPress={() => { passUp(markerData) }}>
            {
            trigger ?
            <Animated.Image key={markerData.attributes.ReferenceNumber + "MarkerTopInset"} style={{width: '100%', height: '100%'}} source={{uri: image}} /> :
            <Animated.View></Animated.View>
            }
        </Marker.Animated>
    )
}

export default memo(CustomMarker)