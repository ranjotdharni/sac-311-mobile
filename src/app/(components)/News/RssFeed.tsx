//RSS Feed integration from sacramentocityexpress
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import { router } from 'expo-router';
import { globalFont, global } from '../../../customs';
import CustomText from "../CustomText";

const borderOffset = 20;
export default function RssFeed({ filteredData }: { filteredData: any[] }) {
  const [rssData, setRssData] = useState<any[]>([]);
  const [totalRssData, setTotalRssData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const initializeRssFeed = () => {
    setRssData(filteredData);
    setTotalRssData(filteredData);
  };

  useEffect(() => {
    initializeRssFeed();
  }, []);

  //Filters data based on category and search value chosen
  const filterData = () => {
    const filteredRssData = totalRssData.filter(item => {
      const textToSearch = `${item.title.toLowerCase()} ${item.description.toLowerCase()}`;
      return textToSearch.includes(searchValue.toLowerCase());
    });
    setRssData(filteredRssData);
  }

  return (
    <>
      <View style={{ backgroundColor: global.baseGrey100, height: '84%' }}>
        <View style={styles.searchWrapper}>
          <Image style={styles.searchIcon} source={require(' ../../../assets/png/search.png')} />
          <TextInput
            style={styles.searchInput}
            value={searchValue}
            onChangeText={text => { setSearchValue(text) }}
            onSubmitEditing={() => {
              filterData();
            }}
            placeholder='Filter News'
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={styles.padding}></View>
        <View style={styles.padding}></View>

        <FlatList
          data={rssData}
          keyExtractor={(item) => item.id}
          extraData={rssData}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => router.push({ pathname: '/(web)/WebView', params: { url: item.links[0].url } })} >
              <View style={styles.RSSWrapper}>
                <View style={styles.RSSContent}>
                  <CustomText style={styles.title} font={globalFont.chosenFont} text={item.title} nol={3} />
                  <Text> {`${new Date(item.published).toLocaleDateString()} ${new Date(item.published).toLocaleTimeString()}`}</Text>
                </View>
              </View>
              <View style={{ padding: 5 }}></View>
            </TouchableOpacity>
          }
        //if infinitely scrolling list is needed
        // onEndReached={handleEndReached} //function callback
        // onEndReachedThreshold={0.80} // Adjust as needed
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  padding: {
    height: '1%',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    marginHorizontal: '2%',
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
    paddingHorizontal: '3%',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: '1%',
  },
  searchInput: {
    flex: 1,
    marginLeft: '1%',
    fontFamily: globalFont.chosenFont
  },
  RSSWrapper: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingBottom: '4%',
    flexDirection: 'row',
    backgroundColor: global.darkGrey200
  },
  RSSContent: {
    width: '100%',
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
    padding: 8,
    color: 'white',
  },
})
