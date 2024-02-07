import { useRef } from "react"
import { Animated, Easing, StyleSheet } from "react-native"
import { global } from "../../customs"

export function Loader() {
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

const styles = StyleSheet.create({
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
})