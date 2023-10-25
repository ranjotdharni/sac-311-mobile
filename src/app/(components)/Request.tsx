import { View, StyleSheet, Text, DimensionValue } from "react-native";

function DefaultRequest( { category, type, reqNumber, date, status } : { category: string, type: string, reqNumber: number, date: Date, status: string } ) {
    return (
        <View>
            <Text>{category}</Text>
            <Text>{type}</Text>
            <Text>{reqNumber}</Text>
            <Text>{date.toUTCString()}</Text>
            <Text>{status}</Text>
        </View>
    )
}

function CompactRequest( { category, type, reqNumber, date, status } : { category: string, type: string, reqNumber: number, date: Date, status: string } ) {
    return (
        <View>
            <Text>{category}</Text>
            <Text>{type}</Text>
            <Text>{reqNumber}</Text>
            <Text>{date.toUTCString()}</Text>
            <Text>{status}</Text>
        </View>
    )
}

export default function Request({ category, type, reqNumber, date, status, compact, width, height } : { category: string, type: string, reqNumber: number, date: Date, status: string, compact: boolean, width: DimensionValue, height: DimensionValue }) {
    dimensions[0] = width;
    dimensions[1] = height;

    return ( 
        compact ?  
        <CompactRequest category={category} type={type} reqNumber={reqNumber} date={date} status={status} /> : 
        <DefaultRequest category={category} type={type} reqNumber={reqNumber} date={date} status={status} />
    )
}

let dimensions : Array<DimensionValue | undefined> = [undefined, undefined]

const defaultStyles = StyleSheet.create({
    RequestWrapper: {
        width: dimensions[0],
        height: dimensions[1],
    }
})

const compactStyles = StyleSheet.create({
    RequestWrapper: {
        width: dimensions[0],
        height: dimensions[1],
    }
})