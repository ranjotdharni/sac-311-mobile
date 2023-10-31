import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import NewsFeed from "../(components)/Home/NewsFeed";
import ButtonPanel from "../(components)/Home/ButtonPanel";
import ForeHead from "../(components)/Home/ForeHead";
import RequestList from "../(components)/Home/RequestList";
import { shadowUniversal, global } from "../../dummy";


export default function Home()
{
    return (
        <View style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, backgroundColor: global.baseBackground100}}>
            <ForeHead />
            <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <ButtonPanel />
                    <NewsFeed />
                    <RequestList />
                    <View style={{ height: Dimensions.get('screen').height * 0.125 }}></View>
            </ScrollView>
            <View key={0o10101} style={[{width: '100%', height: Dimensions.get('screen').height * 0.005, position: 'fixed', backgroundColor: global.baseBlue100, top: '-100%'}, shadowUniversal.homeHeader]} />
            </View>                                                                                             
        </View>
    )
}