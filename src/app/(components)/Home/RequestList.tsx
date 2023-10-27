import { Text, View, StyleSheet, Dimensions } from "react-native";
import { dummyDataHome } from "../../../dummy";
import Request from "../Request";

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
        color: global.baseBlue100,
        alignSelf: 'flex-start',
        fontSize: 30,
        padding: '2%',
    },
})