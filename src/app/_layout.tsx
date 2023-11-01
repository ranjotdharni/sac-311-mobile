import { Stack } from "expo-router";

export default function Layout()
{
    return (
        <>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(request)" options={{ headerShown: false, presentation: 'modal'}} />
                <Stack.Screen name="(web)" options={{ headerShown: false, presentation: 'fullScreenModal'}} />
            </Stack>
        </>
    )
}