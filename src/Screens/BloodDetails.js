import { Image, StyleSheet, View, Text } from "react-native";
//import Chart from "../components/Chart";
import { FlatList, SafeAreaView } from "react-native";
import DonationComponent from "./Home/DonationComponent";
import { chart, requests, user } from "./Blood/Components/mocks";
import Chart from "./Blood/Components/Chart";
import axios from "axios";

import { useState, useEffect } from "react";

import Constants from "expo-constants";

const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8080/api`;

export default BloodDetails = () => {
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
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#D61B1F" }} />
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "15%",
          backgroundColor: "#D61B1F",
          //zIndex: -1,
          top: 0,
        }}
      />
      <View style={{ ...styles.shadow, paddingHorizontal: 15 }}>
        <View style={{ alignSelf: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 21,
              paddingBottom: 10,
              //color: "white",
            }}
          >
            Blood Donation Requests
          </Text>
        </View>

        <View
          style={{
            ...styles.headerChart,
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
            }}
          >
            <View
              style={{
                flex: 0,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 32 }}>291</Text>
              <Text
                style={{
                  paddingHorizontal: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#ED6004",
                }}
              >
                -12%
              </Text>
            </View>
            <View
              style={{
                flex: false,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: "#D61B1F",
                  paddingHorizontal: 10,
                }}
              >
                +49%
              </Text>
              <Text style={{ fontSize: 32 }}>481</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 22,
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "400" }}>Donors</Text>
            <Text style={{ fontSize: 16, fontWeight: "400" }}>Requests</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Chart chart={chart} />
          </View>
        </View>
      </View>

      {/* ********************************************************************* */}

      <FlatList
        data={data}
        renderItem={({ item }) => <DonationComponent item={item} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginRight: 15,
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 30,
    zIndex: 99,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
