import { View, Text, Button, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { deviceHeight, deviceWidth } from './Dimensions'


export default function Schedule(props) {
  return (
    <View>
        <View style={{backgroundColor:'white', height:deviceHeight, width:deviceWidth}}>
        <View style={{flexDirection:'row', backgroundColor:'#ffc0cb', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
        <Icon name="menu" size={40} color="#ab1844"></Icon>
      </TouchableOpacity>
      
      <Text style={{color:'#ab1844', fontFamily:'roboto', fontSize: 30, marginLeft:100, fontWeight:'bold',alignSelf:'center'}}>My Schedule</Text>
      </View>
        </View>




    </View>
  )
}