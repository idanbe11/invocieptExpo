import {StyleSheet,Text,TouchableOpacity,View,Dimensions,Image,Item,} from "react-native";

//icons
import creditcard from "./Icons/creditcard.png";
import sendDocument from "./Icons/sendDocument.png";
import youtube from "./Icons/youtube.png";
import rating from "./Icons/rating.png";
import receipt from "./Icons/receipt.png";
const { width, height } = Dimensions.get("window");

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
       
        </View>
        <View>
        <Image style={styles.image} source={item.img}/>
          <Text style={styles.footertext}>{item.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
   

  );
};
const styles = StyleSheet.create({
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
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    textAlign:"center",
    marginLeft:50,
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
  image:{
    width: 65,
    height: 63,
    marginLeft:90,
    top:-15,

  },
});
