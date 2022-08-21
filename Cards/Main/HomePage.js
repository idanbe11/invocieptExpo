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
import creditcard from "./Icons/creditcard.png";
import sendDocument from "./Icons/sendDocument.png";
import youtube from "./Icons/youtube.png";
import rating from "./Icons/rating.png";
import receipt from "./Icons/receipt.png";



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
    },
    {
      id: '2',
      title: ' הדרכה    ',
    },
    {
      id: '3',
      title: 'שלח מסמך',
    },
    {
      id: '4',
      title: 'קבלות    ',
    },
    {
      id: '5',
      title: 'סליקה    ',
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
      width: 0,
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
  container:{
    top:10,
  },
  touchable: {
    width: 260,
    shadowColor: "#a9a9a9",
    shadowOffset: {
      width: 0,
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
  HomeTitle: {
    fontSize: 30,
    fontWeight: 700,
    width: 270,
    marginTop: 15,
    marginLeft: 100,
  },
  EmojiIcon: {
    backgroundColor: "white",
    width: 35,
    height: 39,
    marginRight: 10,
    top: 10,
  },
  homeIcons: {
    backgroundColor: "white",
    width: 360,
    height: 80,
    top: 25,
    left: 17,
    borderRadius: 17,
    shadowColor: "#a9a9a9",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 12,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  ratingIcon: {
    position: "absolute",
    width: 36,
    height: 33,
    marginLeft: 300,
    top: 12,
  },
  youtubeIcon: {
    position: "absolute",
    width: 36,
    height: 33,
    marginLeft: 238,
    top: 10,
  },
  sendDocumentIcon: {
    position: "absolute",
    width: 36,
    height: 33,
    marginLeft: 160,
    top: 12,
  },
  receiptIcon: {
    position: "absolute",
    width: 36,
    height: 33,
    marginLeft: 82,
    top: 12,
  },
  creditCardIcon: {
    position: "absolute",
    width: 36,
    height: 33,
    marginLeft: 15,
    top: 12,
  },
  ratingTitle: {
    position: "absolute",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 700,
    color: "#6D6D6D",
    marginTop: 48,
    marginLeft: 292,
  },
  youtubeTitle: {
    position: "absolute",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 700,
    color: "#6D6D6D",
    marginTop: 48,
    marginLeft: 232,
  },
  documentTitle: {
    position: "absolute",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 700,
    color: "#6D6D6D",
    marginTop: 48,
    marginLeft: 142,
  },
  receiptTitle: {
    position: "absolute",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 700,
    color: "#6D6D6D",
    marginTop: 48,
    marginLeft: 78,
  },
  creditCardTitle: {
    position: "absolute",
    fontSize: 16,
    textAlign: "center",
    fontWeight: 700,
    color: "#6D6D6D",
    marginTop: 48,
    marginLeft: 10,
  },
});
