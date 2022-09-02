import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity, TextInput} from 'react-native';
import React, { useState } from "react";

import affiliate from './Icons/affiliate.jpg';
import instagram from './Icons/instagram.png';
import facebook from './Icons/facebook.png';
import linkedin from './Icons/linkedin.png';

export default function Affiliate({text , onPress }) { 

  
    return (
      <SafeAreaView style={styles.body}>
        <Image source={affiliate} style={styles.ClearingBackground} />
            <Text style={styles.pageMainTitle}>תוכנית שותפים</Text>
            <Text style={styles.pageTitle}>הקישורים שלי</Text>
            <Text style={styles.PageSubTitle}>קישור המלצה על השירות</Text>

        <TextInput style={styles.inputMail} value={text} keyboardType="text" placeholder="הזן מייל"></TextInput>
        
        <Text style={styles.text}>מומלץ לשתף את הקישור הזה למי שרוצים להפנות אלינו</Text>
       
        <Text style={styles.socialTitle}>שתפו ברשת החברתית - </Text>

        <TouchableOpacity onPress={onPress}>
        <Image source={facebook} style={styles.socialIcons} />
        </TouchableOpacity> 

        <TouchableOpacity onPress={onPress}>
        <Image source={instagram} style={styles.socialIcons} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
        <Image source={linkedin} style={styles.socialIcons} />
        </TouchableOpacity>
       
       <Text style={styles.text1}>לרשותך 20% עמלה שמתחלק בינך לבין הלקוח
            החלוקה היא 10% עמלה לך ו 10% הנחה ללקוחות שמגיעים דרכך.
       </Text>

      
      
       <TouchableOpacity onPress={onPress}>
        <Text style={styles.codeBoardTitle}>הקוד שלי</Text>
        <View style={styles.codeBoard}>
            <Text style={styles.codeBoardCopy}>625300</Text>
       </View>
        </TouchableOpacity>

        <Text style={styles.clickedBoardTitle}>לחצו על הקישורים שלי</Text>
        <View style={styles.clickedBoard}>
            <Text style={styles.clicked}>0</Text>
       </View>
      </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    ClearingBackground:{
      width:'100%',
      height:260,
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
      width: 303,
      height: 35,
      left: 55,
      top: 395,
      backgroundColor: 'white',
      shadowColor: 'rgba(169, 169, 169, 0.64)',
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
    marginBottom: 15,
    
  },

  text1:{
    fontSize: 15,
    textAlign: 'right',
    fontWeight:'bold',
    top:28,
  },
  codeBoard:{
   width:160,
   height:55,
   backgroundColor:'#7471F2',
   borderRadius:16,
   top:75,
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
    top:63,
    right:62,
   },
  clickedBoard:{
    width:160,
    height:55,
    backgroundColor:'#7471F2',
    borderRadius:16,
    left:20,  
    top:-3,
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
        top:-15,
       },
  });