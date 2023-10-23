import { Stack } from "expo-router";


export default function Layout()
{
    return (
        <Stack>
            <Stack.Screen name="Type" options = {{ headerShown: false }} />
            <Stack.Screen name="Location" options = {{ headerShown: false }} />
            <Stack.Screen name="Confirm" options = {{ headerShown: false }} />
        </Stack>
    )
}