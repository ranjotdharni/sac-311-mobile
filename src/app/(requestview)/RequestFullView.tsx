import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { dateToFormat, global, responseType } from "../../customs";
import CustomText from "../(components)/CustomText";

//==================================//
//  Pass the necessary parameters   //
//  when using this component!!!!   //
//==================================//

export default function RequestFullView(){
    const nav = useNavigation()

    const buffer = useLocalSearchParams<{ requestData: string }>()  //Should have type of responseType, must be parsed as string because url param would only take string type
    const data: responseType = JSON.parse(buffer.requestData)  //notice type after parsing!!!

    return (
        <View style={styles.pageWrapper}>
            {/*Top Bar*/}
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                    <Text style={styles.barText}>{data.attributes.ReferenceNumber}</Text>
                    <TouchableOpacity onPress={() => { nav.goBack() }}> 
                        <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.innerPageWrapper}>
                {/*Main Info*/}
                <View style={styles.infoWrapper}>
                    <CustomText nol={2} style={styles.addressHeader} text={data.attributes.Address} font='JBM' />

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Category Level 1:</Text>
                        <Text style={styles.basicText}>{data.attributes.CategoryLevel1}</Text> 
                    </View>

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Category Level 2:</Text>
                        <Text style={styles.basicText}>{data.attributes.CategoryLevel2}</Text> 
                    </View>

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Council District:</Text>
                        <Text style={styles.basicText}>{data.attributes.CouncilDistrictNumber}</Text> 
                    </View>

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Date Created:</Text>
                        <Text style={styles.basicText}>{dateToFormat('MMM DD, YYYY', new Date(data.attributes.DateCreated))}</Text> 
                    </View>

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Last Updated:</Text>
                        <Text style={styles.basicText}>{dateToFormat('MMM DD, YYYY', new Date(data.attributes.DateUpdated))}</Text> 
                    </View>

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Status:</Text>
                        <Text style={styles.basicText}>{data.attributes.PublicStatus}</Text> 
                    </View>

                    {
                        (
                            data.attributes.DateClosed !== null ?   //closing data is not null? then this ->

                            <View style={styles.rowWrapper}>
                                <Text style={styles.basicText}>Date Closed:</Text>
                                <Text style={styles.basicText}>{dateToFormat('MMM DD, YYYY', new Date(data.attributes.DateClosed))}</Text> 
                            </View> : //otherwise nothing

                            <></>
                        )
                    }

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Cross Street:</Text>
                        <Text style={styles.basicText}>{data.attributes.CrossStreet}</Text> 
                    </View>

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Neighborhood:</Text>
                        <Text style={styles.basicText}>{data.attributes.Neighborhood}</Text> 
                    </View>

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Zip Code:</Text>
                        <Text style={styles.basicText}>{data.attributes.ZIP}</Text> 
                    </View>

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Ticket ID:</Text>
                        <Text style={styles.basicText}>{data.attributes.SFTicketID}</Text> 
                    </View>

                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Data Source:</Text>
                        <Text style={styles.basicText}>{`${data.attributes.Data_Source} (${data.attributes.SourceLevel1})`}</Text> 
                    </View>
                </View>
                
                {/*Return Button*/}
                <TouchableOpacity onPress={() => { nav.goBack() }} style={styles.returnWrapper}> 
                    <Text style={styles.returnText}>Return</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    returnWrapper: {
        alignItems:'center',
        width: '60%',
        borderRadius:10,
        backgroundColor: global.baseBlue100,
        shadowColor: '#000',
        shadowOffset:{
            width:-2,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
    },
    pageWrapper:{
        width: '100%',
        height: '100%',
        backgroundColor: global.baseBackground100,
    },
    innerPageWrapper:{
        height:'83%',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    returnText: {
        color: 'white',
        fontSize: 25,
        fontFamily:'JBM',
        padding:'3%',
    },
    basicText: {
        fontSize: 22,
        lineHeight: 50,
    },
    barText: {
        fontSize: 25,
        marginLeft:'5%',
        fontFamily:'JBM',
        color:global.baseBackground100
    },
    infoWrapper:{
        paddingTop:'5%',
        width:'90%',
    },
    resizeIcon:{
        width:30,
        height:30,
    },
    exitWrapper:{
        backgroundColor: global.baseBlue100,
        width:'100%',
        shadowColor: '#000',
        shadowOffset:{
            width:-2,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        height:'12%',
    },
    rowWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    innerExitWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:'6%',
        marginTop:'13%',
    },
    addressHeader: {
        alignSelf: 'center',
        fontSize: 20,
        color: global.baseBackground100,
        backgroundColor: global.baseBlue100,
        padding: 5,
        borderRadius: 10,
        overflow: 'hidden',
        textAlign: 'center'
    }
}) 