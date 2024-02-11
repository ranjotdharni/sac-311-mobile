//RSS Feed integration from sacramentocityexpress
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet, Dimensions, Image } from 'react-native';
import axios from 'axios';
import * as Parser from 'react-native-rss-parser';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const borderOffset = 20;
const RssFeed: React.FC = () => {
const [rssData, setRssData] = useState<any[]>([]);
const [page, setPage] = useState<number>(1);


  useEffect(() => {
    const fetchRssFeed = async () => {
      try {
        const response = await axios.get('https://sacramentocityexpress.com/feed/');
        const data = await Parser.parse(response.data);

        // Store only the latest items
        const latestItems = data.items.slice(0, 20);
        setRssData(latestItems);

        //if infinitely scaling list is needed
        //setRssData((prevData) => [...prevData, ...data.items]);

      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchRssFeed();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => router.push({ pathname: '/(web)/WebView', params: { url: item.id } })} >
      <View style = {styles.RSSWrapper}>
        <Text style = {styles.title}>{item.title}</Text>
        <Text> {`${new Date(item.published).toLocaleDateString()} ${new Date(item.published).toLocaleTimeString()}`}</Text>
        <Text> {item.contentSnippet}</Text>
      </View>
    </TouchableOpacity>
  );

  //if infinitely scrolling list is needed
  const handleEndReached = () => {
    // Fetch more articles when the user reaches the end of the list
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        data={rssData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        //if infinitely scrolling list is needed
        //onEndReached={handleEndReached}
        //onEndReachedThreshold={0.30} // Adjust as needed
      />
    </SafeAreaView>
  );
};

export default RssFeed;

const styles = StyleSheet.create({
    Wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    RSSWrapper: {
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingBottom: '4%',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 2,
        borderRadius: 15,
        backgroundColor: 'lightblue', 
        padding: 8,     
    },

    RSSImage: {
        height:  '100%',
        aspectRatio: 1 / 1,
        borderTopLeftRadius: borderOffset,
        borderBottomLeftRadius: borderOffset,
    },

    Link: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
    }
})
