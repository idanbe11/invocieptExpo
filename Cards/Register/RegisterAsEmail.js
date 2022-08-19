import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function ChooseAccount({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
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

               
              
      </SafeAreaView>
    );
  }



  const styles = StyleSheet.create({
    body: {
        width: 390,
        height: 844,
        backgroundColor: '#F8F8FF',
    },
    button:{
        position: 'absolute',
        width: 128,
        height: 50,
        left: 220,
        top: 100,
        backgroundColor: 'white',
        borderRadius: 12,
        shadowColor: 'rgba(169, 169, 169, 0.64)',
        shadowOffset: {
        height: 1.2,
        width: 0.1
      }
    },
    buttonActive:{
        backgroundColor: '#7471F2',
        color:'white',
    },
    buttonTitleActive:{
        color:'white',   
    },
    buttonTitle:{
        fontSize:24,
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
        shadowColor: 'rgba(169, 169, 169, 0.64)',
        shadowOffset: {
        height: 1.2,
        width: 0.1
      }
    },
    buttonTitle2:{
        fontSize:24,
        color: 'white',
        fontWeight:'700',
        textAlign:'center',
        marginLeft:15,
        marginTop:5,
    },
  });