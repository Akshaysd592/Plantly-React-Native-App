import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "@/theme";
import React from "react";

type Props = {
    title:string;
    onPress : ()=>void;
}
export default function PlantlyButton({title,onPress}:Props){

    return(
        <Pressable onPress={onPress} style={styles.button}>
           <Text  style={styles.text}>{title}</Text>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
      button: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 6,
        backgroundColor: theme.colorGreen,
      },
})