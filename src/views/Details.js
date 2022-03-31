import { ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../color/color'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { NavigationContainer } from '@react-navigation/native'

export default function Details({route,navigation}) {
  const pet =route.params
  
  return (
   <SafeAreaView style={{flex:1,backgroundColor:Colors.white}}>
     <StatusBar  backgroundColor={Colors.background}/>
    <ScrollView showsVerticalScrollIndicator={false}>

    <View
     style={{
       height:400,
       backgroundColor:Colors.background
     }}
     >
      <ImageBackground  
       source={pet.image}
       resizeMode="contain"
       style={{ height:280,top:20}}
      >
        <View style={styles.header}>
          <Icon name="arrow-left" size={28} color="black" onPress={()=>navigation.goBack()}/>
          <Icon name="dots-vertical" size={28} color="black" onPress={()=>navigation.goBack()}/>
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
         <View>
         <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>{pet.name}</Text>
         <Text style={{color:"black" ,fontSize:12,marginTop:5,fontWeight:"500"}}>{pet.age}</Text>
         </View>

          <View>
           <Icon  name="gender-male" size={25} color="black"/>
           <Text style={{color:"black" ,fontSize:12,marginTop:5,fontWeight:"500"}}>{pet.age}</Text>
         </View>

        </View>

        <View 
        style={{flexDirection:"row",marginTop:5}}
        >
         <Icon name="map-marker" size={25} color={Colors.primary} />
         <Text style={{color:"black" ,fontSize:12,marginTop:5,fontWeight:"500",marginLeft:5}}>Distance 10km</Text>
        </View>

      </View>
     </View>

     <View
     style={{
       marginTop:80,
       justifyContent:"space-between",
       flex:1
     }}
     >
     <View style={{flexDirection:"row",paddingHorizontal:20,justifyContent:"space-between"}}>

           <Image 
           source={require("../assets/person.jpg")}
           style={{
             height:50,
             width:50,
             borderRadius:50
           }}
           />
           <View style={{flex:1,paddingLeft:10,height:30}}>
           <Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>CurryFlex</Text>
           <Text style={{color:"black",fontSize:11,fontWeight:"bold"}}>Owner</Text>
           </View>

           <View>
             <Text style={{color:"black",fontSize:16,fontWeight:"500"}}> March 10, 2022</Text>
           </View>
         
        
       </View>

         <Text style={styles.comment}>
          I am foregin worker so every time i spend my time out side of Tanzania i want to give
          this pet to someone who can take care of this cat 
         </Text>

     </View>

     <View
     style={{
       height:100,
       backgroundColor:Colors.light,
       marginTop:10,
       borderRadius:10,
       marginHorizontal:20,
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
     }}
     >
       <View style={{
         width:60,
         height:60,
         backgroundColor:Colors.primary,
         marginLeft:20,
         borderRadius:10,
         alignItems:"center",
         justifyContent:"center"
       }}>
          <Icon name="heart" size={30} color={"white"} />
       </View>

       <View>
         <TouchableOpacity
         style={styles.adoptButton}
         >
           <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>ADOPTON</Text>
         </TouchableOpacity>
       </View>

     </View>

    </ScrollView>
  
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent:"space-between",
    padding:20
  },
  detailsContainer: {
    height:120,
    flex:1,
    backgroundColor:Colors.white,
    padding:20,
    marginHorizontal:20,
    borderRadius:15,
    bottom:-30,
    elevation:10
  },
  comment:{
    marginTop:10,
    fontSize:12.5,
    color:Colors.dark,
    lineHeight:20,
    marginHorizontal:20,
    fontWeight:"500"
  },
  adoptButton:{
    width:250,
    height:60,
    backgroundColor:Colors.primary,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
  }
})