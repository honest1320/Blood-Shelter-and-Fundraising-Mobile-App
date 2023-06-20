import React from "react";
import { Pressable } from "react-native";
import { Button, StyleSheet, Text, View } from "react-native";
import { BackHandler } from "react-native";
import { Image } from "react-native-elements";

const Success = ({ navigation }) => {
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/thank-you-heart-day-minimal-illustration-vector-appreciate-donation-caring-kindness-helping_537522-91.jpg",
          }}
          resizeMode="contain"
          style={{
            width: 250,
            height: 250,
          }}
        />

        <Text
          style={{
            marginTop: 10,
            fontSize: 30,
            lineHeight: 36,
          }}
        >
          Congratulations!
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 8,
            color: "#898C95",
            fontSize: 16,
          }}
        >
          Donation was made successfully!
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("MapComponent")}
      >
        <Text style={styles.text}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 30,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Success;
