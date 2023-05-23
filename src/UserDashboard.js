import { View, Text, Button} from 'react-native'
import React from 'react'

export default function UserDashboard(props) {
  return (
    <View style={{backgroundColor:'white'}}>
      
      <Button title="Open drawer" onPress={()=>props.navigation.openDrawer()} ></Button>
    </View>
  )
}