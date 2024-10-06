
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import PlantlyButton from "@/components/PlantlyButton";

export default function ProfilePage(){
   const toggleHasOnboarded = useUserStore((state)=> state.toggleHasOnboarded)
    return(
       <View style={styles.container}>
        {/* <Text style={styles.text}>Profile page</Text> */}
        {/* <Button title="Back to onboarding" onPress={toggleHasOnboarded}/> */}
        <PlantlyButton title="Back to onboarding" onPress={toggleHasOnboarded}/>
       </View>
    )
}

const styles = StyleSheet.create({
     container:{
        flex:1,
        backgroundColor:theme.colorWhite,
        justifyContent:'center',
        alignItems:'center'
     },
     text:{
        textAlign:'center',
        fontSize:20
     }
})