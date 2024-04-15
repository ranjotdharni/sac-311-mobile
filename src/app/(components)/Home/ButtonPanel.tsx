import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Dimensions, TouchableOpacity, Linking, Text, Image} from "react-native";
import { global, shadowUniversal } from "../../../customs";
import { globalFont } from "../../../customs";
import { fontGetter } from "../../../customs";
import CustomText  from "../CustomText";
import { router } from "expo-router";
import { globalColorTheme } from '../../../customs';

// Extending the component's props to include 'style'
type ButtonProps = {
    testID: string;
    text: string;
    logo: string;
    path: string;
    style?: object | object[];
};

function Button({testID, text, logo, path, style }: ButtonProps) {
    return (
        <TouchableOpacity testID={testID} onPress={() => { (router.push as any)({ pathname: path }) }} style={[{width: '30%', aspectRatio: 1 / 1, backgroundColor: globalColorTheme.backgroundColor, borderRadius: 10, justifyContent: 'center', alignItems: 'center',}, style]}>
            <FontAwesome name={logo as any} size={Dimensions.get('screen').width * 0.15} color={globalColorTheme.blue} />
            <CustomText nol={0} font={fontGetter()} style={{color: globalColorTheme.blue, fontSize: Dimensions.get('screen').width * 0.045, fontFamily: globalFont.chosenFont}} text={text} />
        </TouchableOpacity>
    );
}

export default function ButtonPanel() {
    return (
        <View style={{backgroundColor: globalColorTheme.backgroundColor, width: Dimensions.get('screen').width, height: Dimensions.get('screen').height * 0.22}}>
            <CustomText nol={0} font={fontGetter()} text='Are You A...' style={{color: globalColorTheme.blue, alignSelf: 'flex-start', fontSize: 25, fontFamily: globalFont.chosenFont, fontWeight: 'bold', paddingTop: '2%', paddingLeft: '3%',}} />
            
            <View style={{width: '100%', height: '85%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', position: 'relative', top: '-2.5%',}}>
                <Button testID="homeBtn" text='Resident' logo='home' path="/(tabs)/ResidentTab" style={{shadowColor: globalColorTheme.color, shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.33, shadowRadius: 10, elevation: 5}}/>
                <Button testID="visBtn" text='Visitor' logo='location-arrow' path="/(tabs)/VisitorTab" style={{shadowColor: globalColorTheme.color, shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.33, shadowRadius: 10, elevation: 5}}/>
                <Button testID="bizBtn" text='Business' logo='suitcase'  path="/(tabs)/BusinessTab" style={{shadowColor: globalColorTheme.color, shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.33, shadowRadius: 10, elevation: 5}}/>
            </View>
        </View>
    )
}


