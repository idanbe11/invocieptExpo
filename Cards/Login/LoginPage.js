import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';

import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import LoginBackground from './Icons/LoginBackground.jpg';
import Google from './Icons/Google.png';
import facebook from './Icons/facebook.png';
import Apple from './Icons/Apple.png';

export default function LoginPage({text , onPress }) {  
  const handlePress= () => console.log("text pressed");
  const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.body} >
  
  <Image source={LoginBackground} style={styles.LoginBackground} />

                <TouchableOpacity onPress={onPress}>
                  <View style={styles.button}>
                    <Text style={styles.buttonTitle}>התחבר עם מייל</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('LoginSMS')}>
                  <View style={styles.button2}>
                    <Text style={styles.buttonTitle}>התחבר עם SMS</Text>
                  </View>
                </TouchableOpacity>

                <TextInput style={styles.inputMail} value={text} keyboardType="text" placeholder="הזן מייל"></TextInput>
                <TextInput style={styles.inputPassword} value={text} keyboardType="text" placeholder="הזן סיסמא"></TextInput>

                <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                  <View style={styles.buttonForget}>
                    <Text style={styles.buttonTitle}>שכחתי סיסמא</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                  <View style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginTitle}>כניסה</Text>
                  </View>
                </TouchableOpacity>

          <Text style={styles.orWithText}>או באמצעות</Text>

                <View style={styles.row}>
                  <TouchableOpacity onPress={onPress}>
                    <Image source={Apple} style={styles.socialIcons} />
                  </TouchableOpacity> 

                  <TouchableOpacity onPress={onPress}>
                    <Image source={Google} style={styles.socialIcons} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={onPress}>
                    <Image source={facebook} style={styles.socialIcons} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('ChooseAccount')}>
                  <View style={styles.buttonRegister}>
                    <Text style={styles.buttonRegisterTitle}>אין לך משתמש ?  <Text style={styles.registerNow}> הירשם עכשיו </Text>  </Text>
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
      height:21,    
      fontWeight: 'bold',
    },
    inputMail:{
      fontSize: 18,
      textAlign: 'right',
      position: 'absolute',
      width: 303,
      height: 35,
      left: 55,
      top: 305,
      backgroundColor: 'white',
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
      top: 375,
      backgroundColor: 'white',
      shadowColor: 'rgba(169, 169, 169, 0.64)',
      shadowOffset: {
      height: 1.4,
      width: 0.1
      }
    },
    buttonForget: { 
      position:'absolute',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 5,
      width:165,
      left: 195,
      top: 195,
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
      height:25,
      color:'white',
    },
    orWithText:{
      fontWeight:'bold',
      textAlign:'center',
      left:8,
      top:340,
      fontSize:15,
    },

    socialIcons:{
      width:43,
      height:43,
      marginTop:362,
      left:-12,
      position:'absolute',
    },
    row:{
      flexDirection: 'row',  
      justifyContent: 'space-evenly',
      paddingHorizontal: 15,
      },
    buttonRegisterTitle: { 
      fontWeight: 'bold',
      textAlign:'center',
      fontSize: 17,
      left: 2,
      top: 460,
      color: 'black',
    },
    registerNow:{
      color:'#7471F2',
    },
  });
  