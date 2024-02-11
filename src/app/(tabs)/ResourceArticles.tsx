import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { global,} from "../../customs";
import SearchBar from '../(components)/Profile/SearchBar';
import { useRouter } from 'expo-router';
import RssFeed from './RssFeed';

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
                    <View style={styles.tabNamesWrapperSelected}>
                        <Text style={styles.barText}>Articles</Text>
                    </View>
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => {router.replace('/(tabs)/ResourceAbout')}}>
                        <Text style={styles.barText}>About</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => {router.replace('/(tabs)/ResourceFAQ')}}>
                        <Text style={styles.barText}>FAQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SearchBar value='' style={styles.searchStyle} placeholder='Search Articles' />
                <View style={styles.listPaddingTop}></View>
                    {
                        <RssFeed />
                    }
                <View style={styles.listPaddingBottom}></View>
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
    serviceCardPlaceholder: {
        fontSize: 25, 
        fontFamily: 'JBM', 
        color: '#000000', 
        textAlign: 'center', 
        marginTop: 15,
    },

//  

    searchStyle: {
        position: 'absolute',
        top: '12%',
        zIndex: 1,
        width: '95%',
        left: '2.5%',
        borderWidth: 1,
        borderColor: global.baseBlue100,
    },
    listStyle: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    listPaddingTop: {
        height: '3%',
    },
    listPaddingBottom: {
        height: '10%',
    },
});