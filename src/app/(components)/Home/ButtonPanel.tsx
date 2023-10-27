import { View, StyleSheet, Dimensions } from "react-native";


export default function ButtonPanel() {
    return (
        <View style={styles.ButtonPanelWrapper}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonPanelWrapper: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.25,
        backgroundColor: 'black'
    }
})