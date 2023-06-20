import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colorValue from "../../Shared/commoStyle/ColorValue";
import {
  commonJustify,
  commonStyle,
} from "../../Shared/commoStyle/CommonStyle";
import { useNavigation } from "@react-navigation/native";

const DonationComponent = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.main, commonJustify.rowSpaceBetween]}>
      <View style={{ flex: 0.7 }}>
        <View style={[styles.margin]}>
          <Text style={{ fontWeight: 700, fontSize: 14 }}>Name Surname</Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={
                commonStyle({
                  fontSize: 14,
                  color: colorValue.liteDark2,
                }).text
              }
            >
              {item.name}
            </Text>
            <Text
              style={
                commonStyle({
                  fontSize: 14,
                  color: colorValue.liteDark2,
                }).text
              }
            >
              , {item.age}
            </Text>
          </View>
        </View>

        <View style={[styles.margin]}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Hospital</Text>
          <Text
            style={
              commonStyle({
                fontSize: 14,
                color: colorValue.liteDark2,
              }).text
            }
          >
            {item.place}
          </Text>
        </View>
      </View>

      {/* ***********************BOXXX*************************************** */}
      <View
        style={{
          flex: 0.25,
          borderRadius: 10,
          flexDirection: "column",
          backgroundColor: "#3A3232",
          ...styles.requestStatus,
        }}
      >
        <View
          style={{
            flex: 0.25,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#D61B1F",
            borderTopEndRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 10,
              fontWeight: "bold",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            {item.priority}
          </Text>
        </View>

        <View
          style={{
            flex: 0.7,
            alignItems: "center",
            justifyContent: "center",
            borderBottomEndRadius: 10,
          }}
        >
          <Text style={{ fontSize: 26, color: "white" }}>{item.bloodType}</Text>
        </View>
      </View>
    </View>
  );
};

export default DonationComponent;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    marginTop: 10,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  margin: {
    marginLeft: 10,
    padding: 5,
  },
  requestStatus: {
    marginVertical: 12,
    marginRight: 20,
    overflow: "hidden",
    height: 90,
  },
});
