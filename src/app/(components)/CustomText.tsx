import { Text } from "react-native"
import { useFonts } from "expo-font"

export default function CustomText({ text, style, bold, nol } : { text: string, style: any, bold: boolean, nol: number }) {
    let [fontsLoaded] = useFonts({
        'JBM': require('../../assets/fonts/JBM.ttf'),
        'JBM-B': require('../../assets/fonts/JBM-B.ttf')
    })

    return (
        (
            fontsLoaded ? 
            <Text numberOfLines={nol} style={[ style, { fontFamily: (bold ? 'JBM-B' : 'JBM') }]}>{text}</Text> :
            <></>
        )
    )
}