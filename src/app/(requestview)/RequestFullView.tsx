import { useNavigation } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { global } from "../../dummy";


export default function RequestFullView(){
    const nav = useNavigation()
    return (
        <View style={styles.pageWrapper}>
            {/*Top Bar*/}
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                    <Text style={styles.barText}>Details</Text>
                    <TouchableOpacity onPress={() => { nav.goBack() }}> 
                        <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.innerPageWrapper}>
                {/*Main Info*/}
                <View style={styles.infoWrapper}>
                    {/*Possibly add category title here*/}
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Type:</Text>
                        <Text style={styles.basicText}>(data)</Text> 
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Request Number:</Text>
                        <Text style={styles.basicText}>(data)</Text> 
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Date Created:</Text>
                        <Text style={styles.basicText}>(data)</Text> 
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Status:</Text>
                        <Text style={styles.basicText}>(data)</Text> 
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>Address:</Text>
                        <Text style={styles.basicText}>(data)</Text> 
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>...</Text>
                    </View>
                    <View style={styles.rowWrapper}>
                        <Text style={styles.basicText}>(Service-dependent fields)</Text>
                        <Text style={styles.basicText}>(data)</Text> 
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
}) 