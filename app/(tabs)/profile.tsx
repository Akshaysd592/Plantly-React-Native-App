
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/theme";

export default function ProfilePage(){
    return(
       <View style={styles.container}>
        <Text style={styles.text}>Profile page</Text>
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