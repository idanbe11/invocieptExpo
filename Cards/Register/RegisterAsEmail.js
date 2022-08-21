import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput ,Picker} from 'react-native';

import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";


export default function ChooseAccount({text , onPress , route}) { 
  const handlePress= () => console.log("text pressed");
  const navigation = useNavigation();

    return (
      <SafeAreaView style={styles.body}>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.button}>
                    <Text style={styles.buttonTitle}> פטור </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.button2}>
                    <Text style={styles.buttonTitle2}> מורשה </Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.emailRegister} > מייל</Text> 
                <TextInput style={styles.inputMail} value={text} keyboardType="numeric" placeholder="הזן מייל"></TextInput>

                <Text style={styles.PhoneRegister} > פלאפון </Text> 
                <View style={styles.selectPhone}>
                <RNPickerSelect  placeholder={{ label: "050", value: "050" }} onValueChange={(value) => console.log(value)} 
                 items = {[
                     { label: "051", value: "051" },
                     { label: "052", value: "052" },
                     { label: "053", value: "053" },
                     { label: "054", value: "054" },
                     { label: "055", value: "055" },
                     { label: "058", value: "058" },

                 ]}
             />
                </View>
                <TextInput style={styles.inputPhone} value={text} keyboardType="numeric" placeholder="הזן מספר פלאפון"></TextInput>

                <Text style={styles.PasswordRegister} > סיסמא </Text> 
                <TextInput style={styles.inputPassword} value={text} keyboardType="numeric" placeholder="הזן סיסמא"></TextInput>

                <Text style={styles.VerifyPasswordRegister} > אמת סיסמא </Text> 
                <TextInput style={styles.inputVerifyPassword} value={text} keyboardType="numeric" placeholder=" הזן סיסמא שנית"></TextInput>

                <TouchableOpacity onPress={() => navigation.navigate('VerifyRegisterinfo')}>
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
        backgroundColor: 'white',
    },
    button:{
        position: 'absolute',
        width: 128,
        height: 50,
        left: 220,
        top: 100,
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: "#a9a9a9",
        borderRadius: 10,
        shadowOffset: {
          width: 1.4,
          height: 2,
        }
    },
    buttonTitle:{
        fontSize:22,
        color: 'black',
        fontWeight:'700',
        textAlign:'center',
        marginLeft:15,
        marginTop:5,
    },
    button2:{
        position: 'absolute',
        width: 128,
        height: 50,
        left: 50,
        top: 100,
        backgroundColor: '#7471F2',
        borderRadius: 12,
        shadowColor: "#a9a9a9",
        borderRadius: 10,
        shadowOffset: {
          width: 1.4,
          height: 2,
        }
    },
    buttonTitle2:{
        fontSize:22,
        color: 'white',
        fontWeight:'700',
        textAlign:'center',
        marginLeft:15,
        marginTop:5,
    },
    emailRegister:{
        position: 'absolute',
        width: 69,
        height: 13,
        left: 290,
        top: 200,
        textAlign:'right',
        fontWeight:600,
        fontSize:20,
        color:' #000000',
    },
    inputMail:{
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
        width: 303,
        height: 35,
        left: 55,
        top: 242,
        backgroundColor:'white',
        shadowColor: 'rgba(169, 169, 169, 0.64)',
        shadowOffset: {
        height: 1.4,
        width: 0.1
      }
      },
     PhoneRegister:{
        position: 'absolute',
        width: 69,
        height: 13,
        left: 290,
        top: 300,
        textAlign:'right',
        fontWeight:600,
        fontSize:20,
        color:' #000000',
    },
    inputPhone:{
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
        width: 223,
        height: 35,
        left: 135,
        top: 340,
        backgroundColor:'white',
        shadowColor: 'rgba(169, 169, 169, 0.64)',
        shadowOffset: {
        height: 1.4,
        width: 0.1
      }
      },
     selectPhone:{
        fontSize: 18,
        position: 'absolute',
        width: 55,
        height: 35,
        left: 55,
        top: 340,
        shadowColor: 'rgba(169, 169, 169, 0.64)',
        shadowOffset: {
        height: 1.4,
        width: 0.1
      }
      },
     PasswordRegister:{
        position: 'absolute',
        width: 69,
        height: 13,
        left: 290,
        top: 400,
        textAlign:'right',
        fontWeight:600,
        fontSize:20,
        color:' #000000',
    },
    inputPassword:{
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
        width: 303,
        height: 35,
        left: 55,
        top: 440,
        backgroundColor:'white',
        shadowColor: 'rgba(169, 169, 169, 0.64)',
        shadowOffset: {
        height: 1.4,
        width: 0.1
      }
      },
      VerifyPasswordRegister:{
        position: 'absolute',
        width: 120,
        height: 13,
        left: 242,
        top: 500,
        textAlign:'right',
        fontWeight:600,
        fontSize:20,
        color:' #000000',
    },
    inputVerifyPassword:{
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
        width: 303,
        height: 35,
        left: 55,
        top: 540,
        backgroundColor:'white',
        shadowColor: 'rgba(169, 169, 169, 0.64)',
      shadowOffset: {
      height: 1.4,
      width: 0.1
    }
      },
      buttonRegister:{
        position: 'absolute',
        width: 281,
        height: 52,
        left: 65,
        top: 698,
        backgroundColor: '#7471F2',
        borderRadius:12,
      },
      buttonRegisterTitle:{
        color: '#FFFFFF',
        fontSize: 24,
        textAlign:'center',
        fontWeight:'bold',
        marginLeft:15,
        marginTop:5,
      },
  });