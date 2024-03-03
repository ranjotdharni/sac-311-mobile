import { Marker } from "react-native-maps";
import { responseType } from "../../customs";
import { memo, useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";
import { Easing } from "react-native-reanimated";

function CustomMarker({ markerData, image, fadeInDelay, iconScale, backgroundColor, passUp } : { markerData: responseType, image: string, fadeInDelay: number, iconScale: number, backgroundColor: string, passUp: (obj: responseType) => void }) {
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
        <Marker.Animated opacity={opacity} key={markerData.attributes.ReferenceNumber + "MarkerTop"} style={{overflow: 'visible', width: iconScale, height: iconScale}} tracksViewChanges={true} coordinate={{latitude: markerData.geometry.y, longitude: markerData.geometry.x}} onPress={() => { passUp(markerData) }}>
            {
                trigger 
                ?
                <Animated.View key={markerData.attributes.ReferenceNumber + "MarkerTopWrapper"} style={styles.markerTopWrapper}>
                    <Animated.View  key={markerData.attributes.ReferenceNumber + "MarkerTopOverlayBack"} style={[styles.markerTopOverlayBack, { backgroundColor: backgroundColor, borderRadius: iconScale / 3 }]}></Animated.View>
                    <Animated.View  key={markerData.attributes.ReferenceNumber + "MarkerTopOverlayPin"} style={[styles.markerTopOverlayPin, {backgroundColor: backgroundColor, borderRadius: iconScale / 2}]}></Animated.View>
                    <Animated.Image key={markerData.attributes.ReferenceNumber + "MarkerTopInset"} style={styles.markerTopInset} source={{uri: image}} />
                </Animated.View> 
                :
                <Animated.View></Animated.View>
            }
        </Marker.Animated>
    )
}

const styles = StyleSheet.create({
    markerTopWrapper: {
        overflow: 'visible', 
        width: '100%', 
        height: '100%'
    },

    markerTopOverlayBack: {
        position: 'absolute', 
        width: '40%', 
        height: '40%', 
        left: '30%'
    },

    markerTopOverlayPin: {
        position: 'absolute', 
        width: '5%', 
        height: '75%', 
        left: '47.5%'
    },

    markerTopInset: {
        position: 'absolute', 
        width: '35%', 
        height: '35%', 
        top: '2.5%', 
        left: '32.5%'
    }
})

export default memo(CustomMarker)