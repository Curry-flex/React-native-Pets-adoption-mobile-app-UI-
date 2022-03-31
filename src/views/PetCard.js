import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import Colors from '../color/color'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

export default function PetCard({pet,navigation}) {
  return (
    <TouchableOpacity activeOpacity={0.6}
    onPress={() => navigation.navigate("details",pet)}
    >
    <View style={styles.container}>
     <View style={styles.imageContainer}>
     <Image 
      source={pet.image}
      style={{
          width:"100%",
          height:"100%",
          resizeMode:"contain"
      }}
     />
     </View>
     <View  style={styles.detailsContainer}>
       <View style={{flexDirection:"row" ,justifyContent:"space-between"}}>
         <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>{pet.name}</Text>
         <Icon name="gender-male" size={22} color={Colors.grey} />
       </View>
       <Text style={{color:"black" ,fontSize:12,marginTop:5,fontWeight:"500"}}>{pet.type}</Text>
       <Text style={{color:"black" ,fontSize:12,marginTop:5,fontWeight:"500"}}>{pet.age}</Text>
        <View 
        style={{flexDirection:"row",marginTop:5}}
        >
         <Icon name="map-marker" size={20} color={Colors.primary} />
         <Text style={{color:"black" ,fontSize:12,marginTop:5,fontWeight:"500",marginLeft:5}}>Distance 10km</Text>
        </View>
     </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
       flexDirection:"row",
       marginBottom:20,
       alignItems:"center" 
    },
    imageContainer:{
        height:150,
        width:150,
        backgroundColor:Colors.background,
        borderRadius:20
    },
    detailsContainer:{
        backgroundColor:Colors.white,
        height:120,
        flex:1,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        padding:20,
        justifyContent:"center"
    }
})