import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './(tabs)/Profile';
import Profile2 from './(tabs)/Profile2';
import Profile3 from './(tabs)/Profile3';
import Explore2 from './(request)/Explore2';
import RequestConfirm from './(request)/RequestConfirm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Profile2" component={Profile2} />
        <Stack.Screen name="Profile3" component={Profile3} />
        <Stack.Screen name="Explore2" component={Explore2} />
        <Stack.Screen name="RequestConfirm" component={RequestConfirm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}