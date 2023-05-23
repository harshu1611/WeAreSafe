import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './Login'
import UserLogin from './UserLogin';
import MonitorLogin from './MonitorLogin';
import UserDashboard from './UserDashboard';
import CustomDrawer from './CustomDrawer';
import Schedule from './Schedule';
import CloseAides from './CloseAides';
import MapPoints from './MapPoints';
import SOS from './SOS';

const Drawer1 = createDrawerNavigator();

const Drawer=()=>{
    return (
        <Drawer1.Navigator initialRouteName="Home" screenOptions={{headerShown:false, drawerItemStyle:{color:'white'}}} drawerStyle={{backgroundColor: 'red'}} drawerContent={props=><CustomDrawer{...props}/>}>
    
        <Drawer1.Screen name="Login" component={Login} options={{drawerItemStyle: {height:0}, headerShown:false}}
        />
        <Drawer1.Screen name="UserLogin" component={UserLogin} options={{drawerItemStyle: {height:0},headerShown:false}}/>
        <Drawer1.Screen name="MonitorLogin" component={MonitorLogin} options={{drawerItemStyle: {height:0},headerShown:false}}/>
        <Drawer1.Screen name="UserDashboard" component={UserDashboard} options={{drawerItemStyle: {height:0},headerShown:false}}/>
        <Drawer1.Screen name="Schedule" component={Schedule} options={{drawerItemStyle: {height:0},headerShown:false}}/>
        <Drawer1.Screen name="CloseAides" component={CloseAides}/>
        <Drawer1.Screen name="MapPoints" component={MapPoints}/>
        <Drawer1.Screen name="SOS" component={SOS}/>
        


        

    

      </Drawer1.Navigator>
    )
}

export default Drawer;