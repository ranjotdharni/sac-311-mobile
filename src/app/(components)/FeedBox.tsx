import { StyleSheet, Dimensions, Image, Linking, TouchableOpacity, View } from "react-native";
import { shadowUniversal, global } from "../../customs";
import CustomText from "./CustomText";
import { router } from "expo-router";
import { fontGetter } from "../../customs";
import { globalFont } from '../../customs';
import { globalColorTheme } from "../../customs";

const borderOffset = 20 //Locally (within component) applied border radius

export default function FeedBox({ title, imgUrl, link, desc } : { title: string, imgUrl: string, link: string, desc: string }) {
    return (
        <TouchableOpacity onPress={() => {router.push({ pathname: '/(web)/WebView', params: { url: link } })}} style={[{width: Dimensions.get('screen').width * 0.96, height: '80%', position: 'relative', marginLeft: Dimensions.get('screen').width * 0.02, top: '5%', backgroundColor: globalColorTheme.backgroundColor, borderRadius: borderOffset, display: 'flex', flexDirection: 'row'}, shadowUniversal.default]}>
            <Image source={{ uri: imgUrl }} style={styles.FeedBoxImage} />
            <View style={{height: '100%', width: '65%',}}>
                <CustomText font={fontGetter()} nol={2} text={title} style={{fontSize: Dimensions.get('screen').width * 0.045, fontWeight: 'bold', color: globalColorTheme.color, fontFamily: globalFont.chosenFont, width: '90%', height: 'auto', marginLeft: '5%', alignSelf: 'flex-start', marginTop: '1%',}} />
                <CustomText font={fontGetter()} nol={3} text={desc} style={{width: '90%', marginLeft: '5%', alignSelf: 'flex-start', marginTop: '2.5%', color: globalColorTheme.color, fontSize: Dimensions.get('screen').width * 0.028, fontFamily: globalFont.chosenFont,}} />
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

    

    FeedBoxImage: {
        height:  '100%',
        aspectRatio: 1 / 1,
        borderTopLeftRadius: borderOffset,
        borderBottomLeftRadius: borderOffset,
    },

    

    

    

    Link: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
    }
})