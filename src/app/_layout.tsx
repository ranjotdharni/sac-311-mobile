import { Stack } from "expo-router";
import TokenContext from "./(components)/context/TokenContext";

export default function Layout()
{
    return (
        <TokenContext>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(request)" options={{ headerShown: false, presentation: 'modal'}} />
                <Stack.Screen name="(web)" options={{ headerShown: false, presentation: 'fullScreenModal'}} />
                <Stack.Screen name="(requestview)" options={{ headerShown: false, presentation: 'fullScreenModal'}} />
            </Stack>
        </TokenContext>
    )
}