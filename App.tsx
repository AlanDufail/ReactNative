// PART 2 WITH DATA2
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import type { RandomImagesJSON, RandomImagesJSON2 } from "./types";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//IMPORT COMPONENT
import Post from "./Components/Post";
import Detail from "./Components/Detail";

const data = require("./random-images.json") as RandomImagesJSON[];
const data2 = require("./random-images-2.json") as RandomImagesJSON2[];

function Home() {
  const { navigate } = useNavigation();

  const handleOnPress = (id: string) => {
    navigate('Detail',
      id
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handleOnPress}>
      <Post caption={item.caption} image={item.download_url} />
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data2.slice(0.1)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="My Instagram" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",

  },
});
