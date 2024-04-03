import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { global, globalColorTheme } from "../../customs";
import localData from './patch.json';
import BulletPointDisplay from './BulletPoints';
import { globalFont } from '../../customs';

export type WhatsNewData = {
  header: string;
  body: string;
};

const Tab = createMaterialTopTabNavigator();

export default function WhatsNew() {
  

  const navigation = useNavigation();

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.xWrapper}>
        <View style={styles.inXWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.xIcon} source={require('../../assets/png/exit_x.png')} />
          </TouchableOpacity>
          <Text style={styles.topText}>What's New in the App!</Text>
        </View>
      </View>
      <Tab.Navigator screenOptions={({route}) => ({
                tabBarStyle: {backgroundColor:globalColorTheme.backgroundColor},
                tabBarActiveTintColor:globalColorTheme.color,
                tabBarInactiveTintColor:globalColorTheme.color,
            })}
            >
        <Tab.Screen name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </View>
  );
};

const OverviewScreen = () => {
    // Define the state with the correct type
  const [data, setData] = useState<WhatsNewData | null>(null);

  useEffect(() => {
    // Directly set the imported JSON data to state
    setData(localData);
  }, []);
  return (
    <View style={styles.container}>
        {data ? (
            <>
        <Text style={styles.headerText}>{data.header}</Text>
        <Text style={styles.bodyText}>{data.body}</Text>

        <BulletPointDisplay/>
        </>
        ):(
            <Text style={styles.headerText}> Loading...</Text>
        )}
    </View>
  );
};

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: global.baseBackground100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '2%',
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
    marginLeft: '8%',
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
    padding: '2%',
    fontSize: 16,
    fontFamily: globalFont.chosenFont,
    textAlign: 'left',
  }
});
