//RSS Feed integration from sacramentocityexpress
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import axios from 'axios';
import * as Parser from 'react-native-rss-parser';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalFont, global } from '../../customs';

const borderOffset = 20;
const RssFeed: React.FC = () => {
const [rssData, setRssData] = useState<any[]>([]);
const [page, setPage] = useState<number>(1);
const [searchValue, setSearchValue] = useState('');


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
      <View style={styles.searchInputWrapper}>
        <Image style={styles.searchIcon} source={require('../../assets/png/search.png')} />
        <TextInput style={styles.searchInput} value={searchValue} onChangeText={text => setSearchValue(text)} placeholder='Filter News' placeholderTextColor="#D3D3D3"></TextInput>
      </View>
      <View style = {{paddingBottom: '4%'}}></View>
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
    searchIcon: {
      position: 'absolute',
      left: 10,
      top: 15,
      width: 20,
      height: 20,
    },
    searchInputWrapper: {
      width: Dimensions.get('screen').width,
      height: 50,
      borderColor: global.baseBlue100,
      borderWidth: 1,
      borderRadius: 25,
      elevation: 10,
      backgroundColor: 'white',
      paddingBottom: '0%',
    },
    searchInput: {
      height: '100%',
      borderRadius: 25,
      paddingLeft: 40,
      paddingRight: 10,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      fontFamily: globalFont.chosenFont
    },
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
        fontFamily: globalFont.chosenFont,
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
