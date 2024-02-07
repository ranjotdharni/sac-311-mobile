import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from "react-native"
import { shadowUniversal } from "../../../customs"
import { MaterialIcons } from "@expo/vector-icons"
import { global } from "../../../customs"

function WhatsNewButton() {
    return (
        <TouchableOpacity style={styles.NewButton}>
            <Text style={styles.NewButtonText}>What's New</Text>
            <MaterialIcons name="info-outline" size={Dimensions.get('screen').width * 0.05} color={global.baseBackground100} />
        </TouchableOpacity>
    )
}

function SearchButton() {
    return (
        <TouchableOpacity style={styles.SearchButton}>
            <MaterialIcons name="search" size={Dimensions.get('screen').width * 0.085} color={global.baseBackground100} />
        </TouchableOpacity>
    )
}

export default function ForeHead() {
    return (
        <View style={[styles.ForeHeadWrapper]}>
            <View style={[shadowUniversal.homeHeader, styles.ForeHeadCover]}>
                <View style={styles.LogoWrapper}>
                    <Image style={styles.Logo} source={require('../../../assets/png/icon.png')} />
                </View>

                <SearchButton />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ForeHeadWrapper: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.125,
        backgroundColor: global.baseBackground100,
        justifyContent: 'flex-end'
    },

    ForeHeadCover: {
        width: '100%',
        height: '50%',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        backgroundColor: global.baseBlue100, //If changed, navigate to /(tabs)/Home.tsx and change the backgroundColor of View with key '0o10101' to match this!!!!!!!!
        justifyContent: 'center',
    },

    NewButton: {
        width: '35%',
        backgroundColor: global.baseBlue100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'flex-end',
        paddingLeft: '1%',
        paddingTop: '0.5%',
        paddingBottom: '0.5%',
        borderRadius: 15,
        marginRight: '2.5%',
        position: 'relative',
        top: Dimensions.get('screen').height * 0.0025, //Must be 1/2 the height of the View in Home.tsx with key '0o10101'
    },

    NewButtonText: {
        color: global.baseBackground100,
        fontSize: Dimensions.get('screen').width * 0.04
    },

    LogoWrapper: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        left: '2.5%',
        width: Dimensions.get('screen').width * 0.3,
        height: '100%',
        justifyContent: 'center',
    },

    Logo: {
        objectFit: 'cover',
        width: '80%',
        height: '80%',
    },

    SearchButton: {
        backgroundColor: global.baseBlue100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'flex-end',
        paddingLeft: '1%',
        paddingTop: '0.5%',
        paddingBottom: '0.5%',
        borderRadius: 15,
        marginRight: '5%',
        position: 'relative',
        top: Dimensions.get('screen').height * 0.0025, //Must be 1/2 the height of the View in Home.tsx with key '0o10101'
    },
})