import { MaterialIcons } from "@expo/vector-icons"
import { Href, Link, LinkProps } from "expo-router"
import { View, Text } from "react-native"

export default function NavItem({ title, iconName, active, url } : { title: string, iconName: keyof typeof MaterialIcons.glyphMap, active: boolean, url: Href<string> })
{
    return (
        <View>
            <MaterialIcons name={iconName} />
            <Link href={url} />
            <Text>{title}</Text>
        </View>
    )
}