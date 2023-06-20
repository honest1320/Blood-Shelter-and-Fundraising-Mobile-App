import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import ShelterComponent from "./ShelterComponent";
import { shelters } from "../../mocks2";

const Shelters = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center", marginBottom: 22 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 22,
            color: "black",
          }}
        >
          Available Shelters
        </Text>
      </View>
      <FlatList
        data={shelters}
        renderItem={({ item }) => <ShelterComponent item={item} />}
      />
    </SafeAreaView>
  );
};

export default Shelters;
