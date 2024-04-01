import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, TextInput, Image, FlatList } from 'react-native';
import { global, shadowUniversal, globalColorTheme } from "../../customs";
import { useRouter } from 'expo-router';
import { answerTypes } from '../../addresses';
import { FontAwesome } from '@expo/vector-icons';
import { globalFont } from '../../customs';

export default function ResourceAnswers() {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');
    const [filterValue, setFilterValue] = useState('None');

    // Function to filter articleTypes based on searchValue
    const filteredArticleTypes = answerTypes.map(obj => {
        // Filter questions based on search value
        const filteredQuestions = obj.questions.filter(q => {
            const combinedText = `${q.question.toLowerCase()} ${q.description.toLowerCase()} ${q.answer.toLowerCase()}`;
            return combinedText.includes(searchValue.toLowerCase());
        });
        //empty question value to be used as null
        const emptyQuestion = obj.questions.filter(q => {
            const nullTxt = ``;
            return nullTxt.includes("empty");
        });
        // If no filter chosen, only use the question search term
        if (filterValue == 'None'){
            return {
                ...obj,
                questions: filteredQuestions,
                type: obj.type,
            };
        }
        //if a filter is chosen, then only search through the questions of the filtered type
        else if (filterValue == obj.type.valueOf()){
            return {
                ...obj,
                questions: filteredQuestions,
                type: filterValue
            };
        }
        //otherwise return null
        else
            return {
                ...obj,
                questions: emptyQuestion,
                type: ''
            };
    }).filter(obj => obj.questions.length > 0);
    return (
        <View style={[styles.mainWrapper,{backgroundColor:globalColorTheme.backgroundColor}]}>
            <View style={[styles.exitWrapper,{backgroundColor:globalColorTheme.backgroundColor}]}>
                <View style={styles.innerExitWrapper}>
                <TouchableOpacity style={[styles.tabNamesWrapper,{backgroundColor:globalColorTheme.backgroundColor2}]} onPress={() => {router.replace('/(tabs)/Resources')}}>
                        <Text style={[styles.barText,{color:globalColorTheme.color}]}>Services</Text>
                    </TouchableOpacity>
                    <View style={[styles.tabNamesWrapperSelected,{backgroundColor:globalColorTheme.blue}]}>
                        <Text style={[styles.barText,{color:globalColorTheme.text}]}>Answers</Text>
                    </View>
                    <TouchableOpacity style={[styles.tabNamesWrapper,{backgroundColor:globalColorTheme.backgroundColor2}]} onPress={() => {router.replace('/(tabs)/ResourceAbout')}}>
                        <Text style={[styles.barText,{color:globalColorTheme.color}]}>About</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.searchContainer,{backgroundColor:globalColorTheme.backgroundColor2}]}>
                <Image style={styles.searchIcon} source={require('../../assets/png/search.png')} />
                <TextInput
                    style={styles.searchInput}
                    value={searchValue}
                    onChangeText={text => setSearchValue(text)}
                    placeholder='Search for Articles'
                    placeholderTextColor='#D3D3D3'
                />
                <TouchableOpacity onPress={() => setSearchValue('')} style={[styles.clearButton,{backgroundColor:globalColorTheme.backgroundColor2}]}>
                    <FontAwesome name='remove' size={20} color={globalColorTheme.color} />
                </TouchableOpacity>
            </View>
            <View style={styles.allFiltersWrapper}>
            
            <FlatList
                horizontal
                persistentScrollbar
                data={answerTypes}
                renderItem={({item}) => 
                    <TouchableOpacity key={item.id} style={styles.filterWrapper} onPress={() => setFilterValue(item.type)}>
                        <Text style={[styles.filterText,{backgroundColor:globalColorTheme.blue, color:globalColorTheme.text}]}>{item.type}</Text>
                    </TouchableOpacity>
            }
            />
            <TouchableOpacity style={styles.filterWrapper} onPress={() => setFilterValue("None")}>
                <Text style={[styles.clearFilterText,{backgroundColor:globalColorTheme.backgroundColor2, color:globalColorTheme.color}]}>Clear Filter</Text>
            </TouchableOpacity>
            </View>
            <FlatList
            contentContainerStyle={styles.listStyle}
            data={filteredArticleTypes}
            renderItem={({item}) => 
            <View style={styles.typeWrapper} key={item.id}>
                <View style={styles.typeTitleWrapper}><Text style={[styles.typeTitle,{color:globalColorTheme.blue}]}>{item.type}</Text></View>
                <FlatList
                    data={item.questions}
                    renderItem={({item : questions}) => {
                        if(item.type =='FAQ'){
                            return (
                                <TouchableOpacity key={questions.id} style={[styles.questionWrapper, shadowUniversal.default, {backgroundColor:globalColorTheme.backgroundColor2}]} onPress={() => {router.push({pathname: '/FAQFullView', params: {type: item.type, answer: questions.description, question: questions.question}})}}>
                                    <View style={[styles.FAQTitleWrapper, {backgroundColor:globalColorTheme.blue}]}>
                                        <Text style={[styles.FAQTitle, {color:globalColorTheme.text}]}>{questions.question}</Text>
                                    </View>
                                    <Text style={[styles.questionDescription, {color:globalColorTheme.color}]}>Tap to see details.</Text>
                                </TouchableOpacity>
                            );
                        }
                        //If the question is not an FAQ, link to the answer article:
                        else{
                            return (
                                <TouchableOpacity key={questions.id} style={[styles.questionWrapper, shadowUniversal.default, {backgroundColor:globalColorTheme.backgroundColor2}]} onPress={() => {router.push({pathname: '/FAQFullView', params: {type: item.type, answer: questions.answer, question: questions.question}})}}>
                                    <View style={[styles.questionTitleWrapper, {backgroundColor:globalColorTheme.blue}]}>
                                        <Text style={[styles.questionTitle, {color:globalColorTheme.text}]}>{questions.question}</Text></View>
                                    <Text style={[styles.questionDescription, {color:globalColorTheme.color}]}>{questions.description}</Text>
                                </TouchableOpacity>
                            );
                        }
                    }}
                />
            </View>
        }/>
        </View>
    )

}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor: global.baseBackground100,
    },
    exitWrapper: {
        backgroundColor: global.baseBackground100,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '12%',
    },
    innerExitWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '15%',
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
    },
    listStyle: {
        flexGrow: 1,
        alignItems: 'center',
    },
    typeWrapper: {
        width: '100%',
        marginBottom: 15,
    },
    typeTitleWrapper: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: global.baseGold100,
    },
    typeTitle: {
        fontSize: 25,
        color: global.baseBlue100,
        fontFamily: globalFont.chosenFont,
        marginLeft: '2%',
    },
    questionWrapper: {
        width: '96%',
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: global.baseWhite100,
        padding: 10,
        marginLeft: '2%'
    },
    questionTitleWrapper: {
        width: '100%',
        backgroundColor: global.baseBlue100,
        borderRadius: 15,
        padding: 2,
    },
    questionTitle: {
        margin: '2%',
        fontFamily: globalFont.chosenFont,
        fontSize: 18,
        color: global.baseBackground100
    },
    FAQTitleWrapper: {
        width: '100%',
        backgroundColor: global.baseBlue100,
        borderRadius: 15,
        padding: 2,
    },
    FAQTitle: {
        margin: '2%',
        fontFamily: globalFont.chosenFont,
        fontSize: 18,
        color: global.baseBackground100
    },
    questionDescription: {
        marginTop: '3%',
        marginLeft: '3%',
        fontFamily: globalFont.chosenFont,
        fontSize: 15,
        color: global.baseGrey100,
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
    clearFilterText:{
        fontFamily: globalFont.chosenFont,
        backgroundColor: global.darkGrey100,
        marginHorizontal: 3,
        fontSize: 14,
        color: 'white',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },    
    filterText:{
        fontFamily: globalFont.chosenFont,
        backgroundColor: global.baseBlue100,
        marginHorizontal: 3,
        fontSize: 14,
        color: 'white',
        borderRadius: 10,
        padding: 10,
    },
});