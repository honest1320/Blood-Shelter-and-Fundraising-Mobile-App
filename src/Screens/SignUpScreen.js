import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";

import Loader from "../Shared/components/Loader";
import Input from "../Shared/components/Input";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8080/api/`;

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({
    tcKimlik: "",
    fullname: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const publicRequest = axios.create({
    baseURL: uri,
  });

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.tcKimlik) {
      handleError("Please input tcKimlik", "tcKimlik");
      isValid = false;
    } else if (!inputs.tcKimlik.match(/^[1-9]{1}[0-9]{9}[02468]{1}$/)) {
      handleError("Please input a valid tcKimlik", "tcKimlik");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError("Please input fullname", "fullname");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = async () => {
    try {
      const res = await publicRequest.post("/auth/register", inputs);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>
          Register
        </Text>
        <Text style={{ color: "grey", fontSize: 18, marginVertical: 10 }}>
          Enter Your Details to Register
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "tcKimlik")}
            onFocus={() => handleError(null, "tcKimlik")}
            iconName="dialpad"
            label="Codice Fiscale"
            placeholder="Enter your Codice Fiscale"
            error={errors.tcKimlik}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="account-outline"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.fullname}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="Password "
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <TouchableOpacity
            onPress={validate}
            activeOpacity={0.7}
            style={{
              height: 55,
              width: "100%",
              backgroundColor: "#D61B1F",
              marginVertical: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Register
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("LoginScreen")}
            style={{
              color: "#D61B1F",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Do you already have an account? Login
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
