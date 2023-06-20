import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DropdownList from "../Shared/components/DropdownList";
import StepTopIndicator from "../Shared/components/StepTopIndicator";
import { bloodGroups, cities } from "../../mock_cities_blood";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/stepIndicatorSlice";

const FormPage2 = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const { currentValue } = useSelector((state) => state.stepIndicator);

  const { tarih, city, place } = useSelector((state) => state.appointment);

  const nextStep = () => {
    dispatch(increment());

    navigation.navigate("FormPage3");
  };
  const prevStep = () => {
    dispatch(decrement());
    navigation.navigate("FormPage");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, marginHorizontal: 32, marginVertical: 40 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 8,
              color: "black",
            }}
          >
            New Appointment
          </Text>
        </View>
        {/* ****************************************************************** */}

        <StepTopIndicator position={currentValue} />

        {/* ****************************************************************** */}
        <View
          style={{
            marginHorizontal: 50,
            margin: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.rectangle}>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginVertical: 8,
                  }}
                >
                  Donation Type:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingLeft: 60,
                    //alignItems: "center",
                    //justifyContent: "center",
                  }}
                >
                  Whole Blood
                </Text>
              </View>
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginVertical: 8,
                  }}
                >
                  Donation Hub:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingLeft: 38,
                    //alignItems: "center",
                    //justifyContent: "center",
                  }}
                >
                  {place}
                  {", \n"}
                  {city}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* ****************************************************************** */}

        <DropdownList bloodGroups={bloodGroups} />
        <DropdownList cities={cities} />
        <DropdownList />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <TouchableOpacity style={styles.button} onPress={() => prevStep()}>
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => nextStep()}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dateBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#D61B1F",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  rectangle: {
    width: 340,
    borderRadius: 10,
    borderWidth: 0.5,

    height: 120,
    // backgroundColor: "blue",
    // marginHorizontal: 20,
    //bottom: -60,
    elevation: 10,
    padding: 20,
    justifyContent: "center",
  },
});

export default FormPage2;
