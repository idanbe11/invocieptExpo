import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';

import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function LoginSMS({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
  const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.body}>
                <Text style={styles.innerText}>התחברות</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
                  <View style={styles.button}>
                    <Text style={styles.buttonTitle}>התחבר עם מייל</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.button2}>
                    <Text style={styles.buttonTitle}>התחבר עם SMS</Text>
                  </View>
                </TouchableOpacity>
                <TextInput style={styles.inputMail} value={text} keyboardType="numeric" placeholder="הזן מספר פלאפון"></TextInput>             
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginTitle}>כניסה</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.buttonGoogle}>
                    <Text style={styles.buttonGoogleTitle}>התחבר באמצעות</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.buttonFacebook}>
                    <Text style={styles.buttonFacebookTitle}>התחבר באמצעות</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ChooseAccount')}>
                  <View style={styles.buttonRegister}>
                    <Text style={styles.buttonRegisterTitle}> הירשם </Text>
                  </View>
                </TouchableOpacity>
              
      </SafeAreaView>
    );
  }



  const styles = StyleSheet.create({
    body: {
      width: 390,
      height: 844,
      backgroundColor: '#F8F8FF',
  
    },
    innerText: {
      textAlign:'center',
      color: 'black',
      fontSize: 40,
      marginTop: 100,
      fontWeight: 'bold',
    },
    button: { 
      position:'absolute',
      backgroundColor: '#F8F8FF',
      padding: 20,
      borderRadius: 5,
      width:165,
      left: 195,
      top: 40,
    },
    button2: { 
      position:'absolute',
      backgroundColor: '#F8F8FF',
      padding: 20,
      borderRadius: 5,
      width:165,
      left: 5,
      top: 40,
    },
    buttonTitle: {
      color:'black',
      fontSize: 18,
      width:143,
      height:13,    
      fontWeight: 'bold',
    },
    inputMail:{
      fontSize: 18,
      textAlign: 'right',
      position: 'absolute',
      width: 303,
      height: 35,
      left: 55,
      top: 300,
      backgroundColor:'#F8F8FF',
      shadowColor: 'rgba(169, 169, 169, 0.64)',
      shadowOffset: {
      height: 1.4,
      width: 0.1
    }
    },
    inputPassword:{
      fontSize: 18,
      textAlign: 'right',
      position: 'absolute',
      width: 303,
      height: 35,
      left: 55,
      top: 380,
      backgroundColor:'#F8F8FF',
      shadowColor: 'rgba(169, 169, 169, 0.64)',
      shadowOffset: {
      height: 1.4,
      width: 0.1
      }
    },
    buttonForget: { 
      position:'absolute',
      backgroundColor: '#F8F8FF',
      padding: 20,
      borderRadius: 5,
      width:165,
      left: 195,
      top: 280,
    },
    buttonLogin: { 
      position:'absolute',
      backgroundColor: '#7471F2',
      padding: 20,
      borderRadius: 12,
      width:281,
      height: 52,
      left: 61.5,
      top: 360,
      fontWeight: 'bold',
      textAlign:'center',
      shadowColor: 'lightgray',
      shadowOffset: {
      height: 1,
      width: 0.5
    }
    },
    buttonLoginTitle: { 
      fontWeight: 'bold',
      textAlign:'center',
      fontSize: 22,
      marginTop: -9,
      color:'white',
    },
    buttonGoogle: { 
      position: 'absolute',
      width: 253,
      height: 52,
      left: 74,
      top: 460,
      backgroundColor: '#FFFFFF',
      shadowOffset: {
      height: 1,
      width: 0.5
      },
      borderRadius: 12,
    },
    buttonGoogleTitle: { 
      fontWeight: 'bold',
      textAlign:'center',
      fontSize: 18,
      marginTop: 9,
      color:'black',
    },
    buttonFacebook: { 
      position: 'absolute',
      width: 253,
      height: 52,
      left: 74,
      top: 550,
      backgroundColor: '#FFFFFF',
      shadowOffset: {
      height: 1,
      width: 0.5
      },
      borderRadius: 12,
    },
    buttonFacebookTitle: { 
      fontWeight: 'bold',
      textAlign:'center',
      fontSize: 18,
      marginTop: 9,
      color:'black',
    },
    buttonRegister: { 
      position: 'absolute',
      width: '100%',
      height: 60,
      left: 0.2,
      top: 635,
      backgroundColor: '#7471F2',
    },
    buttonRegisterTitle: { 
      fontWeight: 'bold',
      textAlign:'center',
      fontSize: 24,
      marginTop: 10,
      marginLeft:26,
      color: 'white',
    },
  });