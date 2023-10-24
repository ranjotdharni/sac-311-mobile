import { Stack } from "expo-router";


export default function Layout()
{
    return (
        <Stack>
            <Stack.Screen name="Type" options = {{ headerShown: false, presentation: 'modal' }} />
            <Stack.Screen name="Location" options = {{ headerShown: false, presentation: 'modal' }} />
            <Stack.Screen name="Confirm" options = {{ headerShown: false, presentation: 'modal' }} />
        </Stack>
    )
}