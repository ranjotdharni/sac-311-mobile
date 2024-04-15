import { View, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native";
import { useEffect, useState } from 'react';
import NewsFeed from "../(components)/Home/NewsFeed";
import ButtonPanel from "../(components)/Home/ButtonPanel";
import ForeHead from "../(components)/Home/ForeHead";
import RequestList from "../(components)/Home/RequestList";
import axios from 'axios';
import * as Parser from 'react-native-rss-parser';
import { globalFont, global, newsFeedSites } from "../../customs";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import RssFeed from '../(components)/News/RssFeed';
import WeatherBox from '../(components)/News/WeatherBox';
import { TextInput } from "react-native-gesture-handler";
import NewsFeedBox from "../(components)/News/NewsFeedBox";
import Carousel from "../(components)/Carousel";
import CustomText from "../(components)/CustomText";
import { filter } from "lodash";

const borderOffset = 20;

export default function News() {
    const navigation = useNavigation();

    const [headlineData, setheadlineData] = useState<any[]>([]);
    const [totalRssData, setTotalRssData] = useState<any[]>([]);
    const [rssFeedState, setRssFeedState] = useState<boolean>(false);

    const fetchRssFeed = async () => {
        try {
            const response = await axios.get('https://sacramentocityexpress.com/feed');

            const data = await Parser.parse(response.data);

            //Data for the Carousel at the top
            if (data.items.length < 6)
                setheadlineData(data.items.slice(0, data.items.length - 1));
            else
                setheadlineData(data.items.slice(0, 6));

            setTotalRssData(data.items);

        } catch (error) {
            console.error('Error fetching RSS feed:', error);
        }
    };

    useEffect(() => {
        fetchRssFeed();
    }, [])

    function renderHeadlines(data: any) {
        return data.map((item: any): any => {
            const itemDate = new Date(item.published);
            return <NewsFeedBox key={Math.random()} title={item.title} link={item.links[0].url} date={itemDate} desc={item.description} />
        })
    }

    return (
        <>
            <View style={styles.pageWrapper}>
                <View style={styles.exitWrapper}>
                    <View style={styles.innerExitWrapper}>
                        <TouchableOpacity onPress={() => { (navigation.navigate as (screen: string) => void)('Home') }}>
                            <Image style={styles.ExitIcon} source={require('../../assets/png/exit_x.png')} />
                        </TouchableOpacity>
                        <Text style={styles.barText}>City News</Text>
                        <View style={{ marginRight: '25%' }}></View>
                    </View>
                </View>
                <View style={styles.headlineBarWrapper}>
                    <Text style={styles.headlineText}>Todays Headlines</Text>
                </View>
                <Image style={styles.backgroundImage} source={require('../../assets/png/whatsnewbg.png')} />
                <View style={styles.NewsFeedWrapper}>
                    <ScrollView showsHorizontalScrollIndicator={true} horizontal >
                        {renderHeadlines(headlineData)
                        }
                    </ScrollView>
                </View>
                <View style={{ height: '2%' }}></View>
                <WeatherBox />
                <View style={{ height: '2%' }}></View>
                {rssFeedState ?
                    <View style={{ height: '76%', width: '100%', position: 'absolute', marginTop: '24%' }}>
                        <View style={styles.AllRssNewsWrapper}>
                            <View style={styles.AllRssNewsBarWrapper}>
                                <Text style={styles.AllNewsText}>All News</Text>
                                <TouchableOpacity onPress={() => setRssFeedState(false)} style={styles.SliderButtonWrapper}>
                                    <Image style={styles.SliderButtonImage} source={require('../../assets/png/downIcon.png')} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ backgroundColor: global.baseGrey100 }}></View>
                            <View style={styles.RssNewsWrapper}>
                                <RssFeed filteredData={totalRssData} />
                            </View>
                        </View>
                    </View>
                    :
                    <View style={styles.AllNewsWrapper}>
                        <View style={styles.AllNewsBarWrapper}>
                            <Text style={styles.AllNewsText}>All News</Text>
                            <TouchableOpacity onPress={() => setRssFeedState(true)} style={styles.SliderButtonWrapper}>
                                <Image style={styles.SliderButtonImage} source={require('../../assets/png/upIcon.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.AllNewsFeedWrapper}>
                            {totalRssData.slice(6, 8).map((item) =>
                                <TouchableOpacity key={item.id} onPress={() => router.push({ pathname: '/(web)/WebView', params: { url: item.links[0].url } })} >
                                    <View style={styles.RSSWrapper}>
                                        <View style={styles.RSSContent}>
                                            <CustomText style={styles.title} font={globalFont.chosenFont} text={item.title} nol={3} />
                                            <Text> {`${new Date(item.published).toLocaleDateString()} ${new Date(item.published).toLocaleTimeString()}`}</Text>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            )
                            }
                        </View>
                    </View>
                }
                <View style={styles.listPaddingBottom}></View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        opacity: 0.15,
        top: '18%',
        height: '75%',
        width: '100%',
        position: 'absolute'
    },
    NewsFeedWrapper: {
        position: 'relative',
        backgroundColor: global.baseBackground200,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.205,
        overflow: 'visible',
    },
    listPaddingBottom: {
        height: '7%',
    },
    pageWrapper: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    headlineBarWrapper: {
        backgroundColor: global.baseGrey100,
        width: '100%',
        shadowColor: '#000',
        shadowOffset: {
            width: -2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '6%',
    },
    headlineText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: '3%',
        fontFamily: globalFont.chosenFont,
        color: global.baseBackground100
    },
    barText: {
        fontSize: 25,
        fontFamily: globalFont.chosenFont,
        color: global.baseBackground100
    },
    ExitIcon: {
        width: 30,
        height: 30,
        marginLeft: '18%',
    },
    exitWrapper: {
        backgroundColor: global.baseBlue100,
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
        alignItems: 'center',
        marginTop: '13%',
    },
    AllNewsWrapper: {
        width: '100%',
        height: '49%',
        flexDirection: 'column',
    },
    AllNewsBarWrapper: {
        width: '100%',
        height: '16%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: global.baseBackground100,
    },
    AllNewsText: {
        fontSize: 25,
        marginLeft: '4%',
        fontFamily: globalFont.chosenFont,
        color: 'black',
    },
    SliderButtonWrapper: {
        width: '10%',
        height: '60%',
        marginRight: '4%',
        backgroundColor: global.baseBackground100,
        borderRadius: 5,
        borderColor: global.baseGrey100,
        borderWidth: 1,
    },
    SliderButtonImage: {
        height: '100%',
        width: '100%',
    },
    AllNewsFeedWrapper: {
        width: '100%',
        height: '80%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: global.baseGrey100,
    },
    AllRssNewsWrapper: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    AllRssNewsBarWrapper: {
        width: '100%',
        height: '10.5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: global.baseBackground100,
    },
    RssNewsWrapper: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.82,
        backgroundColor: global.baseGrey100,
    },
    RSSWrapper: {
        paddingBottom: '6%',
        flexDirection: 'row'
    },
    RSSContent: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: global.darkGrey200,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: globalFont.chosenFont,
        marginBottom: 2,
        borderRadius: 15,
        //backgroundColor: 'lightblue',
        padding: 8,
        color: 'white',
    },
})