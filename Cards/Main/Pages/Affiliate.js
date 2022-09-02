import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity, TextInput} from 'react-native';
import React, { useState } from "react";

import affiliate from './Icons/affiliate.jpg';

export default function Affiliate({text , onPress }) { 
  
    return (
      <SafeAreaView style={styles.body}>
        <Image source={affiliate} style={styles.ClearingBackground} />
            <Text style={styles.pageMainTitle}>תוכנית שותפים</Text>
            <Text style={styles.pageTitle}>הקישורים שלי</Text>
            <Text style={styles.PageSubTitle}>קישור המלצה על השירות</Text>

        <TextInput style={styles.inputMail} value={text} keyboardType="text" placeholder="הזן מייל"></TextInput>
 
      </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    ClearingBackground:{
      width:'100%',
      height:310,
    },
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
    },
    pageMainTitle: {
        fontSize:34,
        fontWeight:'bold',
        textAlign:'center',
        top:0,
    },
    pageTitle: {
      fontSize:23,
      fontWeight:'bold',
      top:20,
    },
    PageSubTitle: {
      fontSize:17,
      fontWeight:'bold',
      top:30,
    },
    inputMail:{
      fontSize: 18,
      textAlign: 'right',
      position: 'absolute',
      width: 303,
      height: 35,
      left: 55,
      top: 450,
      backgroundColor: 'white',
      shadowColor: 'rgba(169, 169, 169, 0.64)',
      shadowOffset: {
      height: 1.4,
      width: 0.1
      }
  },
  });