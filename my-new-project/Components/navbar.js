import React from 'react';
import {SearchBar} from 'react-native-elements'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'



export default function Navbar() {
  
  
  


  return (
    <View >
     <View style = {styles.container}>
     <View><Octicons  name="three-bars" size={35} color="white"/></View>
     <Text style = {{fontSize:20 , fontWeight:'bold',color:'white'}}>zameen.com</Text>
     <View><Ionicons  name="md-search" size={35} color="white"/></View>
     
     </View>
     <View style = {styles.HeaderButton}>
      <View style = {styles.button}>
      <Text> Buy </Text>
      </View>
      <View style = {styles.button}>
      <Text> Rent </Text>
      </View>
      <View>
        {/* <SearchBar
        placeholder = 'type Here'
        /> */}
      </View>
      

     </View>

    </View>
  
     
    
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#228B22",
    padding:10,
    paddingTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
    
  
   },
   HeaderButton:{
     justifyContent:'center',
     backgroundColor:"#228B22",
     height:140,
     flexDirection:'row',
     alignItems:'center'
     },
  button:{
    color:"#268c77",
    padding:10,
    backgroundColor:'white',
    width:70,
    borderWidth:0.2,
    
     height:40,
     borderRadius:3
    },
   
});

