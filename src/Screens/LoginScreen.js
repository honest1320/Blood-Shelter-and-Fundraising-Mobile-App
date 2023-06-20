import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  Linking,
} from "react-native";
import Input from "../Shared/components/Input";
import Loader from "../Shared/components/Loader";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../Redux/userSlice";
import axios from "axios";

import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8080/api/`;

const LoginScreen = () => {
  const { currentUser } = useSelector((state) => state.user);

  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({ tcKimlik: "", password: "" });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  const publicRequest = axios.create({
    baseURL: uri,
  });

  // const publicRequest2 = axios.create({
  //   baseURL: "http://10.7.85.162:8080/api",
  // });

  const login = async () => {
    dispatch(loginStart());
    try {
      const { data } = await publicRequest.post("/auth/login", inputs);
      console.log(data);
      dispatch(loginSuccess(data.name));
      navigation.navigate("BottomNavigation");
    } catch (error) {
      dispatch(loginFailure());
      console.log(error);
    }
  };

  const validate = async () => {
    Keyboard.dismiss();
    if (!inputs.tcKimlik) {
      handleError("Please enter your SPID number", "tcKimlik");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please enter your password", "password");
    }
    login();
  };

  // ****************************************************
  const openBrowser = () => {
    const uri =
      "https://dichiarazioneprecompilatafe.agenziaentrate.gov.it/rp/register/s1";

    Linking.openURL(uri).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  // ****************************************************

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Loader visible={loading} />
      <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <Text style={{ color: `black`, fontSize: 40, fontWeight: "bold" }}>
          Login
        </Text>

        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "tcKimlik")}
            onFocus={() => handleError(null, "tcKimlik")}
            iconName="account-outline"
            label="Codice Fiscale"
            placeholder="Enter your Codice Fiscale"
            error={errors.tcKimlik}
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
          <View
            style={{
              //width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              //paddingHorizontal: 50,
              margin: 25,
            }}
          >
            <TouchableOpacity
              onPress={validate}
              activeOpacity={0.7}
              style={{
                height: 55,
                width: "45%",
                backgroundColor: "#D61B1F",
                borderRadius: 10,
                marginVertical: 10,
                //paddingRight: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openBrowser}
              activeOpacity={0.7}
              style={{
                height: 55,
                width: "45%",
                backgroundColor: "#D61B1F",
                borderRadius: 10,
                marginVertical: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                Login with SPID
              </Text>
            </TouchableOpacity>
          </View>

          {/* //*******************************************************************  */}
          <Text
            onPress={() => navigation.navigate("SignUpScreen")}
            style={{
              color: "#D61B1F",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Don't have an account yet?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
