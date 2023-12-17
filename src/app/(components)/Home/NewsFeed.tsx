import { View, StyleSheet, Text, Dimensions, ScrollView } from "react-native";
import FeedBox from "../FeedBox";
import { dummyDataNews } from "../../../customs";
import { global } from "../../../customs";
import Carousel from "../Carousel";

//  To-Do   //
// Carousel Slider - completed on 11/6/2023

export default function NewsFeed() {

    function callback(data: any) {
        return data.map( (item: any): any => {
            return <FeedBox key={Math.random()} title={item.title} imgUrl={item.uri} link={item.url} desc={item.description} />
        })
    }

    return (
        <View style={styles.NewsFeedWrapper}>
            <Text style={styles.NewsFeedTitle}>News</Text>
            <Carousel bubbles={{radius: 5, spacing: 0.08, color: global.baseGrey100, activeColor: global.baseBlue100, activeRadius: 6}} nestData={dummyDataNews} nestCallback={callback} itemCount={dummyDataNews.length} endPadding={'5%'} scrollOffset={Dimensions.get('screen').width * 0.95} minScroll={100} />
        </View>
    )
}

//In the 'Carousel' component used above, please see the specific instructions for setting scrollOffset in the Carousel.tsx file if you need to re-use the component

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