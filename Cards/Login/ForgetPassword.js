import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';

import Resetpassword from './Icons/Resetpassword.png';


export default function ForgetPassword({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
    return (
      <SafeAreaView style={styles.body}>
          <Image source={Resetpassword} style={styles.LoginBackground} />

                
                <TextInput style={styles.inputMail} value={text} keyboardType="numeric" placeholder="הזן מייל"></TextInput>             
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.buttonLogin}>
                    <Text style={styles.buttonLoginTitle}>איפוס סיסמא</Text>
                  </View>
                </TouchableOpacity>
               
              
      </SafeAreaView>
    );
  }



  const styles = StyleSheet.create({
    LoginBackground:{
      width:'100%',
      height:340, 
    },
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
    },
 
    inputMail:{
      fontSize: 18,
      textAlign: 'right',
      position: 'absolute',
      width: 303,
      height: 35,
      left: 55,
      top: 410,
      backgroundColor: 'white',
      shadowColor: 'rgba(169, 169, 169, 0.64)',
      shadowOffset: {
      height: 1.4,
      width: 0.1
    }
    },
    buttonLogin: { 
      position:'absolute',
      backgroundColor: '#7471F2',
      padding: 20,
      borderRadius: 12,
      width:281,
      height: 52,
      left: 61.5,
      top: 250,
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
  });