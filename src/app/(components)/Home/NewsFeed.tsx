import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import FeedBox from "../FeedBox";
import { dummyDataNews } from "../../../dummy";
import { global } from "../../../dummy";

//  To-Do   //
// Carousel Slider
// Nest WebView in Modal for in-app browser effect

export default function NewsFeed() {
    return (
        <View style={styles.NewsFeedWrapper}>
            <Text style={styles.NewsFeedTitle}>News</Text>
            <ScrollView horizontal contentContainerStyle={{/*flexGrow: 1,*/ paddingRight: '5%'}}>
                {
                    dummyDataNews.map( data => {
                            return <FeedBox key={Math.random()} title={data.title} imgUrl={data.uri} link={data.url} desc={data.description} />
                        }
                    )
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    NewsFeedWrapper: {
        position: 'relative',
        backgroundColor: global.baseBackground100,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.225,
        //flex: 1,
        overflow: 'visible',
    },

    NewsFeedTitle: {
        color: 'white',
        backgroundColor: global.baseGold100,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30,
        width: '95%',//Dimensions.get('screen').width + 2,
        marginTop: '1%',
        borderRadius: 7,
        overflow: 'hidden',
        paddingLeft: '1%',
        paddingRight: '1%',
    }
})