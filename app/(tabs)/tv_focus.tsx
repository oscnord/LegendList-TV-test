import { FlatList, StyleSheet, TouchableHighlight, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useScale } from "@/hooks/useScale";
import { LegendList } from "@legendapp/list";

const sampleData = [
  { id: "1", title: "Box 1", color: "#FF6B6B" },
  { id: "2", title: "Box 2", color: "#4ECDC4" },
  { id: "3", title: "Box 3", color: "#45B7D1" },
  { id: "4", title: "Box 4", color: "#96CEB4" },
  { id: "5", title: "Box 5", color: "#FECA57" },
  { id: "6", title: "Box 6", color: "#FF9FF3" },
];

export default function FocusDemoScreen() {
  const styles = useFocusDemoScreenStyles();
  const renderFocusableBox = ({ item }: { item: (typeof sampleData)[0] }) => {
    return (
      <TouchableHighlight
        style={[styles.focusableBox, { backgroundColor: item.color }]}
        onPress={() => console.log(`Pressed ${item.title}`)}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <ThemedText style={styles.boxText}>{item.title}</ThemedText>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={{ padding: 25, backgroundColor: "#252525" }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">List TV focus test</ThemedText>
      </ThemedView>

      <View style={styles.legendListContainer}>
        <ThemedText type="title">LegendList</ThemedText>
        <LegendList
          data={sampleData}
          renderItem={renderFocusableBox}
          keyExtractor={(item) => item.id}
          style={styles.legendList}
          recycleItems
          horizontal
        />

        <ThemedText type="title">FlatList</ThemedText>
        <FlatList
          data={sampleData}
          renderItem={renderFocusableBox}
          keyExtractor={(item) => item.id}
          style={styles.legendList}
          horizontal
        />
      </View>
    </View>
  );
}

const useFocusDemoScreenStyles = function () {
  const scale = useScale();
  return StyleSheet.create({
    headerImage: {
      color: "#808080",
      bottom: -45 * scale,
      left: 0,
      position: "absolute",
    },
    titleContainer: {
      flexDirection: "row",
      gap: 8 * scale,
    },
    legendListContainer: {
      marginTop: 20 * scale,
      marginBottom: 20 * scale,
    },
    sectionTitle: {
      marginBottom: 16 * scale,
    },
    legendList: {
      height: 150 * scale,
      borderRadius: 8 * scale,
      backgroundColor: "#212121",
      padding: 8 * scale,
    },
    focusableBox: {
      padding: 20 * scale,
      marginVertical: 8 * scale,
      marginHorizontal: 12 * scale,
      borderRadius: 12 * scale,
      alignItems: "center",
      justifyContent: "center",
      minHeight: 100 * scale,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    boxText: {
      fontSize: 18 * scale,
      fontWeight: "bold",
      color: "#FFFFFF",
      textAlign: "center",
    },
  });
};
