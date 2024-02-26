import MapView, { Marker, MarkerAnimated } from "react-native-maps";
import { Image } from "expo-image";
import { responseType } from "../../customs";
import { memo, useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { Easing, useAnimatedStyle, useSharedValue, withDecay, withTiming } from "react-native-reanimated";

function CustomMarker({ markerData, image, passUp } : { markerData: responseType, image: string, passUp: (obj: responseType) => void }) {
    let opacity = useRef(new Animated.Value(0)).current
    const [width, setWidth] = useState(25)
    const [height, setHeight] = useState(25)
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true,
            delay: Math.floor(Math.random() * (3000 + 1))
        }).start()
    })
    
    return (
        markerData.geometry === undefined ?
        <></> :
        <Marker.Animated style={{opacity: opacity, width: width, height: height}} tracksViewChanges={false} coordinate={{latitude: markerData.geometry.y, longitude: markerData.geometry.x}} onPress={() => { passUp(markerData) }}>
            <Animated.Image style={{width: '100%', height: '100%'}} source={{uri: image}} />
        </Marker.Animated>
    )
}

export default memo(CustomMarker)