import { View, Text } from "react-native";
import RequestList from "../(components)/Home/RequestList";


export default function Home()
{
    return (
        <View>
            <Text>This is the home page!</Text>

            <RequestList />
        </View>
    )
}