import { MaterialIcons } from "@expo/vector-icons"
<<<<<<< Updated upstream
import { Href, useNavigation, router } from "expo-router"
=======
import { Href, useNavigation } from "expo-router"
>>>>>>> Stashed changes
import { View, StyleSheet, Pressable } from "react-native"
import { global } from "../../customs"
import CustomText from "./CustomText"
import { Link } from "expo-router"
import { fontGetter } from "../../customs";
import { globalFont } from '../../customs';

export default function NavItem({ id, title, iconName, active, url, passUp, navigation } : { id: number, title: string | undefined, iconName: keyof typeof MaterialIcons.glyphMap, active: (arg1: number) => boolean, url: Href<string>, passUp: (arg1: number) => void, navigation: any })
{
    const navigateTo = (to: Href<string>) => {
        (navigation.navigate as (screen: Href<string>) => void)(to);
<<<<<<< Updated upstream
        //nav.navigate("Explore", { screen: "NavItem" })
=======
>>>>>>> Stashed changes
    };
    
    return (
        <Pressable onPress={() => { navigateTo(url); passUp(id) }} style={styles.NavItemWrapper}>
            <View style={styles.NavPress}>
                <MaterialIcons style={styles.NavIcon} name={iconName} color={(active(id) ? global.baseBackground100 : global.baseGrey100)} size={25} />
                <CustomText font={fontGetter()} nol={0} text={title!} style={{fontSize: 10, color: (active(id) ? global.baseBackground100 : global.baseGrey100)}} />
            </View>
        </Pressable>
    )
}

<<<<<<< Updated upstream
//artifact: <Pressable onPress={() => { navigateTo(url); passUp(id) }} style={styles.NavItemWrapper}>
=======
//artifact: <Link href={url} onPressOut={ () => { passUp(id) } } style={{width: '100%', height: '100%', zIndex: 2}} />
>>>>>>> Stashed changes

const styles = StyleSheet.create({
    NavItemWrapper : {
        width: '18%',
        height: '100%',
    },

    NavPress : {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    NavIcon : {
        position: 'relative',
    },

    NavIconText : {
        fontSize: 10,
        position: 'relative',
        fontFamily: globalFont.chosenFont,
    }
});