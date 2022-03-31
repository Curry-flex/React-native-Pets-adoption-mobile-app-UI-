import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomerDrawer(props) {
  return (
    <DrawerContentScrollView
    style={ {paddingVertical:30}}
    >
      <View style={{marginLeft:20,marginVertical:40}}>
        <Image 
         source={require('../assets/person.jpg')}
         style={{
           height:70,
           width:70,
           borderRadius:10
         }}
        />
        <Text style={{color:"white",fontSize:13,fontWeight:"bold",marginTop:10}}>CurryFlex</Text>
      </View>   
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({})