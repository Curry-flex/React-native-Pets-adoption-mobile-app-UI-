import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator, useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer'
import Home from './Home'
import Colors from '../color/color'
import CustomerDrawer from './CustomerDrawerContent'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Animated from 'react-native-reanimated'

const Drawer = createDrawerNavigator()
export default function DrawerNavigator() {
 

    const DrawerScreenContainer=({children})=>{
        const isDrawerOpen = useDrawerStatus()
        const progress = useDrawerProgress()
        const scale = Animated.interpolate(progress, {
         inputRange: [0, 1],
         outputRange: [1, 0.8],
       });
       const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 25],
      });
       
        return(
            <Animated.View style={{backgroundColor:Colors.white,flex:1,transform:[{scale}],overflow:"hidden",borderRadius}}>
                <StatusBar barStyle="dark-content" backgroundColor={isDrawerOpen =="open" ? Colors.primary: Colors.white}/>
                {children}
                </Animated.View>
        )
    }
  return (
    <Drawer.Navigator
     screenOptions={{
         headerShown:false,
         drawerType:"slide",
         drawerStyle:{
             width:200,
             backgroundColor:Colors.primary
         },
         overlayColor:null,
         sceneContainerStyle:{
             backgroundColor:Colors.primary
         },
         drawerActiveTintColor:Colors.white,
         drawerInactiveTintColor:Colors.secondary,
         drawerItemStyle:{backgroundColor:null},
         drawerLabelStyle:{
             fontWeight:"bold"
         }
     }}

     drawerContent={props =><CustomerDrawer {...props}/> }
    >
        <Drawer.Screen 
         name="home"
         options={{
             title:"ADOPTION",
             drawerIcon:()=> <Icon name="paw" size={25}style={{marginRight:-20}}/>
         }}
        >
            {props=> <DrawerScreenContainer>
                  <Home {...props}/>
                </DrawerScreenContainer>}
        </Drawer.Screen>

        <Drawer.Screen 
         name="DONATION"
         options={{
          
             drawerIcon:()=> <Icon name="gift" size={25}style={{marginRight:-20}}/>
         }}
        >
            {props=> <DrawerScreenContainer>
                  <Home {...props}/>
                </DrawerScreenContainer>}
        </Drawer.Screen>

        <Drawer.Screen 
         name="ADD PET"
         options={{
             
             drawerIcon:()=> <Icon name="plus-box" size={25}style={{marginRight:-20}}/>
         }}
        >
            {props=> <DrawerScreenContainer>
                  <Home {...props}/>
                </DrawerScreenContainer>}
        </Drawer.Screen>

        <Drawer.Screen 
         name="FAVORITES"
         options={{
             
             drawerIcon:()=> <Icon name="heart" size={25}style={{marginRight:-20}}/>
         }}
        >
            {props=> <DrawerScreenContainer>
                  <Home {...props}/>
                </DrawerScreenContainer>}
        </Drawer.Screen>

        <Drawer.Screen 
         name="PROFILE"
         options={{
             
             drawerIcon:()=> <Icon name="account" size={25}style={{marginRight:-20}}/>
         }}
        >
            {props=> <DrawerScreenContainer>
                  <Home {...props}/>
                </DrawerScreenContainer>}
        </Drawer.Screen>


        

    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})