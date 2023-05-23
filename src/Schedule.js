import { View, Text, Button, TouchableOpacity, Image, TextInput, Pressable, Alert} from 'react-native'
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
    <View style={{position:'absolute', alignSelf:'center'}}>
    <TextInput onChangeText={()=>{}}  placeholder="From Place" placeholderTextColor={'#ab1844'} style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:100, paddingLeft:20}}/>
    <TextInput onChangeText={()=>{}}  placeholder="To Place" placeholderTextColor={'#ab1844'} style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:20, paddingLeft:20}}/>
    <TextInput onChangeText={()=>{}}  placeholder="Time" placeholderTextColor={'#ab1844'} style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:20, paddingLeft:20}}/>
    <TextInput onChangeText={()=>{}}  placeholder="Date (DD/MM/YYYY)" placeholderTextColor={'#ab1844'} keyboardType='Date' style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:20, paddingLeft:20}}/>
    <TextInput onChangeText={()=>{}}  placeholder="With/Companion" placeholderTextColor={'#ab1844'}  style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:20, paddingLeft:20}}/>
    </View>
    <View style={{position:'absolute', alignSelf:'center'}}>
        <Pressable style={{borderColor:'#ab1844', borderWidth:2, height:30, width:200, marginTop:450, borderRadius:12}} onPress={()=>Alert.alert("Schedule Posted")}>
            <Text style={{color:"#ab1844", textAlign:'center', fontWeight:'bold'}}>Post Schedule</Text>
        </Pressable>
        <Pressable style={{borderColor:'#ab1844', borderWidth:2, height:30, width:200, marginTop:530, borderRadius:12}} onPress={()=>Alert.alert("Schedule Posted")}>
            <Text style={{color:"#ab1844", textAlign:'center', fontWeight:'bold'}}>Post Schedule</Text>
        </Pressable>
    </View>
        



    </View>
  )
}