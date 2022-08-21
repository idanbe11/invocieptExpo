import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,Item,
} from "react-native";

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
          <View style={styles.avatarsgroup}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png",
              }}
            />
            <Image
              style={[styles.avatar, { zIndex: 5, marginLeft: -10 }]}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
              }}
            />
            <Image
              style={[styles.avatar, { zIndex: 10, marginLeft: -10 }]}
              source={{
                uri: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png",
              }}
            />
            <Image
              style={[styles.avatar, { zIndex: 15, marginLeft: -10 }]}
              source={{
                uri: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.footertext}>8.7gb of 16gb used</Text>
          <View style={styles.progressbar}>
            <View
              style={{
                backgroundColor: "#73C2FB",
                width: "60%",
                height: "100%",
                borderRadius: 20,
              }}
            />
          </View>
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
});
