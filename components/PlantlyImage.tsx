
import { Image, useWindowDimensions } from "react-native"
import React from "react";


export default function PlantlyImage({size}:{size?:number}){
    const {width}  = useWindowDimensions();

    const imageSize = size ||  Math.min(width/1.5 , 400); // for image consistency
    return(
        <Image
          source={require('@/assets/plant-emoji.png')}
          style={{height:imageSize,width:imageSize}}
        
        />
    )
}