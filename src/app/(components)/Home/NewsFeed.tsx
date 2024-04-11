import { View, StyleSheet, Text, Dimensions, ScrollView, Image } from "react-native";
import FeedBox from "../FeedBox";
import { dummyDataNews } from "../../../customs";
import { global } from "../../../customs";
import { globalFont } from '../../../customs';
import { globalColorTheme } from "../../../customs";
import Carousel from "../Carousel";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { fetchRSSFeed } from './fetchRSSFeed';
import { Article } from "../../../customs";

//  To-Do   //
// Carousel Slider - completed on 11/6/2023
// updated to use RSS feed data on 3/31/2024

export default function NewsFeed() {

    const navigation = useNavigation();
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const initializeCarousel = async () => {
            const articlesFromRSS = await fetchRSSFeed('https://www.kcra.com/topstories-rss');
            setArticles(articlesFromRSS.slice(0, 3));//get only first three articles
        };
        initializeCarousel();
    }, []);

    const renderArticle = (article: any) => {
        return <FeedBox 
            key={article.id} 
            title={article.title} 
            imgUrl={article.imgUrl} 
            link={article.link} 
            desc={article.desc} 
        />;
    };

    return (
        <View style={{position: 'relative', backgroundColor: globalColorTheme.backgroundColor, width: Dimensions.get('screen').width, height: Dimensions.get('screen').height * 0.225, overflow: 'visible',}}>
            <View style={{backgroundColor: globalColorTheme.backgroundColor, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2%', paddingHorizontal: '2%',}}>
                <Text style={{color: globalColorTheme.blue, alignSelf: 'flex-start', fontSize: 25, fontWeight: 'bold', paddingTop: '2%', paddingLeft: '1%',}}>Local News</Text>
                <TouchableOpacity onPress={() => {(navigation.navigate as (screen: string) => void)('News')}} style={{backgroundColor: globalColorTheme.backgroundColor, flexDirection: 'row', alignItems: 'center',}}>
                    <Text style={{color: globalColorTheme.color, alignSelf: 'flex-start', fontSize: 22, fontWeight: 'bold', paddingTop: '3%', paddingLeft: '3%',}}>News Feed</Text>
                    <Image source={require('../../../assets/png/newspaper.png')} style={{backgroundColor:globalColorTheme.backgroundColor2, width: 25, height: 25, marginLeft: 5, marginTop: 15}} />
                </TouchableOpacity>
            </View>
            <Carousel bubbles={{radius: 5, spacing: 0.08, color: globalColorTheme.backgroundColor2, activeColor: global.baseGold100, activeRadius: 6}} nestData={articles} nestCallback={renderArticle} itemCount={articles.length} endPadding={'5%'} scrollOffset={Dimensions.get('screen').width * 0.98} minScroll={50} />
        </View>
    )
}

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