import { View, Text, Button, TouchableOpacity, Image, Pressable} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { deviceHeight, deviceWidth } from './Dimensions'

export default function MonitorDashboard(props) {
  return (
    
      
      <View style={{backgroundColor:'white', height:deviceHeight, width:deviceWidth}}>
        <View style={{flexDirection:'row', backgroundColor:'#87CEEB', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{}}>
        <Icon name="menu" size={40} color="#000080"></Icon>
      </TouchableOpacity>
      <Text style={{color:'#000080', fontFamily:'roboto', fontSize: 30, marginLeft:100, fontWeight:'bold'}}>Hey Raj !</Text>
      <Image source={require('../assets/images/logoNoName.png')} style={{height:60, width: 60, marginLeft:40}}/>
        </View>
        <View style={{alignSelf:'center'}}>
        <Pressable style={{borderColor:'#000080', borderWidth:2, height:40, width:150, marginTop:50, borderRadius:12, marginRight:10, backgroundColor:"#000080"}} onPress={()=>Alert.alert("Schedule Posted")}>
            <Text style={{color:"white", textAlign:'center', fontWeight:'bold', fontSize:20}}>View My Users</Text>
        </Pressable>
        </View>
       

    </View>
  )
}