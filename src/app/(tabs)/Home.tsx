import { View, Text, StyleSheet } from "react-native";
import RequestList from "../(components)/Home/RequestList";


export default function Home()
{
    return (
        <View style={styles.homeWrapper}>
            <Text>This is the home page!</Text>

            <RequestList />
        </View>
    )
}

const styles = StyleSheet.create({
    homeWrapper: {
        width: '100%',
        height: '100%',
    }
})