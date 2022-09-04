import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity, TextInput} from 'react-native';
import React, { useState } from "react";

import Expense from './Icons/Expense.png';


export default function expense({text , onPress }) { 

  
    return (
      <SafeAreaView style={styles.body}>
        <Image source={Expense} style={styles.expenseBackground} />
        <Text style={styles.pageMainTitle}>קבלות הוצאה</Text>
      </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    expenseBackground:{
      width:'100%',
      height:260,
    },
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
    },
    pageMainTitle: {
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        top:0,
    },
    pageTitle: {
      fontSize:23,
      fontWeight:'bold',
      top:13,
      right:8,
    },
    PageSubTitle: {
      fontSize:17,
      fontWeight:'bold',
      top:25,    
      right:8,
    },
    inputMail:{
      fontSize: 18,
      textAlign: 'right',
      position: 'absolute',
      width: 350,
      height: 35,
      left: 30,
      top: 395,
      elevation: 4,
      borderRadius:8,
      backgroundColor: 'white',    
      shadowColor: 'grey',
      shadowOffset: {
      height: 1.4,
      width: 0.1
      }
  },
  text:{
    fontSize: 14,
    textAlign: 'right',
    fontWeight:'bold',
    top:80,
    right:8,
  },
  socialTitle:{
    fontSize: 20,
    textAlign: 'right',
    fontWeight:'bold',
    top:95,  
  },
  socialIcons:{
    width:30,
    height:30,
    marginTop:65,
    marginRight:200,
  },
  row:{
    flexDirection: 'row',  
    justifyContent: 'space-evenly',
    paddingHorizontal: 190,
    },
  text1:{
    fontSize: 15,
    textAlign: 'right',
    fontWeight:'bold',
    top:30,
  },
  codeBoard:{
   width:160,
   height:55,
   backgroundColor:'#7471F2',
   borderRadius:16,
   top:65,
   left:210,
  },
  codeBoardCopy:{
    color:'white',
    fontWeight:'bold',
    fontSize:22,
    textAlign:'center',
    top:10,
   },
   codeBoardTitle:{
    color:'black',
    fontWeight:'bold',
    fontSize:17,
    top:55,
    right:62,
   },
  clickedBoard:{
    width:160,
    height:55,
    backgroundColor:'#7471F2',
    borderRadius:16,
    left:20,  
    top:-13,
   },
   clicked:{
     color:'white',
     fontWeight:'bold',
     fontSize:22,
     textAlign:'center',
     top:10,
    },
    clickedBoardTitle:{
        color:'black',
        fontWeight:'bold',
        fontSize:17,
        right:204,
        top:-22,
    },
  });