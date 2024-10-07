// import { StatusBar } from "expo-status-bar";

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { usePlantStore } from "@/store/plantStore";
import PlantCard from "@/components/PlantCard";
import PlantlyButton from "@/components/PlantlyButton";



export default function App() {
    const router = useRouter();
    const plants = usePlantStore((state)=> state.plants)
  return (
    // <View style={styles.container}>
      // <Text>Open up App.tsx to start working on your app!</Text>
      //  <StatusBar style="auto" />
    // </View>
    <FlatList
      style={styles.container}
       contentContainerStyle={styles.contentContainer}
       data={plants}
       renderItem={({item})=> <PlantCard plant={item}/>}
       ListEmptyComponent={
        <PlantlyButton
        title="Add your first plant"
        onPress={()=>{
          router.navigate("/new")
        }}
        
        />
       }
    
    />
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    
  },
  innerText:{
      fontSize:20
  },
  contentContainer:{
    padding:12
  }
});
