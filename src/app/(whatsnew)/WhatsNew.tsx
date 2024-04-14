import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { global, globalColorTheme } from "../../customs";
import localData from './patch.json';
import BulletPointDisplay from './BulletPoints';
import { globalFont } from '../../customs';

export type WhatsNewData = {
  header: string;
  OverviewBody: string;
  HomeBody: string,
  ExploreBody: string,
  PlusBody: string,
  ResourcesBody: string,
  ProfileBody: string,
};
export function useWhatsNewData(): WhatsNewData | null {
  const [data, setData] = useState<WhatsNewData | null>(null);

  useEffect(() => {
    // Load data from JSON file or any other data source
    setData(localData);
  }, []);

  return data;
}

const Tab = createMaterialTopTabNavigator();

export default function WhatsNew() {
  

  const navigation = useNavigation();

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.xWrapper}>
        <View style={styles.inXWrapper}>
          <Text style={styles.topText}>What's New in the App!</Text>
        </View>
      </View>
      <Tab.Navigator screenOptions={({route}) => ({
                 tabBarStyle: { backgroundColor: globalColorTheme.backgroundColor },
                 tabBarActiveTintColor: globalColorTheme.color,
                 tabBarInactiveTintColor: globalColorTheme.color,
                 tabBarLabelStyle: { fontSize: 12, fontFamily: globalFont.chosenFont }, // Disable word wrapping
                 tabBarScrollEnabled: true, // Enable scrolling for long tab labels
                 tabStyle: { width: 'auto' }, // Set the width of each tab to auto

               })}
   
            >
        <Tab.Screen name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Plus Button" component={PlusScreen} />
        <Tab.Screen name="Resources" component={ResourcesScreen} />




      </Tab.Navigator>
    </View>
  );
};

const OverviewScreen = () => {
  const data = useWhatsNewData();

  return (
    <View style={styles.container}>
        {data ? (
            <>
        <Text style={styles.headerText}>{data.header}</Text>
        <Text style={styles.bodyText}>{data.OverviewBody}</Text>

        <BulletPointDisplay/>
        </>
        ):(
            <Text style={styles.headerText}> Loading...</Text>
        )}
    </View>
  );
};

const HomeScreen = () => {
  
  const data = useWhatsNewData();

   return (
    <ScrollView contentContainerStyle={styles.container}>

     <View style={styles.container}>
         {data ? (
             <>
         <Text style={styles.bodyText}>{data.HomeBody}</Text>
         <Text style={styles.descriptionText}>If you aren't sure what services are available to you, this is a quick way to find some.</Text>
         <Image source={require('../../assets/updatepng/homeareyou.png')} style={styles.image} />
         <Text style={styles.descriptionText}>This news reel will show you recent news in the city of Sacramento.</Text>
         <Image source={require('../../assets/updatepng/homenews.png')} style={styles.image} />
         <Text style={styles.descriptionText}>This is a map of recent requests placed near you.</Text>
         <Image source={require('../../assets/updatepng/homemap.png')} style={styles.image} />
         </>
         ):(
             <Text style={styles.headerText}> Loading...</Text>
         )}
     </View>
     </ScrollView>
   );
};
const ExploreScreen = () => {
  const data = useWhatsNewData();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.container}>
          {data ? (
             <>
         <Text style={styles.bodyText}>{data.ExploreBody}</Text>
         <Text style={styles.descriptionText}>This handy bar will let you search for any address within Sacramento City</Text>
         <Image source={require('../../assets/updatepng/exploreaddresses.png')} style={styles.image} />
         <Text style={styles.descriptionText}>If you tap on any of the icons on the map, a detailed overview of the request will pop up.</Text>
         <Image source={require('../../assets/updatepng/exploredetails.png')} style={styles.image} />

         </>
         ):(
             <Text style={styles.headerText}> Loading...</Text>
         )} 
         </View>
    </ScrollView>

  );
};

const PlusScreen = () => {
  const data = useWhatsNewData();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.container}>
          {data ? (
             <>
         <Text style={styles.bodyText}>{data.PlusBody}</Text>
         <Image source={require('../../assets/updatepng/plusbutton.png')} style={styles.image} />

         </>
         ):(
             <Text style={styles.headerText}> Loading...</Text>
         )} 
         </View>
    </ScrollView>

  );
};

const ResourcesScreen = () => {
  const data = useWhatsNewData();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.container}>
          {data ? (
             <>
         <Text style={styles.bodyText}>{data.ExploreBody}</Text>
         <Text style={styles.descriptionText}>The services section has a description of every available 311 service, as well as filters and te ability to search for a specific service.</Text>
         <Image source={require('../../assets/updatepng/services.png')} style={styles.image} />
         <Text style={styles.descriptionText}>The answers section contains many commonly asked questions about each service for fast and easy access to answers.</Text>
         <Image source={require('../../assets/updatepng/answers.png')} style={styles.resourceImage} />

         </>
         ):(
             <Text style={styles.headerText}> Loading...</Text>
         )} 
         </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    paddingTop: '12.5%',
    flex: 1,
    backgroundColor: global.baseBackground100,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: '2%',
    paddingBottom: '15%', 
    marginLeft: '2%',
    marginRight: '2%',
  },
  xWrapper: {
    height: 50,
    backgroundColor: global.baseBlue100,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  xIcon: {
    width: 20,
    height: 20,
  },
  inXWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topText: {
    fontSize: 22,
    color: global.baseBackground100,
    textAlign: 'center',
    fontFamily: globalFont.chosenFont,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    fontFamily: globalFont.chosenFont,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyText: {
    padding: '10%',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: globalFont.chosenFont,
    textAlign: 'center',
  },
  descriptionText: {
    padding: '5%',
    fontSize: 14,
    fontFamily: globalFont.chosenFont,
    textAlign: 'center',
  },
  image: {
    width: 310, 
    height: 150,
    borderWidth: 2,
    borderColor: global.baseBlue200,
  },
  resourceImage:{
    aspectRatio: 1, 
    width: 500, 
    height: 300,
    borderWidth: 2,
    borderColor: global.baseBlue200,
  }
});
