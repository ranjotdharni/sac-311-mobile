import { Stack } from "expo-router";
import NavBar from "../(components)/NavBar";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native"


export default function Layout()
{
    return (
        <>
            <StatusBar style='dark' />
                <Stack>
                    <Stack.Screen name="WhatsNew" options={{ headerShown: false }} />  
                </Stack>
            <NavBar />
        </>
    )
}