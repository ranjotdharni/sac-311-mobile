import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { global } from "../../../customs";
import React, { useState } from 'react';

const YourRequests: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLoginPress = () => {
        // placeholder for login logic
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log in to view your requests</Text>
            
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
            />
            
            <TouchableOpacity onPress={() => console.log('Forgot password pressed')}>
                <Text style={styles.forgotPassword}>Forgot your password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                onPress={handleLoginPress}
                style={styles.loginButton}
                activeOpacity={0.7} //changes button opacity when pressed
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    forgotPassword: {
        color: global.baseBlue100,
        marginBottom: 20,
        textDecorationLine: 'underline',
    },
    loginButton: {
        backgroundColor: global.baseBlue100,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
      },
});

export default YourRequests;