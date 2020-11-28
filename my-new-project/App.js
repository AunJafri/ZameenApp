import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Navbar from './Components/navbar';





export default function App() {
  
  


  return (
    <View style={styles.container}>
     
     <Navbar/>
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  paddingTop:23

  },
});
