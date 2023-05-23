import { View, Text, Pressable } from 'react-native'
import React from 'react'

import {DrawerContentScrollView,DrawerItemList, DrawerItem, Icon} from '@react-navigation/drawer'
import { deviceHeight } from './Dimensions'

const CustomDrawer=(props)=>{
    return(
        
            <View style={{backgroundColor:'#f4c2c2', height:deviceHeight}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{height:deviceHeight, color:'red'}} >
                <View>
                    <Text style={{color:'#ab1844', fontWeight: 'bold', fontSize:30, paddingLeft:15, paddingTop:15, textDecorationLine:'underline'}}>Smriti Gupta</Text>
                </View>
                <View style={{}}>
                    <Pressable style={{ borderColor:'#ab1844', borderRadius:10, paddingLeft:50, marginLeft:30, marginTop:20, width:180}} onPress={()=>props.navigation.navigate("UserDashboard")}>
                        <Text style={{color:'#ab1844', fontSize:30, fontFamily:'Helvetica Neue',textAlign:'left'}}>Home</Text>
                    </Pressable>
                    <Pressable style={{ borderColor:'#ab1844', borderRadius:10,
                     marginRight:30, marginLeft:30, marginTop:20, height:40, width:230, alignContent:'center'}} onPress={()=>props.navigation.navigate("Schedule")}>
                        <Text style={{color:'#ab1844', fontSize:30}}>My Schedule</Text>
                    </Pressable>
                    <Pressable style={{ borderColor:'#ab1844', borderRadius:10, marginLeft:30, marginTop:20}} onPress={()=>props.navigation.navigate("CloseAides")}>
                        <Text style={{color:'#ab1844',  fontSize:30}}>Close Aides</Text>
                    </Pressable>
                    <Pressable style={{ borderColor:'#ab1844', borderRadius:10, width:158, marginLeft:30, marginTop:20}} onPress={()=>props.navigation.navigate("MapPoints")}>
                        <Text style={{color:'#ab1844',  fontSize:30, alignSelf:'center'}}>Map Points</Text>
                    </Pressable>
                    <Pressable style={{ borderColor:'#ab1844', borderRadius:10, width:158, marginLeft:30, marginTop:20}} onPress={()=>props.navigation.navigate("SOS")}>
                        <Text style={{color:'#ab1844', fontSize:30, textAlign:'center'}}>SOS</Text>
                    </Pressable>
                </View>
                <Pressable style={{borderColor:'#ab1844', borderWidth:2, height:30, width:200, borderRadius:12, alignContent:'center', marginTop:80, marginLeft:30}} onPress={()=>props.navigation.navigate("UserLogin")}>
            <Text style={{color:"#ab1844", textAlign:'center', fontWeight:'bold'}}>Log Out</Text>
            </Pressable>
            


            </DrawerContentScrollView>
            </View>
        
    )
}

export default CustomDrawer;