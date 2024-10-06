// import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/theme";
export default function App() {
  return (
    // <View style={styles.container}>
      // <Text>Open up App.tsx to start working on your app!</Text>
      //  <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <Text style={styles.innerText}> Hello </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
  innerText:{
      fontSize:20
  }
});
