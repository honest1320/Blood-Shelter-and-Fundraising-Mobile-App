import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const SuccessAppointment = () => {
  const navigation = useNavigation();
  const { name, tcKimlik, tarih, city, place } = useSelector(
    (state) => state.appointment
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/image/Tick.png")}
          style={styles.success}
        />
        <Text style={styles.msg}>
          {"Your appointment was succesfully made!"}
        </Text>

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <View
          style={{
            marginHorizontal: 50,
            margin: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "400",
                marginBottom: 20,
                fontStyle: "italic",
              }}
            >
              Your pre-screening test is successfully submitted! Please visit
              the nearest health facility for further assessment.
            </Text>
          </View>
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
                    paddingLeft: 60,
                    //alignItems: "center",
                    //justifyContent: "center",
                  }}
                >
                  {name}
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
                  Codice Fiscale:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingLeft: 42,
                    //alignItems: "center",
                    //justifyContent: "center",
                  }}
                >
                  {tcKimlik}
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
                    paddingLeft: 30,
                    //alignItems: "center",
                    //justifyContent: "center",
                  }}
                >
                  {tarih}
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
                  Appointment Hhub:
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
                  {",\n"}
                  {city}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <TouchableOpacity
          style={styles.gotohome}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Return To Home Page
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SuccessAppointment;

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
  gotohome: {
    width: 190,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 30,
    backgroundColor: "#D61B1F",
  },
  rectangle: {
    width: 380,
    borderRadius: 10,
    borderWidth: 0.5,

    height: 220,
    // backgroundColor: "blue",
    // marginHorizontal: 20,
    //bottom: -60,
    elevation: 10,
    padding: 20,
    justifyContent: "center",
  },
  lines: {
    alignItems: "center",
    flexDirection: "row",
  },
});
