import { View, StyleSheet, Text, DimensionValue } from "react-native";
import { dateToFormat, global } from "../../dummy";
import CustomText from "./CustomText";

const borderCuttoff: number = 15 //border radius, this will be applied to multiple wrapper components so I set it universally here

function DefaultRequest( { width, height, category, type, reqNumber, date, status, compact } : { width: DimensionValue, height: DimensionValue, category: string, type: string, reqNumber: number, date: Date, status: string, compact: boolean } ) {
    let internalStyle = (compact ? compactStyles : defaultStyles)
    let basicStyle = StyleSheet.create({ 
        default: {
            width: width, 
            height: height, 
            backgroundColor: 'white', 
            shadowColor: 'black', 
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
            <View style={internalStyle.requestCategoryWrapper}><CustomText text={category} bold={true} nol={0} style={internalStyle.requestCategory} /></View>

            <View style={internalStyle.internalWrapper}>
            <View style={internalStyle.basicWrapper}>
                <Text style={internalStyle.basicTitle}>Type:</Text><CustomText text={type} nol={0} bold={true} style={[internalStyle.basicContent, internalStyle.highlightType]} />
            </View>

            <View style={internalStyle.basicWrapper}>
                <Text style={internalStyle.basicTitle}>Request Number:</Text><CustomText text={reqNumber.toString()} nol={0} bold={false} style={internalStyle.basicContent} />
            </View>

            <View style={internalStyle.basicWrapper}>
                <Text style={internalStyle.basicTitle}>Date Created:</Text><CustomText nol={0} bold={false} text={dateToFormat('MMM DD, YYYY', date)} style={internalStyle.basicContent} />
            </View>

            <View style={internalStyle.basicWrapper}>
                <Text style={internalStyle.basicTitle}>Status:</Text><CustomText text={status} nol={0} bold={false} style={internalStyle.basicContent} />
            </View>
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
        fontSize: 15,
    },

    basicContent: {
        fontSize: 15
    },

    highlightType: {
        color: global.baseGold100,
        fontWeight: 'bold',
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