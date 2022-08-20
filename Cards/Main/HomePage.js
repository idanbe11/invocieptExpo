import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text,View,Image,SafeAreaView,Button,Alert,TouchableHighlight,TouchableWithoutFeedback,TouchableOpacity,TextInput,} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Hamburger from "hamburger-react";

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
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
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

      <View>
        <View style={styles.customerSlider}>
          <Text>לקוחות שלי</Text>
          <Text>16 מתוך 50</Text>
          <View></View>
        </View>
      </View>

      <View style={styles.homeIcons}>
        <TouchableOpacity onPress={onPress}>
          <Image source={rating} style={styles.ratingIcon} />
          <Text style={styles.ratingTitle}>לקוחות</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <Image source={youtube} style={styles.youtubeIcon} />
          <Text style={styles.youtubeTitle}>הדרכה</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <Image source={sendDocument} style={styles.sendDocumentIcon} />
          <Text style={styles.documentTitle}>שלח מסמך</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <Image source={receipt} style={styles.receiptIcon} />
          <Text style={styles.receiptTitle}>קבלות</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPress}>
          <Image source={creditcard} style={styles.creditCardIcon} />
          <Text style={styles.creditCardTitle}>סליקה</Text>
        </TouchableOpacity>
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
  container: {
    height: 260,
    borderRadius: 18,
    shadowColor: "#ebebfa",
    shadowOpacity: 50,
    shadowOffset: {
      height: 5.5,
      width: 4,
    },
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
    shadowColor: "#ebebfa",
    shadowOpacity: 50,
    shadowOffset: {
      height: 6,
      width: 6,
    },
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
