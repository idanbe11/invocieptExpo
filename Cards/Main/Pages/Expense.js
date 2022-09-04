import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity, TextInput} from 'react-native';
import React, { useState } from "react";

import Expense from './Icons/Expense.png';
import DragDropExpense  from './DragDropExpense';


export default function expense({text , onPress }) { 

  
    return (
      <SafeAreaView style={styles.body}>
        <Image source={Expense} style={styles.expenseBackground} />
        <Text style={styles.pageMainTitle}>קבלות הוצאה</Text>
        <View style={styles.background}>
        <DragDropExpense/>

        </View>
      </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    expenseBackground:{
      width:'100%',
      height:280,
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
        left:10,
    },
    background:{
        backgroundColor:'#f7f7fc',
        width:'100%',
        height:'100%',
        left:1.5,
        top:5,     
        elevation: 4,
        borderRadius:12,
    },
    
  });