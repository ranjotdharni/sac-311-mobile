import { Stack } from "expo-router";
import NavBar from "../(components)/NavBar";
import { StatusBar } from "expo-status-bar";


export default function Layout()
{
    return (
        <>
            <StatusBar style='dark' />
                <Stack>
                    <Stack.Screen name="Home" options={{ headerShown: false }} />
                    <Stack.Screen name="Explore" options={{ headerShown: false }} />
                    <Stack.Screen name="Resources" options={{ headerShown: false }} />
                    <Stack.Screen name="ResourceAbout" options={{ headerShown: false }} />
                    <Stack.Screen name="ResourceAnswers" options={{ headerShown: false }} />
                    <Stack.Screen name="Profile" options={{ headerShown: false }} />
                    <Stack.Screen name="Profile3" options={{ headerShown: false }} />
                    <Stack.Screen name="Profile0" options={{ headerShown: false }} />
                    <Stack.Screen name="FAQFullView" options={{ headerShown: false }} />
                    <Stack.Screen name="Business" options = {{ headerShown: false }} />
                    <Stack.Screen name="Settings" options={{ headerShown: false }} />
                    <Stack.Screen name="News" options={{headerShown: false }} />
                </Stack>
            <NavBar />
        </>
    )
}