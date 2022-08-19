import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput} from 'react-native';

import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import Hamburger from 'hamburger-react'

export default function HomePage({text , onPress}) { 
  const handlePress= () => console.log("text pressed");
  const navigation = useNavigation();
  const [isOpen, setOpen] = useState(false)

    return (
      <SafeAreaView style={styles.body}>
        <View>
        <Hamburger style={styles.Hamburger} toggled={isOpen} toggle={setOpen}/>
           
        </View>
                <TouchableOpacity onPress={onPress}>
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
    Hamburger: {
        marginRight:500,        
      },
   
  });