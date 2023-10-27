import { View, StyleSheet, Dimensions } from "react-native"


export default function ForeHead() {
    return (
        <View style={styles.ForeHeadWrapper}>
            <View style={styles.ForeHeadCover} />

        </View>
    )
}

const styles = StyleSheet.create({
    ForeHeadWrapper: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.125,
        backgroundColor: global.baseBlue100,
    },

    ForeHeadCover: {
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
    }
})