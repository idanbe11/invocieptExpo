import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import React, { useState } from "react";
import GettingStart from './Icons/GettingStart.jpg';

export default function gettingStart({text , onPress }) { 
    return (
      <SafeAreaView style={styles.body}>
        <Image source={GettingStart} style={styles.ClearingBackground} />
            <View style={styles.container}>
              <TouchableOpacity style={styles.havingAccount}>
                <Text style={styles.havingAccountTitle}>משתמש קיים?</Text>
              </TouchableOpacity>
                <Text style={styles.Title}>נהל את העסק <Text style={styles.TitleColor}>בלחיצה </Text></Text>
                <Text style={styles.SubTitle}>מעכשיו ניהול העסק וההוצאות שלך קלה יותר בזכות האפליקציה שלנו  הירשמו עכשיו למגוון אפשרויות מיוחדות</Text>

                <TouchableOpacity onPress={() => navigation.navigate('ChooseAccount')}>
                  <View style={styles.StartButton}>
                    <Text style={styles.StartButtonTitle}> בואו נתחיל </Text>
                  </View>
                </TouchableOpacity>

            </View>        
        </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    ClearingBackground:{
      width:'100%',
      height:310,
      
    },
    havingAccount:{
      position:'absolute',
      backgroundColor:'#7471F2',
      width: '32%',
      height: 33,
      borderRadius:16,
      marginLeft:250,
      marginTop:15,
    },
    havingAccountTitle:{
      color:'white',
      fontSize: 17,
      textAlign:'center',
      top:2,
    },
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
    },
    container: {
        width:'100%',
        height:'100%',
        borderRadius:46,
        backgroundColor: "#e9f0f7",
    }, 
    Title: {
        fontSize:28,
        textAlign:'center',
        marginTop:55,
    },
    TitleColor: {
        color: '#7471F2',
    },
    SubTitle: {
        fontSize:20,
        marginTop:20,
        color: '#626263',  
        textAlign:'center',
        width:'95%',
        marginLeft:10,
    },
    StartButton: { 
      position: 'absolute',
      width: '85%',
      height: 60,
      left: 35,
      top: 180,
      backgroundColor: '#7471F2',
      borderRadius:16,     
    },
    StartButtonTitle: { 
      textAlign:'center',
      fontSize: 24,
      marginTop: 10,
      marginLeft:26,
      color: 'white',
    },
  });