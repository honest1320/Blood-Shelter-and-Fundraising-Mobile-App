import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8080/api`;

const Appointments = () => {
  const { currentUser } = useSelector((state) => state.user);

  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const publicRequest = axios.create({
    baseURL: uri,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`${uri}/appointment`);
      //console.log(response.data);
      setData(response.data);
    } catch (err) {}
  };

  const handleRemove = async (item) => {
    //dispatch(loginStart());
    try {
      const { data } = await publicRequest.delete("/appointment/", item);
      console.log(data);
      //dispatch(loginSuccess(data.name));
      getData();
    } catch (error) {
      //dispatch(loginFailure());
      console.log(error);
    }

    //console.log(item);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        {/* <Image
          source={require("../../assets/image/Tick.png")}
          style={styles.success}
        /> */}

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 12,
            color: "black",
          }}
        >
          My Appintments
        </Text>

        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginTop: 50,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* backgroundColor: "blue" flex: 0.7, margin: 20,  */}
                <View style={{ marginRight: 8 }}>
                  <View style={styles.rectangle}>
                    <View style={{ flexDirection: "column" }}>
                      <View style={styles.lines}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8,
                          }}
                        >
                          Name Surname:
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            paddingLeft: 20,
                            //alignItems: "center",
                            //justifyContent: "center",
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                      <View style={styles.lines}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8,
                          }}
                        >
                          SPID No:
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            paddingLeft: 20,
                            //alignItems: "center",
                            //justifyContent: "center",
                          }}
                        >
                          {item.tcKimlik}
                        </Text>
                      </View>
                      <View style={styles.lines}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8,
                          }}
                        >
                          Appointment Date:
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            paddingLeft: 8,
                          }}
                        >
                          {item.date}
                        </Text>
                      </View>
                      <View style={styles.lines}>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8,
                          }}
                        >
                          Appointment Hub:
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            paddingLeft: 10,
                          }}
                        >
                          {item.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    //alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 2,
                      height: 60,
                      width: 100,
                      justifyContent: "center",
                      borderRadius: 4,
                      elevation: 3,
                      borderColor: "black",
                      borderWidth: 0.6,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => handleRemove(item.tcKimlik)}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          //justifyContent: "space-between",
                        }}
                      >
                        <Icon
                          //style={{ marginTop: 10, padding: 12 }}
                          name="delete"
                          color="#D61B1F"
                          size={28}
                        />
                        <Text
                          style={{
                            fontSize: 16,
                            fontWeight: 400,
                            marginVertical: 8,
                          }}
                        >
                          DELETE
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  success: {
    width: 100,
    height: 100,
  },
  msg: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 20,
  },
  rectangle: {
    width: 300,
    borderRadius: 10,
    borderWidth: 0.5,

    height: 150,
    elevation: 10,
    padding: 20,
    justifyContent: "center",
  },
  lines: {
    alignItems: "center",
    flexDirection: "row",
  },
});
