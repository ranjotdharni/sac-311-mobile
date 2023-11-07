import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function Layout()
{
    return (
        <>
            <StatusBar style='light' />
            <Stack>
                <Stack.Screen name="RequestFullView" options = {{ headerShown: false }} />
            </Stack>
        </>
    )
}