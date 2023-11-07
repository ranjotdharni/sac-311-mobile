import { View, StyleSheet, Text, DimensionValue, Dimensions } from "react-native";
import { dateToFormat, global } from "../../dummy";
import CustomText from "./CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";


const borderCuttoff: number = 15 //border radius of component, this will be applied to multiple wrapper components so change it universally here

const viewRequest = (reqNumber: any) => {
    //console.log(reqNumber);
}


function DefaultRequest( { width, height, category, type, reqNumber, date, status, compact } : { width: DimensionValue, height: DimensionValue, category: string, type: string, reqNumber: number, date: Date, status: string, compact: boolean } ) {
    let internalStyle = (compact ? compactStyles : defaultStyles)
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
        <View style={[basicStyle.default, internalStyle.requestWrapper]} >
            <View style={internalStyle.requestCategoryWrapper}><CustomText text={category} font='JBM-B' nol={0} style={internalStyle.requestCategory} /></View>
            <View style={defaultStyles.arrowWrapper}>
            <View style={internalStyle.internalWrapper}>
            <View style={internalStyle.basicWrapper}>
                <Text style={internalStyle.basicTitle}>Type:</Text><CustomText text={type} nol={0} font='JBM-B' style={[internalStyle.basicContent, internalStyle.highlightType]} />
            </View>

            <View style={internalStyle.basicWrapper}>
                <Text style={internalStyle.basicTitle}>Request Number:</Text><CustomText text={reqNumber.toString()} nol={0} font='JBM' style={internalStyle.basicContent} />
            </View>

            <View style={internalStyle.basicWrapper}>
                <Text style={internalStyle.basicTitle}>Date Created:</Text><CustomText nol={0} font='JBM' text={dateToFormat('MMM DD, YYYY', date)} style={internalStyle.basicContent} />
            </View>

            <View style={internalStyle.basicWrapper}>
                <Text style={internalStyle.basicTitle}>Status:</Text><CustomText text={status} nol={0} font='JBM' style={internalStyle.basicContent} />
            </View>
            
        </View>
            <TouchableOpacity onPress={() => viewRequest(reqNumber)}>
                <Link style={defaultStyles.fullRequestView} href="/(requestview)/RequestFullView" />
                <FontAwesome paddingTop='10%' name={'chevron-right'} size={Dimensions.get('screen').width * 0.1} color='#2B60E9' />
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default function Request({ category, type, reqNumber, date, status, compact, width, height } : { category: string, type: string, reqNumber: number, date: Date, status: string, compact: boolean, width: DimensionValue, height: DimensionValue }) {
    return ( 
        <DefaultRequest compact={compact} width={width} height={height} category={category} type={type} reqNumber={reqNumber} date={date} status={status} />
    )
}

const defaultStyles = StyleSheet.create({
    requestWrapper: {
        marginTop: '5%',
        
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
        height: '85%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },

    basicWrapper: {
        width: '80%',
        marginLeft: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    basicTitle: {
        fontSize: 15,
    },

    basicContent: {
        fontSize: 15,
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
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
    }
})

const compactStyles = StyleSheet.create({
    requestWrapper: {
        marginTop: '5%',
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
        width: '100%',
        height: '75%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },

    basicWrapper: {
        width: '80%',
        marginLeft: '5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    basicTitle: {
        
    },

    basicContent: {

    },

    highlightType: {
        color: global.baseGold100
    }
})