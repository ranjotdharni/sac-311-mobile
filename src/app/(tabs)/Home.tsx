import { View, ScrollView, Dimensions } from "react-native";
import NewsFeed from "../(components)/Home/NewsFeed";
import ButtonPanel from "../(components)/Home/ButtonPanel";
import ForeHead from "../(components)/Home/ForeHead";
import RequestList from "../(components)/Home/RequestList";
import { TabsComponent as NearbyWidget } from "../(components)/Home/NearbyWidget";
import { shadowUniversal, global, globalColorTheme } from "../../customs";
import { StatusBar } from "expo-status-bar";


export default function Home()
{
    return (
        <>
        <View style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').height, backgroundColor: globalColorTheme.backgroundColor}}>
            <ForeHead />
            <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <ButtonPanel />
                    <NewsFeed />
                    {/*<RequestList />*/}
                    <NearbyWidget />
                    <View style={{ height: Dimensions.get('screen').height * 0.125 }}></View>
            </ScrollView>
            <View key={0o10101} style={[{width: '100%', height: Dimensions.get('screen').height * 0.005, position: 'fixed', backgroundColor:globalColorTheme.blue, top: '-100%'}, shadowUniversal.homeHeader]} />
            </View>                                                                                             
        </View>
        </>
    )
}