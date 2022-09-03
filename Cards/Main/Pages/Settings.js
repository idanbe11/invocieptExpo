import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';

import user from "./Icons/user.png";
import Arrow from "./Icons/Arrow.png";


export default function Settings({text , onPress}) { 
    return (
      <SafeAreaView style={styles.body}>
        <Text style={styles.pageTitle}>הגדרות</Text>
        <View style={styles.background}>
        <View style={styles.lineBackground}>
            <View style={styles.profileBackground}>        
                <Image source={user} style={styles.ProfileIcon} />
            </View>
        <Text style={styles.userName}>שם העסק שלך</Text>
        <Image source={Arrow} style={styles.arrowIcon} />

        </View>
        </View>
      </SafeAreaView>
    );
  }



  const styles = StyleSheet.create({
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
    },
    pageTitle:{
      fontSize:30,
      fontWeight:'bold',
      top:58,
      left:7,
      textAlign:'center',
    },
    background:{
      backgroundColor:'white',
      width:'100%',
      height:'100%',
      left:1.5,
      top:80,     
      elevation: 4,
      borderRadius:12,
    },
    ProfileIcon: {
        width: 23,
        height: 25,
        left:10,
        top:5,
    },
    lineBackground: {
        backgroundColor: "white",
        top: 20,
        height: 50,
        borderRadius: 12,
        elevation: 3,
    }, 
    userName: {
       fontWeight:'bold',
       fontSize:16,
       right:77,
       top:-24,    
       color:'black',   
    },
    profileBackground:{
        backgroundColor:'#dad9ff',
        width:43,
        height:38,
        top:7,
        left:325,
        borderRadius:12,
    },
    arrowIcon:{
        width: 20,
        height: 18,
        top:-43,
        left:25,  
    }
  });