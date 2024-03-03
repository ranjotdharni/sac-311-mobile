import { Text, View, StyleSheet, Dimensions } from "react-native";
import { dummyDataHome, generateEndpointUrl, responseType } from "../../../customs";
import Request from "../Request";
import { global } from "../../../customs";
import { useEffect, useState } from "react";
import { globalFont } from "../../../customs";

export default function RequestList()
{
    const [testData, setTestData] = useState<Array<responseType>>([])

    async function fetchTestData() {
        const query = generateEndpointUrl(`NOT(Address='')`, 5, [])

        await fetch(query).then((middle) => {
            return middle.json()
        }).then((res) => {
            setTestData(res.features)
        })
    }

    useEffect(() => {
        fetchTestData()
    })

    return (
        <View style={styles.listWrapper}>
            {
                testData.map(item => {
                    return <Request key={item.attributes.ReferenceNumber} data={item} width='90%' height={Dimensions.get('screen').height * 0.2} compact={false} />
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
        fontFamily: globalFont.chosenFont,
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