import { Link } from "expo-router";
import { View, StyleSheet, Animated, Easing, Dimensions } from "react-native";
import NavItem from "./NavItem";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { global } from "../../customs";
import { useNavigation } from "@react-navigation/native"

const screenWidth: number = Dimensions.get('screen').width
const initialOffset: number = screenWidth * 0.025
const offsetMultiplier: number = 0

export default function NavBar(this: any)
{
    let offsetLeft = useRef(new Animated.Value((0 * offsetMultiplier) + initialOffset)).current
    //Each NavItem 'id' attribute should be a unique value!!!
    const [activeTab, setActiveTab] = useState(0); //this useState hook should be set to the initial id of the tab to start off on
    const [navigation, setNavigation] = useState(useNavigation())

    function isActive( index : number ) : boolean {
        return activeTab === index
    }

    function swapTab(newTab : number) : void {
        setActiveTab(newTab)
    }

    useEffect(() => {
        let pos: number

        switch (activeTab) {
            case 0:
                pos = screenWidth * -0.0175
            break;
            case 1:
                pos = screenWidth * 0.164
            break;
            case 2:
                pos = screenWidth * 0.5
            break;
            case 3:
                pos = screenWidth * 0.682
            break;
            default:
                pos = 0
        }

        Animated.timing(offsetLeft, {
            toValue: pos + initialOffset,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start()
    }, [activeTab])

    return (
        <View style={styles.NavContainer}>
            <View style={styles.NavBox}>
                <Animated.View style={{borderRadius: 10, backgroundColor: global.baseGold100, position: 'absolute', height: '90%', aspectRatio: 1 / 1, transform: [{ translateX: offsetLeft }]}}></Animated.View>

                <NavItem navigation={navigation} id={0} active={isActive} passUp={swapTab} title='Home' iconName='home' url='/(tabs)/Home' />
                <NavItem navigation={navigation} id={1} active={isActive} passUp={swapTab} title='Explore' iconName='map' url='/(tabs)/Explore' />

                <View style={styles.NavCenterButton}>
                    <Link href='/(request)/Type' style={styles.NavCenterLink} />
                    <MaterialIcons color='#ffffff' name='add' size={35} />
                </View>

                <NavItem navigation={navigation} id={2} active={isActive} passUp={swapTab} title='Resources' iconName='bookmark' url='/(tabs)/Resources' />
                <NavItem navigation={navigation} id={3} active={isActive} passUp={swapTab} title='Profile' iconName='person' url='/(tabs)/Profile' />
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
        backgroundColor: 'white',
        height: '100%',
        width: '90%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: "#000000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.33,
        shadowRadius: 6,
        elevation: 5,
    },

    NavCenterButton: {
        width: '15%', 
        aspectRatio: 1 / 1,
        borderRadius: 28,
        backgroundColor: global.baseBlue100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    NavCenterLink: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2
    },
})