//RSS Feed integration from sacramentocityexpress
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import { router } from 'expo-router';
import { globalFont, global } from '../../../customs';
import { ScrollView } from 'react-native-gesture-handler';
import CustomText from "../CustomText";

const borderOffset = 20;
export default function RssFeed({ filteredData }: { filteredData: any[] }) {
  const [rssData, setRssData] = useState<any[]>([]);
  const [totalRssData, setTotalRssData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState('');
  const [renderBool, setRenderBool] = useState(true);
  const [totalCategories, setTotalCategories] = useState<any[]>([]);
  const [currentCategory, setCurrentCategory] = useState<any>('');

  const initializeRssFeed = () => {
    let categories = new Array();
    filteredData.map((item) => {
      item.categories.map((category: any) => {
        if (!categories.includes(category.name)) {
          categories.push(category.name);
        }
      });
    });

    setRssData(filteredData);
    setTotalRssData(filteredData);
    setTotalCategories(categories);
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

    const finalFilter = filteredRssData.filter((item) => {
      const categorySearch = item.categories.map((category: any) => {
        return category.name.includes(currentCategory);
      });
      return categorySearch.includes(true);
    })

    setRssData(finalFilter);
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
              setRenderBool(false);
              filterData();
            }}
            placeholder='Filter News'
            placeholderTextColor="#D3D3D3">
          </TextInput>
        </View>

        <View style={styles.padding}></View>

        <View style={styles.AllCategoriesWrapper}>
          <TouchableOpacity key={Math.random()} style={styles.ClearCategoryBox} onPress={() => {
            setCurrentCategory('');
            setRenderBool(false);
            filterData();
            setRenderBool(true);
          }}>
            <Text style={styles.CategoryText}>None</Text>
          </TouchableOpacity>

          <FlatList
            horizontal
            data={totalCategories}
            keyExtractor={(category) => category}
            renderItem={({ item }) =>

              <TouchableOpacity onPress={() => {
                console.log();
                setCurrentCategory(item);
                console.log(renderBool);
                setRenderBool((bool) => !bool);
                console.log(renderBool);
                console.log();
                filterData();
                console.log(renderBool);
                setRenderBool((bool) => !bool);
                console.log(renderBool);
              }}>
                <View style={styles.CategoryBox}>
                  <Text style={styles.CategoryText}>{item}</Text>
                </View>
              </TouchableOpacity>
            }
          />
        </View>

        <View style={styles.padding}></View>

        <FlatList
          data={rssData}
          keyExtractor={(item) => item.id}
          extraData={renderBool}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => router.push({ pathname: '/(web)/WebView', params: { url: item.links[0].url } })} >
              <View style={styles.RSSWrapper}>
                <View style={styles.RSSContent}>
                  <CustomText style={styles.title} font={globalFont.chosenFont} text={item.title} nol={3} />
                  <Text> {`${new Date(item.published).toLocaleDateString()} ${new Date(item.published).toLocaleTimeString()}`}</Text>
                </View>
                <View style={styles.RSSImageWrapper}>
                  <Image style={styles.RSSImage} source={{ uri: item?.enclosures[0].url }}></Image>
                </View>
              </View>
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

//export default RssFeed;

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
    padding: 8,
    color: 'white',
  },
  RSSImageWrapper: {
    height: '100%',
    width: '35%',
  },
  RSSImage: {
    aspectRatio: 1.5 / 1,
    borderRadius: borderOffset,
  },
  Link: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
  },
  AllCategoriesWrapper: {
    height: '7%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '2%',
  },
  CategoryBox: {
    height: '100%',
    width: Dimensions.get('screen').width * 0.25,
    backgroundColor: global.baseBlue100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Dimensions.get('screen').width * 0.01,

  },
  CategoryText: {
    fontSize: Dimensions.get('screen').width * 0.025,
    fontWeight: 'bold',
    fontFamily: globalFont.chosenFont,
    color: 'white',
  },
  CategoryPadding: {
    width: Dimensions.get('screen').width * 0.01,
  },
  ClearCategoryBox: {
    height: '100%',
    width: Dimensions.get('screen').width * 0.20,
    backgroundColor: global.darkGrey100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '1%',
    marginLeft: '1%',
  },
})
