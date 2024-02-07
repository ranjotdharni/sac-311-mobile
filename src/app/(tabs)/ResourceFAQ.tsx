import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { global } from "../../customs";
import SearchBar from '../(components)/Profile/SearchBar';
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
                    <TouchableOpacity style={styles.tabNamesWrapper} onPress={() => {router.replace('/(tabs)/ResourceAbout')}}>
                        <Text style={styles.barText}>About</Text>
                    </TouchableOpacity>
                    <View style={styles.tabNamesWrapperSelected}>
                        <Text style={styles.barText}>FAQ</Text>
                    </View>
                </View>
            </View>
            <SearchBar value='' style={styles.searchStyle} placeholder='Search Frequently Asked Questions' />
            <ScrollView contentContainerStyle={styles.listStyle}>
                <View style={styles.listPaddingTop}></View>
                    {/* 
                    
                    Replace with references to FAQ objects

                    {
                        requestTypes.map((obj) => {
                            return <View style={styles.typeWrapper} key={obj.id}>
                                <View style={styles.typeTitleWrapper}><Text style={styles.typeTitle}>{obj.type}</Text></View>
                                {
                                    
                                    obj.subTypes.map((sub) => {
                                        return <TouchableOpacity onPress={() => {navigateToRequestConfirm(sub.subType, sub.description)}} key={sub.id} style={[styles.subTypeWrapper, shadowUniversal.default]}>
                                            <View style={styles.subTypeTitleWrapper}><Text style={styles.subTypeTitle}>{sub.subType}</Text></View>
                                            <Text style={styles.subTypeDescription}>{sub.description}</Text>
                                    </TouchableOpacity>
                                    })
                                }
                            </View>
                        })
                     }*/}
                <View style={styles.listPaddingBottom}></View>
            </ScrollView>
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
        height: '0.6%',
    },
    listPaddingBottom: {
        height: 150,
    },
});