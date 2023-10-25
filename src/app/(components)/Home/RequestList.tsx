import { ScrollView, View, StyleSheet } from "react-native";
import { dummyData } from "../../../dummy";
import Request from "../Request";

export default function RequestList()
{
    return (
        <View style={styles.listWrapper}>
            <ScrollView>
                {
                    dummyData.map(data => {
                        return <Request key={data.number} category={data.category} type={data.type} reqNumber={data.number} date={data.date} status={data.status} width='90%' height='30%' compact={false} />
                    })
                }
            </ScrollView>  
        </View>
    )
}

const styles = StyleSheet.create({
    listWrapper: {
        position: 'absolute',
        width: '100%',
        height: '40%',
        bottom: 0,
    },

    scrollView: {
        width: '90%',
        height: 'auto',
    }
})