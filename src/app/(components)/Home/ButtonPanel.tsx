import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Dimensions, TouchableOpacity, Linking, Text, Image} from "react-native";
import { global, shadowUniversal } from "../../../customs";
import { globalFont } from "../../../customs";
import { fontGetter } from "../../../customs";
import CustomText  from "../CustomText";
import { router } from "expo-router";
import { useNavigation } from '@react-navigation/native';


// Extending the component's props to include 'style'
type ButtonProps = {
    text: string;
    logo: string;
    url: string;
    style?: object | object[]; // Style can be an object or an array of objects
};


const Button: React.FC<ButtonProps> = ({ text, logo, url, style }) => {     //Ensure values passed in for logo corresond to FontAwesome Icons!!!!!!!!!!!!!!!
    return (
        <TouchableOpacity onPress={() => {router.push({ pathname: '/(web)/WebView', params: { url: url } })}} style={[styles.ButtonWrapper, style]}>
            <FontAwesome name={logo as any} size={Dimensions.get('screen').width * 0.15} color={global.baseBlue100} />
            <CustomText nol={0} font={fontGetter()} style={styles.ButtonText} text={text}/>
        </TouchableOpacity>
    )
}


export default function ButtonPanel() {

    const navigation = useNavigation();

    return (
        <View style={styles.ButtonPanelWrapper}>
            <View style={styles.ButtonHeaderContainer}>
                <CustomText nol={0} font={fontGetter()} text='Are You A...' style={styles.ButtonPanelTitle} />
                <TouchableOpacity onPress={() => {router.replace('/(whatsnew)/WhatsNew')}} style={styles.WhatsNewButton}>
                    <Text style={styles.smallButtonText}>What's New</Text>
                    <Image 
                        source={require('../../../assets/png/information.png')}
                        style={styles.IconStyle}
                    />
                </TouchableOpacity>
            </View>
            
            <View style={styles.ButtonPanelContainer}>
                <Button text='Resident' logo='home' url="https://www.cityofsacramento.org/Information-Technology" style={shadowUniversal.default}/>
                <Button text='Visitor' logo='location-arrow' url="https://www.visitsacramento.com/" style={shadowUniversal.default}/>
                <Button text='Business' logo='suitcase'  url="https://www.cityofsacramento.org/business" style={shadowUniversal.default}/>
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
        fontFamily: globalFont.chosenFont,
        fontWeight: 'bold',
        paddingTop: '2%',
        paddingLeft: '1%',
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
        backgroundColor: '#ffffff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ButtonText: {
        color: global.baseBlue100,
        fontSize: Dimensions.get('screen').width * 0.045,
        fontFamily: globalFont.chosenFont
    },

    ButtonHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2%',
        paddingHorizontal: '2%',
    },

    WhatsNewButton: {
        flexDirection: 'row',
        backgroundColor: global.baseBlue100,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    IconStyle: {
        width: 22,
        height: 22,
    },

    smallButtonText: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 10, // Add some space between the text and the icon
    },
})