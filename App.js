import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text style={styles.text}>Hello!!!!</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.blueView}>
        <Text style={styles.text}>안녕하세요!!!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 2,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 3,
    backgroundColor: "blue",
  },
  text: {
    color: "white",
    fontSize: 50,
    backgroundColor: "black",
    padding: "7%",
    borderRadius: 50,
    margin: "5%",
  },
});
