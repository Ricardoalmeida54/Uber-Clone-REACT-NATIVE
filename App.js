
import React, {useState,useEffect,useRef} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Checkout, Tracking} from './views';

const Stack = createStackNavigator();

export default function App() {
return (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name="Checkout" component={Checkout} options={{headerShown:false}}></Stack.Screen>
    <Stack.Screen name="Tracking" component={Tracking} options={{headerShown:false}} />
  </Stack.Navigator>
</NavigationContainer>
);
  
}