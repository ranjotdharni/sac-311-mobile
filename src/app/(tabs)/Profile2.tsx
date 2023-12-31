import { View, Text, StyleSheet, TextInput, SafeAreaView, Image, Pressable} from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Profile2() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    //pressing login button automatically proceeds to profile page
    const tempLoginPress = () => {
      (navigation.navigate as (screen: string) => void)('Profile3');
    };

    const accountCreationPress = () => {
      (navigation.navigate as (screen: string) => void)('Profile0');
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Image source={require('src/assets/png/logo.png')} style={{ resizeMode: 'contain', width: '80%', marginTop: -100 }} />
        <Text style={{ fontSize: 16 }}>Log in to view your profile information.</Text>
        <TextInput
          style={styles.input}
          placeholder='Username'
          onChangeText={(val) => setUsername(val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          onChangeText={(val) => setPassword(val)}
        />
        <Pressable style={styles.button} onPress = {tempLoginPress}>
          <Text style={{ color: '#ffffff', textAlign: 'center' }}>Log In</Text>
        </Pressable>
        <Text style={{ marginTop: 20 }}>Forgot your password?</Text>
        <Pressable>
          <Text style={{ color: '#2069bd' }}>Click here.</Text>
        </Pressable>
        <Pressable style={{ ...styles.button, marginTop: 0 }} onPress={accountCreationPress}>
          <Text style={{ color: '#ffffff', textAlign: 'center' }}>Create an Account</Text>
        </Pressable>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    input: {
      padding: 22,
      textAlign: "center",
      width: '80%',
      borderWidth: 0.5,
      borderRadius: 50,
      backgroundColor: '#dfe6f0'
    },
    button: {
      padding: 22,
      textAlign: "center",
      width: '80%',
      borderRadius: 50,
      backgroundColor: '#1b3763',
      color: '#ffffff'
    }
  });  