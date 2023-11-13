import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './(tabs)/Profile';
import Profile2 from './(tabs)/Profile2';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Profile2" component={Profile2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}