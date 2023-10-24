import { Stack } from "expo-router";


global.baseBlue100 = '#2F2DA3'
global.baseGold100 = '#BEA315'
global.baseGrey100 = '#6F6F6F'

export default function Layout()
{
    return (
        <>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(request)" options={{ headerShown: false, presentation: 'modal'}} />
            </Stack>
        </>
    )
}