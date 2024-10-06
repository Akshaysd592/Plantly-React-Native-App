import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import React from "react";

export default function OnboardingScreen() { // on this screen we can create authentication as well
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Onboarding</Text> */}
      <Button title="Let me In"     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});