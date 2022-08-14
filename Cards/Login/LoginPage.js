import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';



export default function LoginPage({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
    return (
      <SafeAreaView style={styles.body}>
                <Text style={styles.innerText}>התחברות</Text>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.button}>
                    <Text style={styles.buttonTitle}>התחבר עם מייל</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.button2}>
                    <Text style={styles.buttonTitle}>התחבר עם SMS</Text>
                  </View>
                </TouchableOpacity>
                <TextInput style={styles.input} value={text} keyboardType="numeric" placeholder="הזן מייל"></TextInput>
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
      marginTop: 130,
      fontWeight: 'bold',
    },
    button: { 
      position:'absolute',
      backgroundColor: '#F8F8FF',
      padding: 20,
      borderRadius: 5,
      width:165,
      left: 210,
      top: 40,
    },
    button2: { 
      position:'absolute',
      backgroundColor: '#F8F8FF',
      padding: 20,
      borderRadius: 5,
      width:165,
      left: 20,
      top: 40,
    },
    buttonTitle: {
      color:'black',
      fontSize: 20,
      width:143,
      height:13,
    },
    input:{
      textAlign: 'right',
      position: 'absolute',
      width: 277,
      height: 30,
      left: 55,
      top: 320,
      backgroundColor:'#F9FCFF',
      borderColor: '1 hidden rgba(149, 149, 149, 0.64)',
     
    },
  });
  