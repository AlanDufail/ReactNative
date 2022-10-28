import React, { useMemo, useState } from "react";

import { View, Image, Text, StyleSheet, TouchableOpacity, Share } from "react-native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import * as Random from "expo-random";

interface InstaCardProps {
  caption: string;
  image: string;
}

export default function Post({ caption, image }: InstaCardProps) {
  const [like, setLike] = useState(false);
  const [share, setShare] = useState(false);
  const randomLike = useMemo(() => Random.getRandomBytes(1), []);

  const shareImage = async () => {
    Share.share({message: 'Lets share this image', title: 'Checkout this image! '});
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: image }} />
      <View style={styles.buttonsPost}>
        <TouchableOpacity onPress={() => setLike(!like)}>
          {like ? (
            <FontAwesome name="heart" size={24} color="red" />
          ) : (
            <AntDesign name="hearto" size={24} color="black" />
          )}
        </TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={24} color="black" />
        <TouchableOpacity onPress={shareImage}>
          {share ? (
            <FontAwesome name="paper-plane-o" size={24} color="grey" />
          ) : (
            <FontAwesome name="paper-plane-o" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.desc}>
        <Text>{like ? randomLike[0] + 1 : randomLike} likes</Text>
        <Text>{caption}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  buttonsPost: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: 300,
    objetFit: "contain",
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});
