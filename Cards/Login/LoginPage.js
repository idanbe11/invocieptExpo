import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';



export default function LoginPage({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
    return (
      <SafeAreaView style={styles.body}>
                <Text style={styles.innerText}>התחברות</Text>
                <TouchableOpacity onPress={onPress}>
                  <View style={styles.button}>
                    <Text style={styles.buttonTitle}>התחבר עם מייל</Text>
                  </View>
                  <View style={styles.button2}>
                    <Text style={styles.buttonTitle}>התחבר עם SMS</Text>
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
      marginTop: 130,
      fontWeight: 'bold',
    },
    button: { 
      position:'absolute',
      backgroundColor: '#F8F8FF',
      padding: 20,
      borderRadius: 5,
      width:143,
      left: 210,
      top: 40,
    },
    button2: { 
      position:'absolute',
      backgroundColor: '#F8F8FF',
      padding: 20,
      borderRadius: 5,
      width:143,
      left: 20,
      top: 40,
    },
    buttonTitle: {
      direction:'rtl',
      color:'black',
      fontSize: 20,
      width:143,
      height:13,
    },
  });
  