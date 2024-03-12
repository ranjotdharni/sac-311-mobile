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

const borderOffset = 20;

export default function News() {
    const navigation = useNavigation();

    const [headlineData, setheadlineData] = useState<any[]>([]);
    const [totalRssData, setTotalRssData] = useState<any[]>([]);
    const [rssFeedState, setRssFeedState] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<number>(0);

    const fetchRssFeed = async () => {
        newsFeedSites.map(async (site) => {
            try {
                const response = await axios.get(site.url);

                const data = await Parser.parse(response.data);

                //if smaller data set needed can add .slice(0, [amount of entries wanted]) before the .filter
                const filteredData = data.items.filter((item) => !(!Array.isArray(item.enclosures) || item.enclosures.length == 0) && !(!Array.isArray(item.links) || item.links.length == 0));

                //console.log(filteredData[0]);

                //Data for the Carousel at the top, currently holds 3 of each news site's most recent articles
                setheadlineData((prevData) => [...prevData, ...filteredData.slice(0, 2)]);

                //All the articles that will be shown
                setTotalRssData((prevData) => [...prevData, ...filteredData.slice(3, filteredData.length - 1)]);

                //Sorting of the articles based on the published date
                headlineData.sort((item1: any, item2: any) => {
                    const itemDate1 = new Date(item1.published);
                    const itemDate2 = new Date(item2.published);
                    return itemDate1.getTime() - itemDate2.getTime();
                });
                totalRssData.sort((item1: any, item2: any) => {
                    const itemDate1 = new Date(item1.published);
                    const itemDate2 = new Date(item2.published);
                    return itemDate1.getTime() - itemDate2.getTime();
                });

                setIsLoading((prevData) => prevData+1)
            } catch (error) {
                console.error('Error fetching RSS feed:', error);
            }
        });
    };

    useEffect(() => {
        fetchRssFeed();
    }, [])

    function renderHeadlines(data: any) {
        return data.map((item: any): any => {
            const itemDate = new Date(item.published);
            return <NewsFeedBox key={Math.random()} title={item.title} imgUrl={item.enclosures[0].url} link={item.links[0].url} date={itemDate} desc={item.description} />
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
                        {renderHeadlines(headlineData)}
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
                                <RssFeed />
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
                        {
                            totalRssData.slice(0,2).map((item) => 
                            <TouchableOpacity key={item.id} style={{marginTop: '1%'}} onPress={() => router.push({ pathname: '/(web)/WebView', params: { url: item.links[0].url } })} >
                                <View style={styles.RSSWrapper}>
                                    <View style={styles.RSSContent}>
                                        <CustomText style={styles.title} font={globalFont.chosenFont} text={item.title} nol={3} />
                                        <Text> {`${new Date(item.published).toLocaleDateString()} ${new Date(item.published).toLocaleTimeString()}`}</Text>
                                    </View>
                                    <View style={styles.RSSImageWrapper}>
                                        <Image style={styles.RSSImage} source={{ uri: item.enclosures[0].url }}></Image>
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
        height: Dimensions.get('screen').height * 0.275,
        overflow: 'visible',
    },
    listPaddingTop: {
        height: '7%',
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
        //textAlign: 'center',
        fontSize: 25,
        //marginLeft: '21%',
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
        //marginLeft: '6%',
        marginTop: '13%',
    },
    addressHeader: {
        alignSelf: 'center',
        fontSize: 20,
        color: global.baseBackground100,
        backgroundColor: global.baseBlue100,
        padding: 5,
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: 'center'
    },
    AllNewsWrapper: {
        width: '100%',
        height: '39%',
        flexDirection: 'column',
    },
    AllNewsBarWrapper: {
        width: '100%',
        height: '20%',
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
        //marginRight: '4%',
        //borderTopLeftRadius: borderOffset,
        //borderBottomLeftRadius: borderOffset,
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
    RSSImageWrapper: {
        height: '100%',
        width: '35%',
        //aspectRatio: 1 / 1,
        //borderRadius: borderOffset,
      },
      RSSImage: {
        //height: 40,
        //width: '100%',
        aspectRatio: 1.5 / 1,
        borderRadius: borderOffset,
      },
      RSSWrapper: {
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingBottom: '4%',
        flexDirection: 'row'
      },
      RSSContent: {
        width: '65%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
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