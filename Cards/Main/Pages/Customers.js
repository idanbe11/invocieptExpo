import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';
import React, { useState } from "react";

import customers from './Icons/customers.png';


export default function Customers({text , onPress ,item}) { 
  


    return (
      <SafeAreaView style={styles.body}>
        <Image source={customers} style={styles.CustomersBackground} />
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.mainTitle}>לקוחות שלי</Text>
                </View>
               

            </View>        
        </SafeAreaView>
    );
}

  const styles = StyleSheet.create({
    CustomersBackground:{
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
  });