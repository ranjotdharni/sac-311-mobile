import { Text } from "react-native"
import { useFonts } from "expo-font"
import { globalFont } from "../../customs"

//                              //      
//      TO ADD MORE FONTS       //
//                              //
//      Update includedFonts    //
//      AND fontsLoaded below   //
//                              //

//                                  Component Props                                     //
//======================================================================================//
//      text: what the text should say                                                  //
//      style: custom style prop to be applied to inner Text component                  //
//      font: one of the fonts included in this component, see includedFonts below      //
//      nol: number of lines to display, set to 0 to disable or as default behavior     //


let includedFonts: "JBM" | "JBM-B"


export default function CustomText({ text, style, font, nol } : { text: string, style: any, font:typeof globalFont.chosenFont, nol: number }) {
    let [fontsLoaded] = useFonts({
        'JBM': require('../../assets/fonts/JBM.ttf'),
        'JBM-B': require('../../assets/fonts/JBM-B.ttf'),
        'opendyslexic': require('../../assets/fonts/opendyslexic.ttf')
    })

    return (
        (
            fontsLoaded ? 
            <Text numberOfLines={nol} style={[ style, { fontFamily: font }]}>{text}</Text> :    //nol can be set to 0 to disable numberOfLines
            <></>
        )
    )
}