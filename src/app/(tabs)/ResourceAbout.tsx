import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { global } from "../../dummy";
import { useRouter } from 'expo-router';

export default function Resources()
{
    const router = useRouter();
    return (
        <View style={styles.mainWrapper}>
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => {router.replace('/(tabs)/Resources')}}>
                        <Text style={styles.barText}>Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => {router.replace('/(tabs)/ResourceArticles')}}>
                        <Text style={styles.barText}>Articles</Text>
                    </TouchableOpacity>
                    <View style={styles.tabNamesWrapperSelected}>
                        <Text style={styles.barText}>About</Text>
                    </View>
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => {router.replace('/(tabs)/ResourceFAQ')}}>
                        <Text style={styles.barText}>FAQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.aboutTitleWrapper}>
                    <Text style={styles.aboutTitle}>About</Text>
                </View>
                <View style={styles.aboutWrapper}>
                    <Text style={styles.aboutText}>
                        The City of Sacramento's world-class service just got even better!
                        The new City of Sacramento 311 Customer Service website and mobile app provide an improved customer
                        experience by offering more ways to easily submit and track your service requests. Our goal is to 
                        make government more accessible and life a little easier for our residents, businesses and visitors. 
                        Our Customer Service Agents are available 24/7. Whether it's waste collection, leaf pickup, street 
                        sweeping or world-class drinking water, Sacramento is a leader in providing quality customer services.
                    </Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    mainWrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
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
        backgroundColor: global.baseBackground100,
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
        fontFamily:'JBM',
        color: global.baseGold100,
    },
    resizeIcon:{
        width:30,
        height:30,
    },
    aboutText:{
        fontSize: 15,
        fontFamily:'JBM',
        alignSelf:'center',
    },
    aboutTitle:{
        fontSize: 45,
        fontFamily:'JBM',
        alignSelf:'center',
    },
    aboutWrapper:{
        padding:20,
        backgroundColor:global.baseBackground100,
        borderRadius:20,
    },
    aboutTitleWrapper:{
        padding:20,
    },
    contentWrapper:{
        padding:20,
    },
});