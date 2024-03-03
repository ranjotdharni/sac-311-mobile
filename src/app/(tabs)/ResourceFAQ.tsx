import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Dimensions, Button, TextInput, Image } from 'react-native';
import { global } from "../../customs";
import { dummyDataFAQ } from "../../customs";
import SearchBar from '../(components)/Profile/SearchBar';
import { useRouter } from 'expo-router';
import DefaultFAQ from "./DefaultFAQ";
import { useState } from 'react';
import { fontGetter } from "../../customs";
import { globalFont } from "../../customs";
import { FontAwesome } from "@expo/vector-icons";

export default function Resources()
{
    const [myFilter, setFilter] = useState("None")
    const [searchValue, setSearchValue] = useState("")
    const router = useRouter();
    const filters: string[]= [];
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
            <View style={styles.searchContainer}>
                <Image style={styles.searchIcon} source={require('../../assets/png/search.png')} />
                <TextInput style={styles.searchInput} value={searchValue} onChangeText={text => setSearchValue(text)} placeholder='Search for Services' placeholderTextColor='#D3D3D3'/>
                <TouchableOpacity onPress={() => setSearchValue('')} style={styles.clearButton}>
                    <FontAwesome name='remove' size={20} color={global.baseGrey200} />
                </TouchableOpacity>
            </View>            
            <View style={styles.allFiltersWrapper}>
                {/*When pressed, each of these buttons sets the value of myFilter*/}
                <ScrollView horizontal={true} contentContainerStyle={styles.filterScroll}>
                    <TouchableOpacity style={styles.filterWrapper} onPress={() => setFilter("None")}>
                        <Text style={styles.filterText}>Clear Filter</Text>
                    </TouchableOpacity>
                    {dummyDataFAQ.map((data) => {
                        //only creates a type filter once per question type
                        if(!filters.includes(data.type)){
                            filters.push(data.type)
                            return(
                                <TouchableOpacity key={data.key} style={styles.filterWrapper} onPress={() => setFilter(data.type)}>
                                        <Text style={styles.filterText}>{data.type}</Text>
                                </TouchableOpacity>
                            );
                        }
                    })}
                </ScrollView>
            </View>  
            <ScrollView contentContainerStyle={styles.listStyle}>
                <View style={styles.listPaddingTop}></View>
                <FAQList myFilter={myFilter} searchValue={searchValue}/>
                <View style={styles.listPaddingBottom}></View>
            </ScrollView>
        </View>
       
    )
}

function FAQList({myFilter, searchValue}:{myFilter:string; searchValue:string}){
    return (
        <View style={styles.faqWrapper}>
        {
            /*Depending on the value of myFilter/Search, the questions of each type are rendered*/
            dummyDataFAQ.map(data => {
                /*If any words in the type, question or answer are searched for*/
                const combinedData = data.type.valueOf().toLowerCase().concat(data.answer.valueOf().toLowerCase().concat(data.question.valueOf().toLowerCase()))
                /* If no filter, then render results that include the search term */
                if(myFilter.valueOf() == "None")
                    if(combinedData.includes(searchValue.toLowerCase()))
                        return <DefaultFAQ width='90%' height={Dimensions.get('screen').height * 0.2} type={data.type} question={data.question} answer={data.answer} key={data.key} />
                    else
                        return null
                /* If there is a filter, then only render the results that include the search term and are in the filtered category */
                else if(data.type.valueOf() == myFilter)
                    if(combinedData.includes(searchValue.toLowerCase()))
                        return <DefaultFAQ width='90%' height={Dimensions.get('screen').height * 0.2} type={data.type} question={data.question} answer={data.answer} key={data.key} />
                    else
                        return null                
                else
                    return null
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
    typeTitleWrapper: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: global.baseBlue100,
    },
    typeTitle: {
        fontSize: 25,
        color: global.baseBlue100,
        fontFamily: globalFont.chosenFont,
        marginLeft: '2%',
    },
    filterScroll:{
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    allFiltersWrapper:{
        marginTop:'3%',
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 25,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: global.baseBlue100,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '96%',
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontFamily: globalFont.chosenFont
    },
    clearButton: {
        marginLeft: 5,
    }
});