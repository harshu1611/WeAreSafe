import { View, Text, Button, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { deviceHeight, deviceWidth } from './Dimensions'
import babelConfig from '../babel.config'



export default function UserDashboard(props) {
  return (
    <View style={{backgroundColor:'white', height:deviceHeight, width:deviceWidth}}>
        <View style={{flexDirection:'row', backgroundColor:'#ffc0cb', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
        <Icon name="menu" size={40} color="#ab1844"></Icon>
      </TouchableOpacity>
      <Text style={{color:'#ab1844', fontFamily:'roboto', fontSize: 30, marginLeft:100, fontWeight:'bold'}}>Hey, Smriti!</Text>
      <Image source={require('../assets/images/logoNoName.png')} style={{height:60, width: 60, marginLeft:40}}/>
        </View>
        <Text style={{color:'#ab1844', fontWeight:'bold', fontSize:40, marginTop:20,  marginLeft:20}}>My Health Data : </Text>
        <Image source={require('../assets/images/health.png')} style={{height:400, width:400}}/>
        <View>
            <Text style={{textAlign:'center', color:'#ab1844', fontSize:30}}>Connect Health Apps</Text>
            <View style={{flexDirection:'row', marginLeft:35, marginTop:20}}>
            <Image source={require('../assets/images/google.png')} style={{height:70, width:70, marginRight:40}}/>
            <Image source={require('../assets/images/samsung.png')} style={{height:70, width:70}}/>
            <Image source={require('../assets/images/2.png')} style={{height:95, width:95, marginLeft:40}}/>
            </View>
            
        </View>
    </View>
  )
}