import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Dimensions, TouchableOpacity, Linking, Text} from "react-native";
import { global } from "../../../customs";
import { globalFont } from "../../../customs";
import { fontGetter } from "../../../customs";
import CustomText  from "../CustomText";
import { router } from "expo-router";

function Button({ text, logo, url } : { text: string, logo: any, url: any}) {     //Ensure values passed in for logo corresond to FontAwesome Icons!!!!!!!!!!!!!!!
    return (
        <TouchableOpacity onPress={() => {router.push({ pathname: '/(web)/WebView', params: { url: url } })}} style={styles.ButtonWrapper}>
            <FontAwesome name={logo} size={Dimensions.get('screen').width * 0.15} color='#2B60E9' />
            <CustomText nol={0} font={fontGetter()} style={styles.ButtonText} text={text}/>
        </TouchableOpacity>
    )
}


export default function ButtonPanel() {
    return (
        <View style={styles.ButtonPanelWrapper}>
            <CustomText nol={0} font={fontGetter()} text='Are You A...' style={styles.ButtonPanelTitle} />
            
            <View style={styles.ButtonPanelContainer}>

                <Button text='Resident' logo='home' url="https://www.cityofsacramento.org/Information-Technology"/>


                <Button text='Visitor' logo='location-arrow' url="https://www.visitsacramento.com/"/>
                <Button text='Business' logo='suitcase'  url="https://www.cityofsacramento.org/business"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonPanelWrapper: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.22,
        backgroundColor: global.baseBackground100
    },

    ButtonPanelTitle: {
        color: global.baseBlue100,
        alignSelf: 'flex-start',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: '2%',
        paddingLeft: '3%',
    },

    ButtonPanelContainer: {
        width: '100%',
        height: '85%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'relative',
        top: '-2.5%',
    },

    ButtonWrapper: {
        width: '30%',
        aspectRatio: 1 / 1,
        backgroundColor: '#D8D8D8',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ButtonText: {
        color: '#2B60E9',
        fontSize: Dimensions.get('screen').width * 0.045
    },
})