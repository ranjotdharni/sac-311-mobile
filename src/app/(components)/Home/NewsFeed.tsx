import { View, StyleSheet, Text, Dimensions } from "react-native";


export default function NewsFeed() {
    return (
        <View style={styles.NewsFeedWrapper}>
            <Text>This is the newsfeed</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    NewsFeedWrapper: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.2,
        backgroundColor: 'violet',
    }
})