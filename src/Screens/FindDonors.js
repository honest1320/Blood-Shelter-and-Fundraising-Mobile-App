import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { bloodGroups } from "../../mock_cities_blood";
import DropdownList from "../Shared/components/DropdownList";
import RadioForm from "react-native-simple-radio-button";
import { useSelector } from "react-redux";

import Constants from "expo-constants";

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8080/api`;

const FindDonors = () => {
  const navigation = useNavigation();

  const { bloodgrp } = useSelector((state) => state.appointment);

  const publicRequest = axios.create({
    baseURL: uri,
  });

  // *********************************************************************
  const [jina, setJina] = useState("");
  const [kimlik, setKimlik] = useState("");
  const [yas, setYas] = useState("");
  const [hastane, setHastane] = useState("");
  const [kan, setKan] = useState("");

  const [chosenPriority, setChosenPriority] = useState("");
  const priorities = [
    { label: "LESS URGENT", value: "LESS URGENT" },
    { label: "URGENT", value: "URGENT" },
    { label: "VERY URGENT", value: "VERY URGENT" },
  ];

  // ************************************************************************

  const [chosenGender, setChosenGender] = useState("");
  const genders = [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ];

  const handleSubmit = async () => {
    try {
      const res = await publicRequest.post("/requests/", {
        //tcKimlik: tcKimlik,
        name: jina,
        place: hastane,
        age: yas,
        priority: chosenPriority,
        gender: chosenGender,
        bloodType: bloodgrp,
      });
      navigation.navigate("HomeScreen");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <KeyboardAvoidingView
          behavior="position"
          style={{ backgroundColor: "white", flex: 1 }}
        >
          <View style={{ flex: 1, marginHorizontal: 32, marginVertical: 40 }}>
            <View style={{ alignItems: "center", marginBottom: 22 }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginVertical: 22,
                  color: "black",
                }}
              >
                New Request
              </Text>
            </View>

            {/* ****************************************************************** */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                //margin: 25,
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  marginVertical: 8,
                }}
              >
                Name Surname :
              </Text>

              <View
                style={{
                  width: "60%",
                  height: 48,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 16,
                }}
              >
                <TextInput
                  placeholderTextColor={"black"}
                  onChangeText={(event) => {
                    setJina(event);
                  }}
                  style={{
                    width: "100%",
                  }}
                />
              </View>
            </View>

            {/* ****************************************************************** */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                //margin: 25,
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  marginVertical: 8,
                }}
              >
                Codice Fiscale :
              </Text>

              <View
                style={{
                  width: "60%",
                  height: 48,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 16,
                }}
              >
                <TextInput
                  placeholderTextColor={"black"}
                  keyboardType="numeric"
                  onChangeText={(event) => {
                    setKimlik(event);
                  }}
                  style={{
                    width: "100%",
                  }}
                  onEndEditing={this.clearFocus}
                  returnKeyType="done"
                />
              </View>
            </View>

            {/* ****************************************************************** */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                //margin: 25,
                //marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  marginVertical: 8,
                }}
              >
                Blood Group :
              </Text>
              <DropdownList bloodGroups={bloodGroups} />
            </View>

            {/* ****************************************************************** */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  marginVertical: 8,
                }}
              >
                Gender :
              </Text>
              <RadioForm
                buttonColor={"#D61B1F"}
                //formHorizontal={true}
                selectedButtonColor={"#D61B1F"}
                radio_props={genders}
                initial={0}
                onPress={(value) => {
                  setChosenGender(value);
                }}
              />
            </View>

            {/* ****************************************************************** */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                //margin: 25,
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  marginVertical: 8,
                }}
              >
                Age :
              </Text>

              <View
                style={{
                  width: "60%",
                  height: 48,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 16,
                }}
              >
                <TextInput
                  placeholderTextColor={"black"}
                  keyboardType="numeric"
                  onChangeText={(event) => {
                    setYas(event);
                  }}
                  style={{
                    width: "100%",
                  }}
                  onEndEditing={this.clearFocus}
                  returnKeyType="done"
                />
              </View>
            </View>

            {/* ****************************************************************** */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  marginVertical: 8,
                }}
              >
                Urgency :
              </Text>
              <RadioForm
                buttonColor={"#D61B1F"}
                selectedButtonColor={"#D61B1F"}
                radio_props={priorities}
                initial={0} //initial value of this group
                onPress={(value) => {
                  setChosenPriority(value);
                }}
              />
            </View>

            {/* ****************************************************************** */}

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                //margin: 25,
                marginBottom: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  marginVertical: 8,
                }}
              >
                Hospital :
              </Text>

              <View
                style={{
                  width: "60%",
                  height: 48,
                  borderColor: "black",
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 16,
                }}
              >
                <TextInput
                  placeholderTextColor={"black"}
                  onChangeText={(event) => {
                    setHastane(event);
                  }}
                  style={{
                    width: "100%",
                  }}
                />
              </View>
            </View>

            {/* ****************************************************************** */}

            <View
              style={{
                justifyContent: "center",
                margin: 25,
              }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.btnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FindDonors;

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    //borderColor: "#007160",
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D61B1F",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
