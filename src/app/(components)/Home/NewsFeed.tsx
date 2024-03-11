import { View, StyleSheet, Text, Dimensions, ScrollView, Image } from "react-native";
import FeedBox from "../FeedBox";
import { dummyDataNews } from "../../../customs";
import { global } from "../../../customs";
import { globalFont } from '../../../customs';
import Carousel from "../Carousel";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Parser from 'react-native-rss-parser';

//  To-Do   //
// Carousel Slider - completed on 11/6/2023

export default function NewsFeed() {

    const navigation = useNavigation();

    function callback(data: any) {
        return data.map( (item: any): any => {
            return <FeedBox key={Math.random()} title={item.title} imgUrl={item.uri} link={item.url} desc={item.description} />
        })
    }

    return (
        <View style={styles.NewsFeedWrapper}>
            <View style={styles.HeaderContainer}>
                <Text style={styles.LocalNewsTitle}>Local News</Text>
                <TouchableOpacity onPress={() => {(navigation.navigate as (screen: string) => void)('News')}} style={styles.NewsFeedTouchable}>
                    <Text style={styles.NewsFeedTitle}>News Feed</Text>
                    <Image source={require('../../../assets/png/newspaper.png')} style={styles.IconStyle} />
                </TouchableOpacity>
            </View>
            <Carousel bubbles={{radius: 5, spacing: 0.08, color: global.baseGrey100, activeColor: global.baseGold100, activeRadius: 6}} nestData={dummyDataNews} nestCallback={callback} itemCount={dummyDataNews.length} endPadding={'5%'} scrollOffset={Dimensions.get('screen').width * 0.98} minScroll={50} />
        </View>
    )
}

/*export default function NewsFeed() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('RSS_FEED_URL');
                const parsedData = await Parser.parse(response.data);
                setArticles(parsedData.items);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };
        fetchArticles();
    }, []);

    const renderArticle = (data) => {
        return data.map((article) => (
            <FeedBox key={article.id} title={article.title} /* other props *//* />
        ));
    };

    return (
        <Carousel nestData={articles} nestCallback={renderArticle} /* other props *//* />
    );
}*/

//In the 'Carousel' component used above, please see the specific instructions for setting scrollOffset in the Carousel.tsx file if you need to re-use the component

const styles = StyleSheet.create({
    NewsFeedWrapper: {
        position: 'relative',
        backgroundColor: global.baseBackground100,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.225,
        //flex: 1,
        overflow: 'visible',
    },

    LocalNewsTitle: {
        color: global.baseBlue100,
        alignSelf: 'flex-start',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: '2%',
        paddingLeft: '1%',
        /*
        color: 'white',
        backgroundColor: global.baseGold100,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: globalFont.chosenFont,
        width: '95%',//Dimensions.get('screen').width + 2,
        marginTop: '1%',
        borderRadius: 7,
        overflow: 'hidden',
        paddingLeft: '1%',
        paddingRight: '1%',
        */
    },

    HeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2%',
        paddingHorizontal: '2%',
    },

    NewsFeedTouchable:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    IconStyle: {
        width: 25,
        height: 25,
        marginLeft: 5,
        marginTop: 15
    },

    NewsFeedTitle: {
        color: global.baseGrey100,
        alignSelf: 'flex-start',
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: '3%',
        paddingLeft: '3%',
    }
})