import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { globalFont } from '../../customs';

//========================================//
//                USAGE                   //
//----------------------------------------//
//      You must pass in a local          //
//      search paramter 'url' when        //
//      using this component!!!!!!        //
//----------------------------------------//
//      Pass the 'url' parameter          //
//      and link to this                  //
//      component                         //
//========================================//

export default function WebModal() {
    const params = useLocalSearchParams()
    const nav = useNavigation()

    return (
        <>
            <View style={styles.TopBar}>
                <TouchableOpacity onPress={() => { nav.goBack() }} style={styles.DismissButton}><Text style={styles.DismissButtonText}>Done</Text></TouchableOpacity>
            </View>
            <WebView style={styles.WebView} source={{ uri: params.url as string }} />
        </>
    )
}

const styles = StyleSheet.create({
    TopBar: {
        width: '100%',
        height: '9%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: '#1f1f1f',
    },

    DismissButton: {
        marginLeft: '5%',
        marginBottom: '2%',
    },

    DismissButtonText: {
        fontSize: Dimensions.get('screen').width * 0.045,
        fontFamily: globalFont.chosenFont,
        color: '#2B60E9',
    },

    WebView: {
        width: '100%',
        height: '85%',
    },
})