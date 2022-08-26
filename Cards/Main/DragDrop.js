import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  Dimensions,
} from "react-native";
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PieChart } from "react-native-gifted-charts";

const data = [
  { value: 50, color: "red" },
  { value: 80, color: "pink" },
];

const DonutChart = () => {
  return (
    <View style={{ marginTop: 30, marginLeft: 5 }}>
      <PieChart data={data} donut radius={40} innerRadius={20} />
    </View>
  );
};

const { width } = Dimensions.get("window");

const list = [
  {
    id: "one",
    cardname: "first card",
  },
  {
    id: "two",
    cardname: "second card ",
  },
  {
    id: "three",
    cardname: "third card",
  },
  {
    id: "four",
    cardname: "fourth card",
  },
  {
    id: "five",
    cardname: "five card",
  },
  {
    id: "six",
    cardname: "six card",
  },
];

if (Platform.OS === "android") {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function DragDrop() {
  const [data, setData] = useState(list);

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <View>
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={drag}
            disabled={isActive}
            style={[
              styles.card,
              { backgroundColor: isActive ? "pink" : item.backgroundColor },
            ]}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <DonutChart />
              <Text style={styles.firsttext}>{item.cardname}</Text>
            </View>
            <View
              style={{
                padding: 3,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 4,
                paddingHorizontal: 12,
                flexDirection: "row",
                marginVertical: 4,
              }}
            >
              <View>
                <Text style={styles.secondcontainertext}>Some text is</Text>
                <Text style={[styles.moneytext, { color: "#9c9c9c" }]}>
                  11,999.99
                </Text>
              </View>
              <View>
                <Text style={styles.secondcontainertext}>Some text</Text>
                <Text style={[styles.moneytext, { color: "purple" }]}>
                  9,324.99
                </Text>
              </View>
            </View>
            <View style={styles.progressbarcontainer}>
              <View style={styles.progressbar}>
                <View style={styles.progress} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "seashell" }}>
      <SafeAreaProvider>
        <DraggableFlatList
          data={data}
          onDragEnd={({ data }) => setData(data)}
          contentContainerStyle={{ alignItems: "center" }}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
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
    backgroundColor: "#fff",
    minHeight: 250,
    elevation: 10,
    shadowColor: "#c0c0c0",
    paddingHorizontal: 12,
  },
  firsttext: {
    alignSelf: "flex-end",
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    fontWeight: "bold",
    margin: 2,
  },
  secondcontainertext: {
    fontSize: 17,
    fontWeight: "medium",
    color: "#9c9c9c",
    padding: 2,
  },
  moneytext: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
  },
  progressbarcontainer: {
    width: "100%",
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  progressbar: {
    backgroundColor: "#dadada",
    borderRadius: 10,
    width: "100%",
    height: 12,
  },
  progress: {
    width: "60%",
    height: "100%",
    alignSelf: "flex-end",
    borderRadius: 10,

    backgroundColor: "purple",
  },
});