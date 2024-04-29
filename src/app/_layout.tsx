import { Stack } from "expo-router";
import TokenContext from "./(components)/context/TokenContext";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { global } from "../customs";

//SplashScreen.preventAutoHideAsync()

export default function Layout()
{
    const [loaded, error] = useFonts({
        'jbm': require('../assets/fonts/jbm.ttf'),
        'JBM-B': require('../assets/fonts/JBM-B.ttf'),
        'opendyslexic': require('../assets/fonts/opendyslexic.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if (loaded || error) {
          await SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
    return (
        loaded ?
        <TokenContext>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    <Stack.Screen name="(request)" options={{ headerShown: false, presentation: 'modal'}} />
                    <Stack.Screen name="(web)" options={{ headerShown: false, presentation: 'fullScreenModal'}} />
                    <Stack.Screen name="(requestview)" options={{ headerShown: false, presentation: 'fullScreenModal'}} />
                    <Stack.Screen name="(whatsnew)" options={{ headerShown: false, presentation: 'fullScreenModal'}} />
                </Stack>
        </TokenContext> :
        <View style={{width: '100%', height: '100%', backgroundColor: global.baseBlue100}}></View>
    )
}