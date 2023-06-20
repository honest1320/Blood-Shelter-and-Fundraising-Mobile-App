import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

const ShelterComponent = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...styles.main,
        flexDirection: "row",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      <View style={{ flex: 0.7 }}>
        <View style={[styles.margin]}>
          <Text style={{ fontSize: 14 }}>Place</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "black",
              }}
            >
              {item.name}
            </Text>
          </View>
        </View>

        <View style={[styles.margin]}>
          <Text style={{ fontSize: 14 }}>Telephone</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: "black",
            }}
          >
            {item.phone}
          </Text>
        </View>

        <View style={[styles.margin]}>
          <Text style={{ fontSize: 14 }}>Capacity</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: "black",
            }}
          >
            {item.capacity}
          </Text>
        </View>

        <View style={[styles.margin]}>
          <Text style={{ fontSize: 14 }}>Availability</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              color: "black",
            }}
          >
            {item.available_rooms}
          </Text>
        </View>
      </View>

      {/* ***********************BUTTON*************************************** */}

      <View
        style={{
          flex: 0.3,
          alignItems: "center",
          justifyContent: "center",
          paddingRight: 15,
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4,
            elevation: 3,
            backgroundColor: "#D61B1F",
            height: 60,
            width: 120,
          }}
          onPress={() => console.log("aye")}
        >
          <Text
            style={{
              fontSize: 16,
              lineHeight: 21,
              fontWeight: "bold",

              color: "white",
            }}
          >
            Request
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShelterComponent;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 0.5,
    marginHorizontal: 10,
  },
  margin: {
    marginLeft: 10,
    padding: 5,
  },
});

/* <Button
          title="Donate"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "rgba(111, 202, 186, 1)",
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 13 }}
          containerStyle={{
            marginHorizontal: 150,
            height: 50,
            width: 80,
            marginVertical: 10,
          }}
          onPress={() => console.log("aye")}
        /> */
