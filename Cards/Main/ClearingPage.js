import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';
import React, { useState } from "react";
import Clearing from './Icons/Clearing.png';
import TranzillaLogo from './Icons/TranzillaLogo.jpg';


export default function ClearingPage({text , onPress ,item}) { 
    return (
      <SafeAreaView style={styles.body}>
        <Image source={Clearing} style={styles.ClearingBackground} />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.mainTitle}>אפשרויות סליקה</Text>
                </View>
            <View style={styles.FirstBoard}>
                <Image source={TranzillaLogo} style={styles.Logos} />
                    <Text style={styles.text}>29 ש״ח בחודש +           
החל מ-1.4% עמלת סליקה בכל עסקה</Text>
            </View>
            <View style={styles.SecondBoard}>
                <Image source={TranzillaLogo} style={styles.Logos} />
                    <Text style={styles.text}>29 ש״ח בחודש +           
החל מ-1.4% עמלת סליקה בכל עסקה</Text>
            </View>
            </View>        
        </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    ClearingBackground:{
      width:'100%',
      height:360,
    },
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
    },
    container: {
        width:'100%',
        height:'100%',
        borderRadius:32,
        backgroundColor: "#e9f0f7",
    },
    subContainer: {
        width:'88%',
        height:70,
        top:10,
        left:25,
        borderRadius:22,
        backgroundColor: "#7471F2",
        shadowColor: "#a9a9a9",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    mainTitle: {
        fontSize:30,
        textAlign:'center',
        color:'white',
        marginTop:10,
    },
    FirstBoard: {
        width:'88%',
        height:230,
        top:30,
        left:25,
        borderRadius:22,
        backgroundColor: "white",
        shadowColor: "#a9a9a9",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    Logos: {
        width:'60%',
        height:55,
        top: 10,
        left:80,
    },
    text: {
        fontSize:22,
        marginTop:25,
        marginRight:12,
    },
    SecondBoard: {
        width:'88%',
        height:230,
        top:50,
        left:25,
        borderRadius:22,
        backgroundColor: "white",
        shadowColor: "#a9a9a9",
        shadowOffset: {
          width: 2,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
  });