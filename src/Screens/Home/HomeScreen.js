import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Slider from "../../Shared/components/Slider";
import Body from "./Body";
import axios from "axios";
import DonationComponent from "./DonationComponent";
import { useState, useEffect } from "react";

import Constants from "expo-constants";

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8080/api`;

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${uri}/requests/`);
      //console.log(response.data);
      setData(response.data);
    } catch (err) {}
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Slider />
        <Body />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ fontWeight: "600" }}>Recent requests</Text>
          <TouchableOpacity onPress={() => navigation.navigate("BloodDetails")}>
            <Text style={{ fontWeight: "600" }}>Show all..</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        // data={requests}
        data={data}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => <DonationComponent item={item} />}
      />
    </View>
  );
};

//style={{ width: "100%", height: "100%" }}

export default HomeScreen;
