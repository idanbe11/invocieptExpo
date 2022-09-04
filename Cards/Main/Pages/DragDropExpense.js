import React, { useState } from "react";
import {Text,View,StyleSheet,TouchableOpacity,UIManager,Dimensions,FlatList} from "react-native";
import DraggableFlatList, { ScaleDecorator,RenderItemParams,} from "react-native-draggable-flatlist";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";


const { width } = Dimensions.get("window");


const list = [
  {
    id: "one",
    cardname: "קבלות אחרונות שלי",
  },
  {
    id: "two",
    cardname: "לפי חודש ",
    text:"ינואר",
    text2:"פברואר",
    text3:"מרץ",
    text4:"אפריל",
    May:"מאי",
    Jun:"יוני",
    Jul:"יולי",
    Aug:"אוגוסט",
    Sep:"ספטמבר",
    Oct:"אוקטובר",
    Nov:"נובמבר",
    Dec:"דצמבר",
  },
  {
    id: "three",
    cardname: "לפי שנה",
    text:"2022",
    text2:"2023",
    text3:"2024",
    text4:"2025",
  }
];


if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function DragDrop() {
  const [data, setData] = useState(list);
  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator style={styles.body}>
          <TouchableOpacity 
          activeOpacity={1} 
          onLongPress={drag} 
          disabled={isActive} 
          style={[ 
            styles.card, { backgroundColor: isActive ? "#f7f7fc" : item.backgroundColor },]}>
            <View
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.firsttext}>{item.cardname}</Text>
            </View>
            <View style={styles.cardtext}>

            <TouchableOpacity style={styles.textButtons}>
              <Text style={styles.textCard}>{item.text}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textButtons}>
              <Text style={styles.textCard}>{item.text2}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.textButtons}>
              <Text style={styles.textCard}>{item.text3}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.textButtons}>
              <Text style={styles.textCard}>{item.text4}</Text>
              </TouchableOpacity>
              {/* <Text>{item.May}</Text>
              <Text>{item.Jun}</Text>
              <Text>{item.Jul}</Text>
              <Text>{item.Aug}</Text>
              <Text>{item.Sep}</Text>
              <Text>{item.Oct}</Text>
              <Text>{item.Nov}</Text>
              <Text>{item.Dec}</Text>*/}
        </View>

          </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#f7f7fc" }}>
      <SafeAreaProvider>
        <DraggableFlatList
          data={data}
          onDragEnd={({ data }) => setData(data)}
          contentContainerStyle={{ paddingBottom:100 }}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#f7f7fc",
  },
  rowItem: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    
  },
  scrollview: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",  
  },
  card: {
    marginHorizontal: "auto",
    width: width / 1.05,
    borderRadius: 12,
    backgroundColor: 'white',
    height: 155,
    elevation: 10,
    shadowColor: "#c0c0c0",
    paddingHorizontal: 12,
    marginVertical: -8,
    marginLeft:10,
  },
  firsttext: {
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: "900",
    margin: 2,
  },
  cardtext:{
    fontWeight: "bold",
    color: "black",
    paddingVertical: 15,
    flexDirection: 'row',  
    justifyContent: 'space-evenly',
    paddingHorizontal: 5,
  },
  textButtons:{
    backgroundColor:'#F0F2FA',
    borderRadius:12,
    width:65,
    height:45,
    elevation: 2,
  },
  textCard:{
  fontSize:15,
  fontWeight:'bold',
  textAlign:'center',
  color:'#425CE2',
  top:10,
  },
});
