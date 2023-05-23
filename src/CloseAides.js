import { View, Text, Button, TouchableOpacity, Image, Pressable,Alert, TextInput} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { deviceHeight, deviceWidth } from './Dimensions'


export default function CloseAides(props) {
  return (
    <View>
     
     <View style={{backgroundColor:'white', height:deviceHeight, width:deviceWidth}}>
        <View style={{flexDirection:'row', backgroundColor:'#ffc0cb', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
        <Icon name="menu" size={40} color="#ab1844"></Icon>
      </TouchableOpacity>
      
      <Text style={{color:'#ab1844', fontFamily:'roboto', fontSize: 30, marginLeft:100, fontWeight:'bold',alignSelf:'center'}}>Edit Close Aides</Text>
      </View>
        </View>

        <View style={{position:'absolute', alignSelf:'center'}}>
        <Pressable style={{borderColor:'#ab1844', borderWidth:2, height:30, width:200, marginTop:60, borderRadius:12}} onPress={()=>{}}>
            <Text style={{color:"#ab1844", textAlign:'center', fontWeight:'bold'}}>View My Close Aides</Text>
        </Pressable>
        
    </View>
    <View style={{position:'absolute', alignSelf:'center'}}>
    <TextInput onChangeText={()=>{}}  placeholder="Name" placeholderTextColor={'#ab1844'} style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:120, paddingLeft:20}}/>
    <TextInput onChangeText={()=>{}}  placeholder="Contact No." keyboardType="numeric" placeholderTextColor={'#ab1844'} style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:20, paddingLeft:20}}/>
    <TextInput onChangeText={()=>{}}  placeholder="Address" editable multiline numberOfLines={3}placeholderTextColor={'#ab1844'} style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:20, paddingLeft:20}}/>
    <TextInput onChangeText={()=>{}}  placeholder="Email" placeholderTextColor={'#ab1844'} style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:20, paddingLeft:20}}/>
    </View>
    <View style={{position:'absolute', alignSelf:'center'}}>
        <Pressable style={{borderColor:'#ab1844', borderWidth:2, height:30, width:200, marginTop:400, borderRadius:12}} onPress={()=>Alert.alert("Close Aide Added Successfully")}>
            <Text style={{color:"#ab1844", textAlign:'center', fontWeight:'bold'}}>Add Contact</Text>
            </Pressable>
            </View>



    </View>
  )
}