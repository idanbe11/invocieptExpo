import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';

import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ChooseAccount({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
  const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.body}>
                <Text style={styles.innerText}>בחר סוג משתמש</Text>

                <TouchableOpacity onPress={() => navigation.navigate('ChooseBusiness')}>
                  <View style={styles.BusinessButton}>
                    <Text style={styles.BusinessTitle}> עצמאים </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ChooseBusiness')}>
                  <View style={styles.CpaButton}>
                    <Text style={styles.CpaTitle}> רואה חשבון </Text>
                  </View>
                </TouchableOpacity>
              
      </SafeAreaView>
    );
  }



  const styles = StyleSheet.create({
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
    },
    innerText: {
      textAlign:'center',
      color: 'black',
      fontSize: 40,
      marginTop: 100,
      fontWeight: 'bold',
    },
    CpaButton:{
        position: 'absolute',
        width: 288,
        height: 88,
        left: 47,
        top: 300,
        backgroundColor:'#7471F2',
        shadowColor: "#a9a9a9",
        borderRadius: 10,
        shadowOffset: {
          width: 2,
          height: 2,
        }
    },
    CpaTitle:{
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        textAlign:'center',
        marginTop:11,
        marginLeft:20,
    },
    BusinessButton:{
        position: 'absolute',
        width: 288,
        height: 88,
        left: 47,
        top: 150,
        backgroundColor:'#7471F2',
        shadowColor: "#a9a9a9",
        borderRadius: 10,
        shadowOffset: {
          width: 2,
          height: 2,
        }
    },
    BusinessTitle:{
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        textAlign:'center',
        marginTop:11,
        marginLeft:20,
    },
  });