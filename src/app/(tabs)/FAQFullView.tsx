import { useNavigation, useLocalSearchParams  } from "expo-router";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { global } from "../../customs";
import { globalFont } from "../../customs";
import { ScrollView } from "react-native-gesture-handler";

export default function AnswerFullView(){
    const nav = useNavigation()
    const params = useLocalSearchParams<{type: string,  answer: string, question: string} >();
    return (
        <View style={styles.pageWrapper}>
            {/*Top Bar*/}
            <View style={styles.exitWrapper}>
                <View style={styles.innerExitWrapper}>
                    <Text style={styles.barText}>{params.type}</Text>
                    <TouchableOpacity onPress={() => { nav.goBack() }}>
                        <Image style={styles.resizeIcon} source={require('../../assets/png/exit_x.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.innerPageWrapper}>
                <View style={styles.infoWrapper}>
                    <ScrollView>
                        {/*Question here*/}
                        <View style={styles.questionWrapper}>
                            <Text style={styles.questionText}>{params.question}</Text>
                        </View>
                        {/*Horizontal rule*/}
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,}}/>
                        {/*Answer here*/}    
                        <View style={styles.answerWrapper}>
                            <Text style={styles.answerText}>{params.answer}</Text>
                        </View>
                        <View style={styles.bottomMargin}></View>
                    </ScrollView>
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
        height:'86%',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    barText: {
        fontSize: 25,
        marginLeft:'5%',
        fontFamily: globalFont.chosenFont,
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
        fontFamily: globalFont.chosenFont,
    },
    answerText:{
        fontSize: 20,
        fontFamily: globalFont.chosenFont,
    },
    innerExitWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:'6%',
        marginTop:'13%',
    },
    bottomMargin:{
        padding:35
    }
})
