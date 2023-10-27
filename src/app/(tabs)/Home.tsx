import { View, Text, StyleSheet, ScrollView } from "react-native";
import NewsFeed from "../(components)/Home/NewsFeed";
import ButtonPanel from "../(components)/Home/ButtonPanel";
import ForeHead from "../(components)/Home/ForeHead";
import RequestList from "../(components)/Home/RequestList";


export default function Home()
{
    return (
        <>
            <ForeHead />
            <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <ButtonPanel />
                    <NewsFeed />
                    <RequestList />
            </ScrollView>
            </View>
        </>
    )
}