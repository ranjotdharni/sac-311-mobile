import { useRef } from "react"
import { Animated, Easing, StyleSheet } from "react-native"
import { global } from "../../customs"

interface loaderProps {
    styling?: any,
    dashWidth?: number
}

export function Loader(props: loaderProps) {
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
        <Animated.View style={[props.styling ? props.styling : styles.default, styles.loader, {borderWidth: props.dashWidth ? props.dashWidth : 3, transform: [{ rotate: loaderAnim.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg']}) }]}]}></Animated.View>
    )
}

const styles = StyleSheet.create({
    loader: {
        aspectRatio: 1 / 1,
        borderRadius: 100,
        borderColor: global.baseGold100,
        borderStyle: 'dotted',
    },

    default: {
        width: '15%',
        alignSelf: 'center',
        marginTop: '20%',
    }
})