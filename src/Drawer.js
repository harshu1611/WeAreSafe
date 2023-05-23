import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login'
import UserLogin from './UserLogin';
import MonitorLogin from './MonitorLogin';
import UserDashboard from './UserDashboard';

const Drawer1 = createDrawerNavigator();

const Drawer=()=>{
    return (
        <Drawer1.Navigator initialRouteName="Home">
    
        <Drawer1.Screen name="Login" component={Login} options={{drawerItemStyle: {height:0}}}/>
        <Drawer1.Screen name="UserLogin" component={UserLogin} options={{drawerItemStyle: {height:0}}}/>
        <Drawer1.Screen name="MonitorLogin" component={MonitorLogin} options={{drawerItemStyle: {height:0}}}/>
        <Drawer1.Screen name="UserDashboard" component={UserDashboard} options={{drawerItemStyle: {height:0}}}/>



        

    

      </Drawer1.Navigator>
    )
}

export default Drawer;