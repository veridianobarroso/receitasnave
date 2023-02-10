/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/** 
import React,{useState} from 'react';
import { TextInput, Alert, Button, Image, Text, View } from 'react-native';

export default function App(){
  const [texto, setTexto] = useState();
  return (
    
    <View> 
      <Text>Aula de Introdução</Text>
      
      <Image
       source={{uri:'https://www.ufac.br/nave/imagens/fixedheight.png/@@images/cc768d73-0491-4243-b578-7c7f23416e19.png'}}
       style={{width:400,height:200 }} />

      <TextInput onChangeText = {setTexto} value={texto}/>
      <Button title='Presssione' color='blue' onPress ={ ()=> Alert.alert(texto)} /> 
    </View>
      
      
  ); 
}
*/
/** 
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function App(){
  return (
    
    <ScrollView> 
      <Text style={{margin:100}}>teste1</Text>
      <Text style={{margin:100}}>teste2</Text>
      <Text style={{margin:100}}>teste3</Text>
      <Text style={{margin:100}}>teste4</Text>
    </ScrollView>
      
      
  ); 
}*/

/** 
import React, {Component,useState} from 'react';
import { View, Text, Image, TextInput,Button} from 'react-native';

export default function App(){
  return (
    
  <View> 
    <Text>TESTE</Text>
      <Nave/>
  </View>    
  ); 
}

class Nave extends Component{
  render(){
    return(
      <View>
      <Image
      source={{uri:'https://www.ufac.br/nave/imagens/logo.png/@@images/b79444d1-a803-4e49-b5da-98228cf1e2fd.png'}}
      style={{width:410,height:180 }} />

      <Text>NAVE</Text></View>)   
  }
}*/

import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  ViewInterna:{
    flex:1,
    backgroundColor: '#888',
    margin:10
  },
  ViewInterna2:{
    flex:1,
    backgroundColor: 'red',
    margin:10,
    flexDirection:'row'
  },
  ViewExterna:{
    flex:1,
    backgroundColor:'yellow'
  },
  ViewMaisInterna:{
    backgroundColor:'black',
    margin:10,
    height:'85%',
    width:'28%',
    borderRadius: 100,
  }
})

export default function App(){
  return (
  <View style={styles.ViewExterna}>
    <View style={styles.ViewInterna}></View>
    <View style={styles.ViewInterna}></View>
    <View style={styles.ViewInterna2}>
      <View style={styles.ViewMaisInterna}></View>
      <View style={styles.ViewMaisInterna}></View>
      <View style={styles.ViewMaisInterna}></View>
    </View>
    <View style={styles.ViewInterna}></View>
  </View>
  );
}