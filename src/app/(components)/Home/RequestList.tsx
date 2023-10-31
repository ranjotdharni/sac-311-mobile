import { Text, View, StyleSheet, Dimensions } from "react-native";
import { dummyDataHome } from "../../../dummy";
import Request from "../Request";
import { global } from "../../../dummy";

export default function RequestList()
{
    return (
        <View style={styles.listWrapper}>
            <Text style={styles.listTitle}>Your Requests</Text>

            {
                dummyDataHome.map(data => {
                    return <Request key={data.number} category={data.category} type={data.type} reqNumber={data.number} date={data.date} status={data.status} width='90%' height={Dimensions.get('screen').height * 0.2} compact={false} />
                })
            } 
        </View>
    )
}

const styles = StyleSheet.create({
    listWrapper: {
        backgroundColor: global.baseBackground100,
        position: 'relative',
        width: Dimensions.get('screen').width,
        height: 'auto',
        alignItems: 'center',
        overflow: 'visible',
    },

    listTitleWrapper: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.05,
    },

    listTitle: {
        color: 'white',
        alignSelf: 'flex-start',
        fontSize: 30,
        padding: 0,
        backgroundColor: global.baseGold100,
        borderRadius: 8,
        overflow: 'hidden',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginLeft: '6%',
        position: 'relative',
        top: '0.75%',
    },
})