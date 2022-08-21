import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text,View,Image,SafeAreaView,Button,Alert,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity,TextInput, Dimensions,  FlatList, } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Hamburger from "hamburger-react";

import {Card} from './Card';
//icons
import user from "./Icons/user.png";
import emoji from "./Icons/smilingEmoji.png";
import bell from "./Icons/bell.png";



export default function HomePage({ text, onPress }) {
  const handlePress = () => console.log("text pressed");
  const navigation = useNavigation();
  const [isOpen, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { width, height } = Dimensions.get("window");

  let arr = [
    {
      id: '1',
      title: 'לקוחות שלי',
      img: require("./Icons/rating.png"),
    },
    {
      id: '2',
      title: 'הדרכה     ',
      img: require("./Icons/youtube.png"),
    },
    {
      id: '3',
      title: 'שלח מסמך  ',
      img: require("./Icons/sendDocument.png"),
    },
    {
      id: '4',
      title: 'קבלות    ',
      img: require("./Icons/receipt.png"),
    },
    {
      id: '5',
      title: 'סליקה     ',
      img: require("./Icons/creditcard.png"),
    },
  
  ];
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.TitleContainer}>
        <View style={styles.ProfileBackground}>
          <Image source={user} style={styles.ProfileIcon} />
        </View>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <Image source={bell} style={styles.bellIcon} />
        <Text style={styles.HomeTitle}>
          ברוכים הבאים , (שם המשתמש)
          <Image source={emoji} style={styles.EmojiIcon} />{" "}
        </Text>
      </View>


      <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Card /> */}
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
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
  body: {
    width: 390,
    height: 844,
    backgroundColor: "#f7f7fc",
  },
  TitleContainer: {
    height: 260,
    borderRadius: 18,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 12,
    backgroundColor: "#fff",  
    shadowColor: "#a9a9a9",
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: 3,
    }
  },
  backgroundImg: {
    width: "100%",
    height: 400,
  },
  ProfileBackground: {
    backgroundColor: "#dad9ff",
    marginLeft: 310,
    top: 50,
    width: 60,
    height: 50,
    borderRadius: 10,
  },
  ProfileIcon: {
    width: 23,
    height: 27,
    marginLeft: 20,
    top: 10,
  },
  bellBackground: {},
  bellIcon: {
    width: 23,
    height: 27,
    top: -35,
    marginLeft: 270,
  },
  HomeTitle: {
    fontSize: 30,
    fontWeight: 700,
    width: 270,
    marginTop: 15,
    marginLeft: 100,
  },
  container:{
    top:10,
  },
  touchable: {
    width: 260,
    shadowColor: "#a9a9a9",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    minHeight: 155,
    elevation: 12,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  card: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  cardheader: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  cardheadertext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    fontFamily: "sans-serif-light",
  },

  cardheadericon: {
    width: 7,
    padding: 2,
    borderRadius: 50,
    marginHorizontal: 3,
  },
  avatarsgroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 50,
    // marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "pink",
  },
  footertext: {
    color: "#dadada",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  progressbar: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#dadada",
    height: 10,
    marginTop: 12,
  },
  EmojiIcon: {
    backgroundColor: "white",
    width: 35,
    height: 39,
    marginRight: 10,
    top: 10,
  },
  
});
