import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import NavItem from "./NavItem";


export default function NavBar()
{
    return (
        <View style={styles.NavContainer}>
            <View style={styles.NavBox}>
                <NavItem active={false} title='home' iconName='home' url='/(tabs)/Home' />
                <Link href='/(tabs)/Explore' >Explore</Link>

                <Link href='/(request)/Type'>New</Link>

                <Link href='/(tabs)/Resources' >Resources</Link>
                <Link href='/(tabs)/Profile' >Profile</Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    NavContainer: {
        position: 'absolute',
        width: '100%',
        height: '7.5%',
        alignItems: 'center',
        bottom: 20
    },

    NavBox: {
        flexDirection: 'row',
        backgroundColor: '#6f6f6f',
        height: '100%',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 25
    },
})