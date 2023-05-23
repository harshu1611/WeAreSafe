import { View, Text, Button, TouchableOpacity, Image, TextInput, Pressable} from 'react-native'
import {React,useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { deviceHeight, deviceWidth } from './Dimensions'




export default function MapPoints(props) {
    
  return (
    <View>
      <View style={{backgroundColor:'white', height:deviceHeight, width:deviceWidth}}>
        <View style={{flexDirection:'row', backgroundColor:'#ffc0cb', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
        <Icon name="menu" size={40} color="#ab1844"></Icon>
      </TouchableOpacity>
      
      <Text style={{color:'#ab1844', fontFamily:'roboto', fontSize: 30, marginLeft:100, fontWeight:'bold',alignSelf:'center'}}>Map Points</Text>
      </View>
        </View> 
        <View style={{position:'absolute', alignSelf:'center'}}>
        <TextInput onChangeText={()=>{}}  placeholder="Search Place" placeholderTextColor={'#ab1844'} style={{ backgroundColor:'white',paddingHorizontal:10,height:45, width:deviceWidth-70, alignSelf:'center', borderRadius:20, borderColor:'#ab1844', borderWidth:2, color:'#ab1844', fontWeight:'bold',marginTop:100, paddingLeft:20}}/>
        </View>
        <View style={{position:'absolute', flexDirection:'row', marginLeft:20}}>
        <Pressable style={{borderColor:'#ab1844', borderWidth:2, height:30, width:140, marginTop:170, borderRadius:12, marginRight:10, backgroundColor:"#ab1844"}} onPress={()=>Alert.alert("Schedule Posted")}>
            <Text style={{color:"white", textAlign:'center', fontWeight:'bold'}}>Police Station</Text>
        </Pressable>
        <Pressable style={{borderColor:'#ab1844', borderWidth:2, height:30, width:100, marginTop:170, borderRadius:12, marginRight:10,backgroundColor:"#ab1844"}} onPress={()=>Alert.alert("Schedule Posted")}>
            <Text style={{color:"white", textAlign:'center', fontWeight:'bold'}}>Hospitals</Text>
        </Pressable>
        <Pressable style={{borderColor:'#ab1844', borderWidth:2, height:30, width:100, marginTop:170, borderRadius:12, marginRight:10,backgroundColor:"#ab1844"}} onPress={()=>Alert.alert("Schedule Posted")}>
            <Text style={{color:"white", textAlign:'center', fontWeight:'bold'}}>Public Toilets</Text>
        </Pressable>
        </View>

        <Image source={require('../assets/images/map.jpeg')} style={{position:'absolute', height:300, width:400, marginTop:250, alignSelf:'center'}}/>
       

    </View>
  )
}