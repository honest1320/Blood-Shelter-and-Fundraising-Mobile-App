import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text, StatusBar } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { getMyStringValue, setStringValue } from "../Global/AsyncStorage";
import { commonStyle } from "../Shared/commoStyle/CommonStyle";

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const onBoardingDone = async () => {
    try {
      await setStringValue("onboarding", "true");
      navigation.navigate("LoginScreen");
      //navigation.navigate("BottomNavigation");
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.main}>
        <Onboarding
          pages={Array}
          onSkip={() => onBoardingDone()}
          onDone={() => onBoardingDone()}
          titleStyles={
            commonStyle({
              fontSize: 25,
              //fontFamily: fontValue.PoppinsMediumItalic,
            }).text
          }
          subTitleStyles={commonStyle({ fontSize: 16 }).text}
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
  },
});

const Array = [
  {
    backgroundColor: "#fff",
    image: <Image source={require("../../assets/onboarding.png")} />,
    title: "Donate and Request Blood From Your Phone",
    subtitle: "Donate and save multiple lives..",
  },
  {
    backgroundColor: "#fff",
    image: (
      <Image
        style={{ width: 400, height: 400, resizeMode: "contain" }}
        source={require("../../assets/shelter.png")}
      />
    ),
    title: "Easily Find Shelter in Times of Crisis ",
    subtitle: "This is the subtitle that sumplements the title.",
  },
];
