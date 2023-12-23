import { View, StyleSheet, Text, DimensionValue, Dimensions } from "react-native";
import { dateToFormat, global, responseType } from "../../customs";
import CustomText from "./CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";


const borderCuttoff: number = 15 //border radius of component, this will be applied to multiple wrapper components so change it universally here


function DefaultRequest( { width, height, category, type, reqNumber, date, status, compact, focusFunction } : { width: DimensionValue, height: DimensionValue, category: string, type: string, reqNumber: string, date: Date, status: string, compact: boolean, focusFunction: () => void } ) {
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
            {(!compact ? <View style={internalStyle.requestCategoryWrapper}><CustomText text={category} font='JBM-B' nol={0} style={internalStyle.requestCategory} /></View> : <></>)}

            <View style={defaultStyles.arrowWrapper}>
                <View style={[internalStyle.internalWrapper, (compact ? {width: width, height: height} : {})]}>
                    {compact ? <CustomText text={(category.length > 15 ? category.substring(0, 15) + '...' : category)} font='JBM' nol={0} style={internalStyle.requestCategory} /> : <></>}

                    {
                        (
                            !compact ? 
                            <View style={internalStyle.basicWrapper}>
                                <Text style={internalStyle.basicTitle}>Type:</Text><CustomText text={type} nol={0} font='JBM-B' style={[internalStyle.basicContent, internalStyle.highlightType]} />
                            </View>
                            :
                            <></>
                        )
                    }

                    <View style={(!compact ? internalStyle.basicWrapper : internalStyle.requestNumber)}>
                        {(!compact ? <Text style={internalStyle.basicTitle}>Request Number:</Text> : <></>)}
                        <CustomText text={reqNumber.toString()} nol={0} font='JBM' style={[internalStyle.basicContent, (compact ? {color: global.baseGrey100} : {})]} />
                    </View>

                    <View style={(!compact ? internalStyle.basicWrapper : internalStyle.requestDate)}>
                        {(!compact ? <Text style={internalStyle.basicTitle}>Date Created:</Text> : <></>)}
                        <CustomText nol={0} font='JBM' text={dateToFormat((!compact ? 'MMM DD, YYYY' : 'MM/DD/YYYY'), date)} style={internalStyle.basicContent} />
                    </View>

                    <View style={(!compact ? internalStyle.basicWrapper : internalStyle.requestStatus)}>
                        {(!compact ? <Text style={internalStyle.basicTitle}>Status:</Text> : <></>)}
                        <CustomText text={status} nol={0} font='JBM' style={[internalStyle.basicContent, (compact ? {marginRight: '10%', top: -2, color: (status === 'CLOSED' ? 'red' : (status === 'NEW' ? 'green' : global.baseGold100))} : {})]} />
                    </View>  
                </View>

                {
                    !compact ?
                    <TouchableOpacity style={internalStyle.fullRequestView} onPress={focusFunction}>
                        <FontAwesome name={'chevron-right'} size={Dimensions.get('screen').width * 0.05} color={global.baseBlue100} />
                    </TouchableOpacity>
                    :
                    <></>
                }
            </View>
            {
                compact ?
                <TouchableOpacity style={internalStyle.fullRequestView} onPress={focusFunction}>
                    <FontAwesome name={'chevron-right'} size={Dimensions.get('screen').width * 0.05} color={global.baseGrey100} />
                </TouchableOpacity>
                :
                <></>
            }
        </View>
    )
}

export default function Request({ data, compact, width, height } : { data: responseType, compact: boolean, width: DimensionValue, height: DimensionValue }) {
    return ( 
        <DefaultRequest
            compact={compact} 
            width={width} 
            height={height} 
            category={(data.attributes.CategoryLevel2 !== 'General' ? data.attributes.CategoryLevel2 : data.attributes.CategoryLevel1)} 
            type={data.attributes.CategoryLevel1} 
            reqNumber={data.attributes.ReferenceNumber} 
            date={new Date(data.attributes.DateCreated)} 
            status={data.attributes.PublicStatus}
            focusFunction={() => {router.push({pathname: '/(requestview)/RequestFullView', params: {requestData: JSON.stringify(data)}})}} 
        />
    )
}

/*
<View>
                <TouchableOpacity onPress={() => {router.push('/(requestview)/RequestFullView')}}>
                    <FontAwesome paddingTop='15%' name={'chevron-right'} size={Dimensions.get('screen').width * 0.05} color={global.baseBlue100} />
                </TouchableOpacity>
            </View>
*/

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
        position: 'relative',
        top: '35%'
    },

    requestNumber: {

    },

    requestDate: {

    },

    requestStatus: {

    }
})

const compactStyles = StyleSheet.create({
    requestWrapper: {
        marginTop: '5%',
    },

    requestCategoryWrapper: {
    },

    requestCategory: {
        position: 'absolute',
        top: '5%',
        left: '2.5%',
        fontSize: 25,
        color: global.baseBlue100,
    },

    internalWrapper: {
        position: 'absolute',
    },

    basicWrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10,
    },

    basicTitle: {
    },

    basicContent: {
    },

    highlightType: {
    },

    arrowWrapper: {
    },

    fullRequestView: {
        left: '92.5%',
        marginTop: '11%'
    },

    requestNumber: {
        position: 'absolute',
        top: '40%',
        left: '2.5%',
    },

    requestDate: {
        position: 'absolute',
        top: '75%',
        left: '4%',
    },

    requestStatus: {
        alignSelf: 'flex-end',
        top: '42%',
    }
})