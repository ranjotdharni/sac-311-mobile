import { Stack } from "expo-router";


export default function Layout()
{
    return (
        <>
            <Stack>
                <Stack.Screen name="Home" options={{ headerShown: false }} />
                <Stack.Screen name="Explore" options={{ headerShown: false }} />
                <Stack.Screen name="Resources" options={{ headerShown: false }} />
                <Stack.Screen name="Profile" options={{ headerShown: false }} />
            </Stack>
        </>
    )
}