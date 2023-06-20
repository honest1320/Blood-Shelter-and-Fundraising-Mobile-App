import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { ItemArray } from "./Data";
import { useNavigation } from "@react-navigation/native";

const Body = () => {
  return (
    <FlatList
      data={ItemArray}
      //numColumns={3}
      horizontal={true}
      renderItem={({ item }) => <Card item={item} />}
    />
  );
};

export default Body;

const Card = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.page)}>
      <View style={styles.card}>
        <Image
          style={{
            width: "65%",
            height: "65%",
            resizeMode: "contain",
            marginBottom: 3,
          }}
          source={item.image}
        />
        <Text
          style={{
            fontSize: 13,
            fontFamily: "System",
            marginTop: 5,
          }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
    paddingTop: 4,
    width: 130,
    height: 100,
    shadowOpacity: 0.2,
    shadowColor: "#000",
    shadowOffset: {
      height: 0.2,
      width: 0.2,
    },
    backgroundColor: "#fff",
    borderRadius: 15,
  },
});
