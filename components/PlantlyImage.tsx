import { Image, useWindowDimensions } from "react-native";
import React from "react";

type Props = {
  size?: number;
  imageUri?: string;
};

export default function PlantlyImage({ size, imageUri }: Props) {
  const { width } = useWindowDimensions();

  const imageSize = size || Math.min(width / 1.5, 400); // for image consistency
  return (
    <Image
      source={
        imageUri ? { uri: imageUri } : require("@/assets/plant-emoji.png")
      }
      style={{ height: imageSize, width: imageSize, borderRadius: 6 }}
    />
  );
}
