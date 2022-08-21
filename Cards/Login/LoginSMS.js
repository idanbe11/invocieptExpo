import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';

import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import LoginBackground from './Icons/LoginBackground.jpg';
import Google from './Icons/Google.png';
import facebook from './Icons/facebook.png';
export default function LoginSMS({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
  const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.body}>
          <Image source={LoginBackground} style={styles.LoginBackground} />

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
                    <Text style={styles.socialTitles}>התחבר באמצעות</Text>
                    <Image source={Google} style={styles.socialIcons} />

                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPress}>
                  <View style={styles.buttonFacebook}>
                    <Text style={styles.socialTitles}>התחבר באמצעות</Text>
                    <Image source={facebook} style={styles.socialIcons} />

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
    LoginBackground:{
      width:'100%',
      height:230, 
    },
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
  
    },
    button: { 
      position:'absolute',
      backgroundColor: 'white',
      padding: 15,
      width:160,
      left: 195,
      top: -6,
      borderRadius: 10,
    },
    button2: { 
      position:'absolute',
      backgroundColor: 'white',
      padding: 15,
      borderRadius: 10,
      width:160,
      left: 5,
      top: -6,
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
      backgroundColor: 'white',
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
      top: 265,
      fontWeight: 'bold',
      textAlign:'center',
      shadowColor: "#a9a9a9",
      borderRadius: 10,
      shadowOffset: {
        width: 1,
        height: 1.8,
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
      top: 350,
      shadowColor: "#a9a9a9",
      borderRadius: 10,
      shadowOffset: {
        width: 1,
        height: 1.8,
      },
      borderRadius: 12,
    },
    socialTitles: { 
      fontWeight: 'bold',
      textAlign:'center',
      fontSize: 18,
      marginTop: 15,
      color:'black',
    },
    socialIcons:{
      width:26,
      height:26,
      top:-25,
      left:16,
    },
    buttonFacebook: { 
      position: 'absolute',
      width: 253,
      height: 52,
      left: 74,
      top: 430,
      shadowColor: "#a9a9a9",
      borderRadius: 10,
      shadowOffset: {
        width: 1,
        height: 1.8,
      },
      borderRadius: 12,
    },
    buttonRegister: { 
      position: 'absolute',
      width: '100%',
      height: 60,
      left: 0.2,
      top: 555,
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