import { View, StyleSheet, Text, DimensionValue, Dimensions } from "react-native";
import { dateToFormat, global } from "../../customs";
import CustomText from "../(components)/CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { fontGetter } from "../../customs";

const borderCuttoff: number = 15 //border radius of component, this will be applied to multiple wrapper components so change it universally here

function DefaultFAQ( { width, height, tags, type, question, answer} : { width: DimensionValue, height: DimensionValue, tags: string, type: string, question: string, answer: string} ) {
    let basicStyle = StyleSheet.create({
        default: {
            width: width,
            height: height,
            backgroundColor: 'white',
            shadowColor: 'black',
            elevation: 5,
            shadowOffset: {
                width: -2,
                height: 4
            },
            shadowOpacity: 0.33, shadowRadius: 10,
            borderRadius: borderCuttoff,
        }    
    })
   
    return (
        <View style={[basicStyle.default, defaultStyles.requestWrapper]} >
            <View style={defaultStyles.arrowWrapper}>
                <View style={defaultStyles.basicWrapper}>
                    <CustomText text={question} nol={0} font={fontGetter()} style={defaultStyles.basicContent} />
                </View>
                <TouchableOpacity style={defaultStyles.fullRequestView} onPress={() => {router.push('/FAQFullView')}}>
                    <FontAwesome name={'chevron-right'} size={Dimensions.get('screen').width * 0.05} color={global.baseBlue100} paddingRight={10}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default function FAQ({ width, height, tags, type, question, answer} : { width: DimensionValue, height: DimensionValue, tags: string, type: string, question: string, answer: string, key: number}) {
    return (
        <DefaultFAQ width={width} height={height} tags={tags} type={type} question={question} answer={answer} />
    )
}

const defaultStyles = StyleSheet.create({
    requestWrapper: {
        marginTop: '5%',
        height: 'auto',
    },
    requestCategoryWrapper: {
        width: '100%',
        height: '25%',
        overflow: 'hidden',
        borderTopLeftRadius: borderCuttoff,
        borderTopRightRadius: borderCuttoff,
        backgroundColor: global.baseBlue100,
        justifyContent: 'center',
    },
    requestCategory: {
        fontSize: 25,
        width: 'auto',
        height: 'auto',
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: '2.5%',
    },
    internalWrapper: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height:'85%',
    },
    basicWrapper: {
        width: '100%',
        margin: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    basicContent: {
        fontSize: 20,
    },
    highlightType: {
        color: global.baseGold100,
        fontWeight: 'bold',
    },
    arrowWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    fullRequestView: {
        position: 'relative',
        top: '35%'
    }
})