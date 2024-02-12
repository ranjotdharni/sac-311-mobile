import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Dimensions, Button } from 'react-native';
import { global } from "../../customs";
import { dummyDataFAQ } from "../../customs";
import SearchBar from '../(components)/Profile/SearchBar';
import { useRouter } from 'expo-router';
import DefaultFAQ from "./DefaultFAQ";
import { useState } from 'react';
import { fontGetter } from "../../customs";
import { globalFont } from "../../customs";

declare var myFilter: string

export default function Resources()
{
    const [myFilter, setFilter] = useState("None")
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
            <View style={styles.allFiltersWrapper}>
                {/*When pressed, each of these buttons sets the value of myFilter*/}
                <ScrollView horizontal={true} contentContainerStyle={styles.filterScroll}>
                    <TouchableOpacity style={styles.filterWrapper} onPress={() => setFilter("None")}>
                        <Text style={styles.filterText}>Reset Filters</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterWrapper} onPress={() => setFilter("General")}>
                        <Text style={styles.filterText}>General</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterWrapper} onPress={() => setFilter("Services")}>
                        <Text style={styles.filterText}>Services</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterWrapper} onPress={() => setFilter("App Functionality")}>
                        <Text style={styles.filterText}>App Functionality</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>  
            <ScrollView contentContainerStyle={styles.listStyle}>
                <View style={styles.listPaddingTop}></View>
                <FAQList myFilter = {myFilter}/>
                <View style={styles.listPaddingBottom}></View>
            </ScrollView>
        </View>
       
    )
}

function FAQList({myFilter}:{myFilter:string}){
    return (
        <View style={styles.faqWrapper}>
        {
            /*Depending on the value of myFilter, the questions of each type are rendered*/
            dummyDataFAQ.map(data => {
                if(myFilter.valueOf() == "None")
                    return <DefaultFAQ width='90%' height={Dimensions.get('screen').height * 0.2} tags={data.tags} type={data.type} question={data.question} answer={data.answer} key={data.key} />
                else if(data.type.valueOf() == myFilter)
                    return <DefaultFAQ width='90%' height={Dimensions.get('screen').height * 0.2} tags={data.tags} type={data.type} question={data.question} answer={data.answer} key={data.key} />
            })
        }
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
        fontFamily: globalFont.chosenFont,
        color: global.baseGold100,


    },
    faqWrapper:{
        padding:20,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    filterScroll:{
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    allFiltersWrapper:{
        marginTop:'18%',
        backgroundColor:'rgba(0, 0, 0, 0)',
        flexDirection: 'row',
        height: '7%',
    },
    filterWrapper:{
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    filterText:{
        fontFamily: globalFont.chosenFont,
        backgroundColor: global.baseBlue100,
        marginHorizontal: 5,
        fontSize: 14,
        color: 'white',
        borderRadius: 10,
        padding: 10,
    },
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
        height: 0,
    },
    listPaddingBottom: {
        height: 70,
    },
});