import { Dimensions, SafeAreaView, StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../color/color'
const {height} = Dimensions.get("window")
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { TextInput } from 'react-native-paper'
import pets from '../Data/pets'
import PetCard from './PetCard'

const petCategories = [
  {name: 'CATS', icon: 'cat'},
  {name: 'DOGS', icon: 'dog'},
  {name: 'BIRDS', icon: 'ladybug'},
  {name: 'BUNNIES', icon: 'rabbit'},
];

export default function Home({navigation}) {
  const[selectCategoryindex,setSelectedCategoryindex] = useState(0)
  const [filteredPets,setFilteredPets] =useState([])

  const filterPets=(index)=>{
    const filteredPestFromArray =pets.filter((item) =>item?.pet.toUpperCase() === petCategories[index].name)[0].pets
    setFilteredPets(filteredPestFromArray)
  }

  useEffect(()=>{
    filterPets(0)
  },[])
  return (
    <SafeAreaView
    style={{flex:1 ,color:Colors.white}}
    >
    <View style={styles.header}>
      <Icon  name="sort-variant" size={28} color="black" onPress={navigation.toggleDrawer}/>
      <Text style={{color:Colors.primary,fontSize:16,fontWeight:"bold"}}>CurryFlex</Text>
      <Image 
       source={require("../assets/person.jpg")}
       style={{
         width:30,
         height:30,
         borderRadius:50
       }}
      />
    </View>

    <ScrollView showsVerticalScrollIndicator={false}>
       <View style={styles.container}>

        <View style={styles.searchView}>
         <Icon  name='magnify' size={24} color={Colors.grey}/>
         <TextInput
              placeholderTextColor={Colors.grey}
              placeholder="Search pet to adopt"
              style={{flex: 1,backgroundColor:Colors.white,height:50}}
            />
         <Icon name='sort-ascending' color={"black"} size={24}/>
        </View>

        <View style={{
          flexDirection:"row",
          justifyContent:"space-between",
          marginTop:20
        }}>
          {
            petCategories.map((cat,index)=>(
              <View>
                <View style={[selectCategoryindex == index ? styles.selectedCategory : styles.category]}>
                    <TouchableOpacity
                    onPress={()=>{
                      setSelectedCategoryindex(index)
                      filterPets(index)
                    }}
                    >
                    <Icon name={cat.icon} size={35} color={selectCategoryindex == index ? Colors.white : Colors.primary} />
                    </TouchableOpacity>
                 
                </View>

                <View style={{
                  marginTop:10,
                  alignItems:"center",
                  justifyContent:"center"
                }}>
                    <Text style={{
                  color:"black",
                  fontWeight:"bold"
                  }}>
                {cat.name}</Text>

                </View>
              
              </View>
            ))
          }

        </View>

       <View style={{marginTop:20}}>

       <FlatList 
        showsVerticalScrollIndicator={false}
        data={filteredPets}

        renderItem={({item})=><PetCard  pet={item} navigation={navigation}/>}
        />

       </View>

       </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  header:{
    padding:20,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  container:{
    backgroundColor:Colors.light,
    height:height,
    marginTop:20,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingHorizontal:20,
    paddingVertical:40
  },
  searchView:{
    height:50,
    backgroundColor:Colors.white,
    flexDirection:"row",
    alignItems:"center",
    paddingHorizontal:20,
    borderRadius:10,
   
  },

  selectedCategory:{
    backgroundColor:Colors.primary,
    color:"white",
    width:60,
    height:60,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center"
  },
  category:{
    backgroundColor:Colors.white ,
    width:60,
    height:60,
    justifyContent:"center",
    alignItems:"center"
  }
})