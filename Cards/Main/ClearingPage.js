import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,Button,Alert, TouchableHighlight,TouchableWithoutFeedback, TouchableOpacity , TextInput,Dimensions,  FlatList, } from 'react-native';

import Clearing from './Icons/Clearing.png';


export default function ClearingPage({text , onPress}) { 

    return (
      <SafeAreaView style={styles.body}>
        <Image source={Clearing} style={styles.ClearingBackground} />
       
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text>{item.title}</Text>
                </View>
            </View>

             
      </SafeAreaView>
    );
  }



  const styles = StyleSheet.create({
    ClearingBackground:{
      width:'100%',
      height:360,
    },
    body: {
      width: 390,
      height: 844,
      backgroundColor: 'white',
    },
    container: {
        width:'100%',
        height:'100%',
        borderRadius:32,
        backgroundColor: "#e9f0f7",
    },
    subContainer: {
        width:'90%',
        height:160,
        top:90,
        left:20,
        borderRadius:22,
        backgroundColor: "white",
    },
  });