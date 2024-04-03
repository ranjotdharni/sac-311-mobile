import { View, StyleSheet, TouchableOpacity, Text, Linking } from 'react-native';
import { global } from "../../customs";
import { useRouter } from 'expo-router';
import { globalFont, globalColorTheme } from "../../customs";

export default function Resources()
{
    const router = useRouter();
    return (
        <View style={[styles.mainWrapper,{backgroundColor:globalColorTheme.backgroundColor}]}>
            <View style={[styles.exitWrapper,{backgroundColor:globalColorTheme.backgroundColor}]}>
                <View style={styles.innerExitWrapper}>
                <TouchableOpacity style={[styles.tabNamesWrapper,{backgroundColor:globalColorTheme.backgroundColor2}]} onPress={() => {router.replace('/(tabs)/Resources')}}>
                        <Text style={[styles.barText,{color:globalColorTheme.color}]}>Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tabNamesWrapper,{backgroundColor:globalColorTheme.backgroundColor2}]} onPress={() => {router.replace('/(tabs)/ResourceAnswers')}}>
                        <Text style={[styles.barText,{color:globalColorTheme.color}]}>Answers</Text>
                    </TouchableOpacity>
                    <View style={[styles.tabNamesWrapperSelected,{backgroundColor:globalColorTheme.blue}]}>
                        <Text style={[styles.barText,{color:globalColorTheme.text}]}>About</Text>
                    </View>
                </View>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.aboutTitleWrapper}>
                    <Text style={[styles.aboutTitle,{color:globalColorTheme.blue}]}>About</Text>
                </View>
                <View style={[styles.aboutWrapper,{backgroundColor:globalColorTheme.backgroundColor2}]}>
                    <Text style={[styles.aboutText,{color:globalColorTheme.color}]}>
                        The City of Sacramento's world-class service just got even better!
                        The new City of Sacramento 311 Customer Service website and mobile app provide an improved customer
                        experience by offering more ways to easily submit and track your service requests. Our goal is to 
                        make government more accessible and life a little easier for our residents, businesses and visitors. 
                        Our Customer Service Agents are available 24/7. Whether it's waste collection, leaf pickup, street 
                        sweeping or world-class drinking water, Sacramento is a leader in providing quality customer services.
                    </Text>
                </View>
                <View style={styles.callWrapper}>
                    <TouchableOpacity onPress={()=>Linking.openURL(`tel:${311}`)}>
                        <Text style={[styles.callText,{color:globalColorTheme.text, backgroundColor: globalColorTheme.blue}]}>Call 311</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: global.baseBackground100,
    },
    exitWrapper:{
        backgroundColor: global.baseBackground100,
        width:'100%',
        shadowColor: '#000',
        shadowOffset:{
            width:-2,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        height:'12%',
    },
    innerExitWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'15%',
        paddingHorizontal: 15,
    },
    tabNamesWrapper: {
        width: 'auto',
        backgroundColor: global.baseWhite100,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    tabNamesWrapperSelected: {
        width: 'auto',
        backgroundColor: global.baseGold300,
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    barText: {
        fontSize: 17,
        padding: 2,
        fontFamily: globalFont.chosenFont,
        color: global.baseBlue100,
    },
    resizeIcon:{
        width:30,
        height:30,
    },
    aboutText:{
        fontSize: 14,
        fontFamily: globalFont.chosenFont,
        alignSelf:'center',
    },
    aboutTitle:{
        color: global.baseBlue100,
        fontSize: 45,
        fontFamily: globalFont.chosenFont,
        alignSelf:'center',
    },
    aboutWrapper:{
        padding:20,
        backgroundColor:global.baseWhite100,
        borderRadius:20,
    },
    aboutTitleWrapper:{
        padding:10,
    },
    contentWrapper:{
        padding:20,
    },
    callWrapper:{
        padding:10,

    },
    callText:{
        fontFamily: globalFont.chosenFont,
        alignSelf:'center',
        fontSize: 36,
        padding: 20,
        backgroundColor: global.baseBlue100,
        color: '#fff',
        borderRadius: 20,
    }
});