import { StyleSheet, Dimensions, Image, Linking, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import { router } from "expo-router";
import { fontGetter, globalFont, shadowUniversal, global } from "../../../customs";

const borderOffset = 20 //Locally (within component) applied border radius

export default function NewsFeedBox({ title, imgUrl, link, date, desc } : { title: string, imgUrl: string, link: string, date: Date, desc: string}) {
    return (
        <>
        <TouchableOpacity onPress={() => {router.push({ pathname: '/(web)/WebView', params: { url: link } })}} style={styles.FeedBoxWrapper}>
        <View style={[styles.ImageWrapper, shadowUniversal.default]}>
            <Image source={{ uri: imgUrl }} style={styles.FeedBoxImage} />
        </View>
        <CustomText font={fontGetter()} nol={1} text={date.toDateString()} style={styles.FeedBoxDate} />
        <CustomText font={fontGetter()} nol={3} text={title} style={styles.FeedBoxTitle} />
        </TouchableOpacity>
        
        </>
    )
}

const styles = StyleSheet.create({
    FeedBoxWrapper: {
        width: Dimensions.get('screen').width * 0.6,
        height: '70%',
        flexDirection: 'column',
        marginLeft: Dimensions.get('screen').width * 0.05,
        marginRight: Dimensions.get('screen').width * 0.05,
    },
    ImageWrapper: {
        height: '75%',
        position: 'relative',
        marginTop: '7%',
        backgroundColor: global.baseBackground100,
        borderRadius: borderOffset,
        display: 'flex',
    },
    FeedBoxImage: {
        height:  '100%',
        width: '100%',
        borderRadius: borderOffset,
    },
    FeedBoxTitle: {
        fontSize: Dimensions.get('screen').width * 0.035,
        fontWeight: 'bold',
        fontFamily: globalFont.chosenFont,
    },
    FeedBoxDate: {
        marginTop: '5%',
        color: global.baseGrey100,
        fontSize: Dimensions.get('screen').width * 0.03,
        fontFamily: globalFont.chosenFont,
    },
})