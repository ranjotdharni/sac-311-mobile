import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function Layout()
{
    return (
        <>
            <StatusBar style='light' />
            <Stack>
                <Stack.Screen name="Type" options = {{ headerShown: false, presentation: 'modal' }} />
                <Stack.Screen name="Location" options = {{ headerShown: false, presentation: 'modal' }} />
                <Stack.Screen name="Confirm" options = {{ headerShown: false, presentation: 'modal' }} />
                <Stack.Screen name="RequestConfirm" options = {{ headerShown: false, presentation: 'modal' }} />
            </Stack>
        </>
    )
}