import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';

import user from "./Icons/user.png";
import Arrow from "./Icons/Arrow.png";
import darkMode from "./Icons/darkMode.png";
import padlock from "./Icons/padlock.png";
import cpa from "./Icons/cpa.png";
import handshake from "./Icons/handshake.png";
import cloud from "./Icons/cloud.png";
import profile from "./Icons/profile.png";


export default function Settings({text , onPress}) { 
    return (
      <SafeAreaView style={styles.body}>
        <Text style={styles.pageTitle}>הגדרות</Text>
       
        <View style={styles.background}> 
        <TouchableOpacity>
        <View style={styles.lineBackground}>
                <Image source={profile} style={styles.ProfileIcon} />
        <Text style={styles.userName}>שם העסק שלך</Text>
        <Image source={Arrow} style={styles.arrowIcon} />
        </View> 
        </TouchableOpacity>

        <View style={styles.lineBackground}>
            <View style={styles.darkMode}>   
                <Image source={darkMode} style={styles.darkModeIcon} />
            </View>
        <Text style={styles.darkModeTitle}>מצב כהה</Text>

        </View>
        <TouchableOpacity>
        <View style={styles.lineBackground}>
                <Image source={padlock} style={styles.ProfileIcon} />
        <Text style={styles.userName}>שינוי סיסמא</Text>
        <Image source={Arrow} style={styles.arrowIcon} />
        </View> 
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.lineBackground}>
                <Image source={cpa} style={styles.ProfileIcon} />
        <Text style={styles.userName}>שיתוף קבלות הוצאה</Text>
        <Image source={Arrow} style={styles.arrowIcon} />
        </View> 
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.lineBackground}>
                <Image source={handshake} style={styles.ProfileIcon} />
        <Text style={styles.userName}>שיתוף פעולה</Text>
        <Image source={Arrow} style={styles.arrowIcon} />
        </View> 
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.lineBackground}>
                <Image source={cloud} style={styles.ProfileIcon} />
        <Text style={styles.userName}>גיבוי מלא</Text>
        <Image source={Arrow} style={styles.arrowIcon} />
        </View> 
        </TouchableOpacity>

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
        width: 42,
        height: 42,
        left:325,
        top:5,
    },
    lineBackground: {
        backgroundColor: "white",
        top: 20,
        height: 50,
        borderRadius: 12,
        elevation: 3,
        marginBottom: 12,
    }, 
    userName: {
       fontWeight:'bold',
       fontSize:16,
       right:77,
       top:-24,    
       color:'black',   
    },
    arrowIcon:{
        width: 20,
        height: 18,
        top:-43,
        left:25,  
    },
    darkModeTitle:{
        color:'black',
        fontWeight:'bold',
        fontSize:15,
        top:-24,    
        right:77,
    },
    darkModeIcon:{
        width: 23,
        height: 25,
        left:11,
        top:6,
    },
    darkMode:{
        backgroundColor:'white',
        width:43,
        height:38,
        top:7,
        left:325,
        borderRadius:12,
        elevation: 4,
    },
  });