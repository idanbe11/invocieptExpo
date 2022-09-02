import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Image,SafeAreaView,Button,Alert,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity,TextInput,Dimensions,FlatList,ScrollView, } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Planes({ text, onPress , item}) {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");

  let arr = [
    {
      id: "1",
      title: "עסק מתחיל",
      text: "עד 50 קבלות / חשבוניות",
    },
    {
      id: "2",
      title: "עסק מתקדם",
      text: "עד 350 קבלות / חשבוניות",

    },
    {
      id: "3",
      title: "עסק גדול",
    },
    {
      id: "4",
      title: "עסק מקצועי",
    },
  ];
 
  return (
    
    <FlatList 
    data={arr}
    horizontal
    contentContainerStyle={{
      paddingLeft: 6,
      paddingRight: 6,
      alignItems: "center",
      justifyContent: "center",
    }}
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => {
      return <Card item={item} />;
    }}
  />
  );
}
export const Card = ({item}) => 
{
  return ( 
  
    <TouchableOpacity activeOpacity={0.8} style={styles.touchable}> 
      <View style={styles.card}>
        <View style={styles.cardheader}>
          <Text style={styles.cardheadertext}>{item.title} </Text>
          <View style={styles.cardheader}>
            <View
              style={[
                styles.cardheadericon,
                { height: 14, backgroundColor: "pink" },
              ]}
            />
            <View
              style={[
                styles.cardheadericon,
                { height: 21, backgroundColor: "lightblue" },
              ]}
            />
          </View>
        </View>
        <View style={{ marginVertical: 13 }}>
              <Text style={styles.cardtext}>{item.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
   

  );
};
const styles = StyleSheet.create({
  body: {
    width: 390,
    height: 844,
    backgroundColor: "#f7f7fc",
  },
  touchable: {
    width: 250,
    shadowColor: "#a9a9a9",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 12,
    marginHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 10,    
    top:75,
    left:20,
    height:500,
  },

  card: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  cardheader: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  cardheadertext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign:"center",
    marginLeft:55,
    marginTop: 25,
  },
  cardtext:{
    fontWeight: "bold",
    color: "black",
    right:5,
  },
  cardheadericon: {
    width: 7,
    padding: 2,
    borderRadius: 50,
    marginHorizontal: 3,

  },
  footertext: {
    color: "#dadada",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
});
