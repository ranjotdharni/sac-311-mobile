import { Text, View, StyleSheet, Dimensions, Animated, TouchableOpacity } from "react-native";
import { dummyDataHome, generateEndpointUrl, responseType } from "../../../customs";
import Request from "../Request";
import { global } from "../../../customs";
import { useEffect, useState } from "react";
import { globalFont } from "../../../customs";
import RequestList from "./RequestList";
import YourRequests from "./YourRequests";
import Geolocation from "../../(tabs)/Geolocation";

/* TODO
    - 
*/

const underlinePosition = new Animated.Value(Dimensions.get('screen').width * 0.125); // controls the position of the yellow line
const underlineWidthAnimated = new Animated.Value(Dimensions.get('screen').width * 0.25); // initial width for "Near You"

export const TabsComponent: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<'Near You' | 'Your Requests'>('Near You');

    //animation logic here
    const animateUnderline = (position: number, width: number): void => {
        Animated.parallel([
            Animated.timing(underlinePosition, {
                toValue: position,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(underlineWidthAnimated, {
                toValue: width,
                duration: 300,
                useNativeDriver: false,
            })
        ]).start();
    };

    const onTabPress = (tab: 'Near You' | 'Your Requests'): void => {
        setSelectedTab(tab);
        const position = tab === 'Near You' 
            ? (Dimensions.get('screen').width * 0.125)  // x position of line under near you
            : (Dimensions.get('screen').width / 1.77);   // x position of line under your requests
        const width = tab === 'Near You' 
            ? (Dimensions.get('screen').width * 0.25)   // width of line under near you
            : (Dimensions.get('screen').width * 0.37);  // width of line under your requests
        animateUnderline(position, width);
    };

    return (
        <View style={styles.container}>
            <View style={styles.tabsContainer}>
                {/* Tab "Nearby" */}
                <TouchableOpacity style={styles.tabButton} onPress={() => onTabPress('Near You')}>
                    <Text style={styles.tabText}>Near You</Text>
                </TouchableOpacity>

                {/* Vertical Separator Line */}
                <View style={styles.separator} />

                {/* Tab "Your Requests" */}
                <TouchableOpacity style={styles.tabButton} onPress={() => onTabPress('Your Requests')}>
                    <Text style={styles.tabText}>Your Requests</Text>
                </TouchableOpacity>
            </View>
    
            {/* animated line underneath selected tab with dynamic length */}
            <Animated.View
                style={[styles.underlineStyle,{ 
                        transform: [{ translateX: underlinePosition }],
                        width: underlineWidthAnimated, // Use the animated width here
                    },
                ]}
            />

            {/* Content based on selected tab */}
            <View style={styles.contentContainer}>
                {selectedTab === 'Near You' ? (
                    <Geolocation />/* REPLACE WITH GEOLOCATION SERVICES */
                ) : (
                    <View>
                        <YourRequests />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    tabsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center', // Ensure vertical alignment is centered
    },
    tabButton: {
        flex: 1, // Each button takes up half of the container
        justifyContent: 'center',
        alignItems: 'center', // Center the text within the button
    },
    tabText: {
        color: global.baseBlue100,
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        height: '100%', // Vertical line height
        width: 2,
        backgroundColor: 'gray',
        opacity: 0.5,
    },
    underlineStyle: {
        height: 3,
        //width: nderlineWidthAnimated,
        backgroundColor: global.baseGold100,
        marginTop: 2,
    },
    contentContainer: {
        
    },
});

export default TabsComponent;