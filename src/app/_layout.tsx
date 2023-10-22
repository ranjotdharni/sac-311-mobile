import { Stack } from "expo-router";
import NavBar from "./(components)/NavBar";

export default function Layout()
{

    return (
        <>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(request)" options={{ headerShown: false, presentation: 'modal'}} />
            </Stack>
            <NavBar />
        </>
    )
}