import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StepTopIndicator from "../Shared/components/StepTopIndicator";
import { useNavigation } from "@react-navigation/native";
import PreScreening from "./PreScreening";
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/stepIndicatorSlice";
import axios from "axios";

import Constants from "expo-constants";

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8080/api`;

const FormPage3 = () => {
  const navigation = useNavigation();

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const dispatch = useDispatch();

  const { currentValue } = useSelector((state) => state.stepIndicator);
  const { name, tcKimlik, tarih, place, city } = useSelector(
    (state) => state.appointment
  );

  const publicRequest = axios.create({
    baseURL: uri,
  });

  const handleSubmit = async () => {
    try {
      const res = await publicRequest.post("/appointment/", {
        tcKimlik: tcKimlik,
        name: name,
        location: place,
        date: tarih,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const nextStep = () => {
    dispatch(increment());
    handleSubmit();
    navigation.navigate("SuccessAppointment");
  };
  const prevStep = () => {
    dispatch(decrement());
    navigation.navigate("FormPage2");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginVertical: 40, flex: 1, marginHorizontal: 10 }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
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
            marginTop: 20,
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
                    fontWeight: 400,
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
                    fontWeight: 400,
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

        <PreScreening />

        {/* ****************************************************************** */}

        <View style={styles.checkBoxContainer}>
          <View>
            <Checkbox
              style={styles.checkBox}
              value={toggleCheckBox}
              onValueChange={(newValue) => {
                setToggleCheckBox(newValue);
              }}
              //color={isChecked ? "#007260" : undefined}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => navigation.navigate("ModalView")}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#D61B1F",
                  //paddingLeft: 60,
                }}
              >
                Consent Form*
              </Text>
            </TouchableOpacity>
            <Text> I have read, understood and accept.</Text>
          </View>
        </View>

        {/* ****************************************************************** */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 25,
          }}
        >
          <TouchableOpacity style={styles.button} onPress={() => prevStep()}>
            <Text style={styles.btnText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            //disabled={currentValue == 2}
            onPress={() => nextStep()}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    width: 360,
    borderRadius: 10,
    borderWidth: 0.5,
    height: 100,
    elevation: 10,
    padding: 10,
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.6)",
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "white",
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
    color: "#D61B1F",
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginTop: 40,
    marginHorizontal: 20,
    alignItems: "center",
  },
  checkBox: {
    width: 20,
    height: 20,
    marginRight: 10,
    //borderRadius: 12,
  },
  closeButton: {
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
  },
});

export default FormPage3;
