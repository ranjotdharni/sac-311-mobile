import { MaterialIcons } from "@expo/vector-icons"
import { Href, Link, LinkProps, Redirect, useRouter } from "expo-router"
import { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"

export default function NavItem({ id, title, iconName, active, url, passUp } : { id: number, title: string | undefined, iconName: keyof typeof MaterialIcons.glyphMap, active: boolean, url: Href<string>, passUp: (arg1: number) => void })
{
    return (
        <Pressable style={styles.NavItemWrapper}>
            <Link href={url} onPressOut={ () => { passUp(id) } } style={{width: '100%', height: '100%', zIndex: 2}} />
            <View style={styles.NavPress}>
                <MaterialIcons style={styles.NavIcon} name={iconName} color={(active ? global.baseGold100 : global.baseGrey100)} size={25} />
                <Text adjustsFontSizeToFit style={{fontSize: 10, color: (active ? global.baseGold100 : global.baseGrey100)}}>{title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    NavItemWrapper : {
        width: '15%',
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
    }
});