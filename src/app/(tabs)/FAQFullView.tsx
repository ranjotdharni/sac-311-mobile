import { useNavigation } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { global } from "../../customs";

export default function FAQFullView(){
    const nav = useNavigation()
    return (
        <View style={styles.pageWrapper}>
            {/*Top Bar*/}
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                    <Text style={styles.barText}>FAQ</Text>
                    <TouchableOpacity onPress={() => { nav.goBack() }}>
                        <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.innerPageWrapper}>
                <View style={styles.infoWrapper}>
                    {/*Question here*/}
                    <View style={styles.questionWrapper}>
                        <Text style={styles.questionText}>(not connected to database yet){"\n"}{"\n"}</Text>
                        <Text style={styles.questionText}>Question</Text>
                    </View>
                    {/*Horizontal rule*/}
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,}}/>
                    {/*Answer here*/}
                    <View style={styles.answerWrapper}>
                        <Text style={styles.answerText}>Answer</Text>
                        <Text style={styles.answerText}></Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    questionWrapper:{
        marginBottom: '5%'
    },
    answerWrapper:{
        marginTop: '5%'
    },
    questionText:{
        fontSize: 30,
    },
    answerText:{
        fontSize: 20,
    },
    innerExitWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:'6%',
        marginTop:'13%',
    },
})