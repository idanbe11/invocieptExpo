import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function VerifyRegisterinfo({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
    return (
      <SafeAreaView style={styles.body}>
                <Text style={styles.innerText}> אימות </Text>

               
                <Text style={styles.VerifyEmailRegister} >  מייל </Text> 
                <TextInput style={styles.inputVerifyEmail} value={text} keyboardType="numeric" placeholder="  הזן קוד "></TextInput>

                
                <Text style={styles.VerifyPhoneRegister} >  מספר פלאפון </Text> 
                <TextInput style={styles.inputVerifyPhone} value={text} keyboardType="numeric" placeholder="  הזן קוד  "></TextInput>
              
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.buttonRegister}>
                    <Text style={styles.buttonRegisterTitle}> אמת </Text>
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
      marginLeft:30,
    },
    VerifyEmailRegister: {
        position: 'absolute',
        width: 105,
        height: 13,
        left: 260,
        top: 220,
        color:' #000000',
        fontWeight:600,
        fontSize:22,
        textAlign:'right',    
     },
      inputVerifyEmail: {
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
        width: 303,
        height: 35,
        left: 55,
        top: 260,
        backgroundColor:'white',
        shadowColor: 'rgba(169, 169, 169, 0.64)',
        shadowOffset: {
        height: 1.4,
        width: 0.1
      }
      },
      VerifyPhoneRegister: {
        position: 'absolute',
        width: 145,
        height: 13,
        left: 225,
        top: 350,
        color:' #000000',
        fontWeight:600,
        fontSize:22,
        textAlign:'right',    
     },
     inputVerifyPhone: {
        fontSize: 18,
        textAlign: 'right',
        position: 'absolute',
        width: 303,
        height: 35,
        left: 55,
        top: 390,
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
        top: 546,
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