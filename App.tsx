import { View, Text, Image } from 'react-native'
import React from 'react'
import { deviceHeight } from './src/Dimensions'
import Login from './src/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLogin from './src/UserLogin';
import MonitorLogin from './src/MonitorLogin';
import UserDashboard from './src/UserDashboard';
import Drawer from './src/Drawer';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Drawer/>
    </NavigationContainer>
  )
}