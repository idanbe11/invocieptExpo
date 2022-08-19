import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Hamburger from 'hamburger-react'

//icons
import user from './Icons/user.png'; 
import emoji from './Icons/smilingEmoji.png'; 
import bell from './Icons/bell.png'; 
import creditcard from './Icons/creditcard.png'; 
import sendDocument from './Icons/sendDocument.png'; 
import youtube from './Icons/youtube.png'; 
import rating from './Icons/rating.png'; 
import receipt from './Icons/receipt.png'; 

//background img
import background from './Icons/background.png'; 


export default function HomePage({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
  const navigation = useNavigation();
  const [isOpen, setOpen] = useState(false)

    return (
      <SafeAreaView style={styles.body}>
        <View style={styles.container}>
            <View style={styles.ProfileBackground}>
                <Image source={user} style={styles.ProfileIcon} />
            </View>
        <Hamburger toggled={isOpen} toggle={setOpen}/> 
        <Image source={bell} style={styles.bellIcon} /> 
        <Text style={styles.HomeTitle}>ברוכים הבאים , (שם המשתמש) 
        <Image source={emoji} style={styles.EmojiIcon} /> </Text>
        </View>

        <View style={styles.homeIcons}>
            <Image source={rating} style={styles.ratingIcon} />
            <Text>לקוחות</Text>

            <Image source={youtube} style={styles.youtubeIcon} />
            <Text>הדרכה</Text>

            <Image source={sendDocument} style={styles.sendDocumentIcon} />
            <Text>שלח מסמך</Text>

            <Image source={receipt} style={styles.receiptIcon} />
            <Text>קבלות</Text>
            
            <Image source={creditcard} style={styles.creditCardIcon} />
            <Text>סליקה</Text>
        </View>


                
               
              
      </SafeAreaView>
    );
  }



  const styles = StyleSheet.create({
    body: {
      width: 390,
      height: 844,
      backgroundColor: '#F8F8FF',
    },
    container: { 
        backgroundColor: 'white',
        height:260,
        borderRadius:12,
        shadowColor: 'rgba(169, 169, 169, 0.64)',
        shadowOpacity: 1.4,
        shadowOffset: {
        height: 1.4,
        width: 0.4
      }
      },
    backgroundImg:{
        width: '100%',
        height: 400,
    },
    ProfileBackground: {
        backgroundColor:'#dad9ff',  
        marginLeft:310,
        top:50,
        width:60,
        height:50,
        borderRadius:10,
      },
    ProfileIcon: {
        width:23,
        height:27,  
        marginLeft:20,
        top:10,
      },
      bellBackground: {
   
      },
    bellIcon: {
        width:23,
        height:27,  
        top:-35,
        marginLeft:270,
      },
      HomeTitle: {
        fontSize:30,
        fontWeight:700,
        width:270,
        marginTop:15,
        marginLeft:100,
      },
      EmojiIcon: {
        backgroundColor:'white',
        width:35,
        height:39,  
        marginRight:10,
        top:10,
      },
      homeIcons: {
        backgroundColor:'white',
        width:350,
        height:75,
        top:20,
        left:25,
        borderRadius:17,
        shadowColor: 'rgba(169, 169, 169, 0.64)',
        shadowOpacity: 2,
        shadowOffset: {
        height: 2,
        width: 0.4
      }
      },
      ratingIcon: {
        width:40,
        height:40,  
        top:5,
        marginLeft:270,
      },
  });