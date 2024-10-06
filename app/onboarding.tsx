import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import React from "react";
import {useUserStore} from '@/store/userStore'
import { useRouter } from "expo-router";
import PlantlyButton from "@/components/PlantlyButton";

export default function OnboardingScreen() { // on this screen we can create authentication as well
  
    const router = useRouter();
     const toggleHasOnboarded = useUserStore((state)=> state.toggleHasOnboarded)

   function handlePress(){
     toggleHasOnboarded();
     router.replace('/');
       
   }
   
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Onboarding</Text> */}
      {/* <Button title="Let me In" onPress={handlePress}/> */}
      <PlantlyButton title="Let me in!" onPress={handlePress}/>
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