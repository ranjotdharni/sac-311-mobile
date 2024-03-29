import { StyleSheet, Dimensions, Image, Linking, TouchableOpacity, View } from "react-native";
import { shadowUniversal, global } from "../../customs";
import CustomText from "./CustomText";
import { router } from "expo-router";
import { fontGetter } from "../../customs";
import { globalFont } from '../../customs';

const borderOffset = 20 //Locally (within component) applied border radius

export default function FeedBox({ title, imgUrl, link, desc } : { title: string, imgUrl: string, link: string, desc: string }) {
    return (
        <TouchableOpacity onPress={() => {router.push({ pathname: '/(web)/WebView', params: { url: link } })}} style={[styles.FeedBoxWrapper, shadowUniversal.default]}>
            <Image source={{ uri: imgUrl }} style={styles.FeedBoxImage} />
            <View style={styles.FeedBoxContentWrapper}>
                <CustomText font={fontGetter()} nol={2} text={title} style={styles.FeedBoxTitle} />
                <CustomText font={fontGetter()} nol={3} text={desc} style={styles.FeedBoxText} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    FeedBoxWrapper: {
        width: Dimensions.get('screen').width * 0.96, //say we call the last number on this line 'x' (see next comment below),...
        height: '80%',
        position: 'relative',
        marginLeft: Dimensions.get('screen').width * 0.02,
        top: '5%', //...then the last number on this line should be equal to (1 - x) / 2!!!!!
        backgroundColor: 'white',
        borderRadius: borderOffset,
        display: 'flex',
        flexDirection: 'row'
    },

    FeedBoxImage: {
        height:  '100%',
        aspectRatio: 1 / 1,
        borderTopLeftRadius: borderOffset,
        borderBottomLeftRadius: borderOffset,
    },

    FeedBoxContentWrapper: {
        height: '100%',
        width: '65%',
    },

    FeedBoxTitle: {
        fontSize: Dimensions.get('screen').width * 0.045,
        fontWeight: 'bold',
        fontFamily: globalFont.chosenFont,
        width: '90%',
        height: 'auto',
        marginLeft: '5%',
        alignSelf: 'flex-start',
        marginTop: '1%',
    },

    FeedBoxText: {
        width: '90%',
        marginLeft: '5%',
        alignSelf: 'flex-start',
        marginTop: '2.5%',
        color: global.baseBlue100,
        fontSize: Dimensions.get('screen').width * 0.028,
        fontFamily: globalFont.chosenFont,
    },

    Link: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
    }
})