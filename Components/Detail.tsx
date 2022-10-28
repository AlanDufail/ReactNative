import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import Post from "./Post";

interface DetailProps {
  id: string;
}

export default function Detail({ id }: DetailProps) {

    const navigation = useNavigation();

    return (
        <View>
            <Post image={`https://picsum.photos/id/${id}/1544/1024`}/>
        </View>
    )

}
