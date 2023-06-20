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
import DateTimePicker from "@react-native-community/datetimepicker";
import StepTopIndicator from "../Shared/components/StepTopIndicator";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setKimlik, setName, setTarih } from "../Redux/appointmentSlice";
import { decrement, increment } from "../Redux/stepIndicatorSlice";

const FormPage = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [jina, setJina] = useState("");
  const [id, setId] = useState("");
  const [tarehe, setTarehe] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const dispatch = useDispatch();

  const { currentValue } = useSelector((state) => state.stepIndicator);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const confirmIosDate = () => {
    setTarehe(date.toDateString());
    toggleDatePicker();
  };

  const dateOnchange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setTarehe(currentDate.toDateString());
      }
    } else {
      toggleDatePicker();
    }
  };

  const nextStep = () => {
    dispatch(increment());
    dispatch(setTarih(tarehe));
    dispatch(setName(jina));
    dispatch(setKimlik(id));
    navigation.navigate("FormPage2");
  };
  const prevStep = () => {
    dispatch(decrement());
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, marginHorizontal: 32, marginVertical: 40 }}>
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
            margin: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.rectangle}>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  alignItems: "center",
                  //justifyContent: "center",
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
                  Appointment Date:
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
                  (Select)
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* ****************************************************************** */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Name Surname
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
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

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Codice Fiscale
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholderTextColor={"black"}
              keyboardType="numeric"
              onChangeText={(event) => {
                setId(event);
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

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Select Appointment Date
          </Text>
          {!showPicker && (
            <Pressable onPress={toggleDatePicker}>
              <TextInput
                style={{
                  height: 50,
                  fontSize: 14,
                  fontWeight: "500",
                  borderRadius: 8,
                  borderWidth: 1.5,
                  borderColor: "black",
                  paddingHorizontal: 20,
                  marginBottom: 20,
                }}
                placeholder="15, Haziran 2023"
                value={tarehe}
                onChangeText={setTarehe}
                editable={false}
                onPressIn={toggleDatePicker}
              />
            </Pressable>
          )}
          {showPicker && (
            <DateTimePicker
              mode="date"
              value={date}
              onChange={dateOnchange}
              display="spinner"
              minimumDate={new Date("2023-6-20")}
              style={{ height: 120, marginTop: -10 }}
            />
          )}

          {showPicker && Platform.OS == "ios" && (
            <View>
              <TouchableOpacity onPress={confirmIosDate} style={styles.dateBtn}>
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 25,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            disabled={currentValue == 0}
            onPress={() => prevStep()}
          >
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
    borderWidth: 0.1,

    height: 120,
    // backgroundColor: "blue",
    // marginHorizontal: 20,
    //bottom: -60,
    elevation: 10,
    padding: 20,
    justifyContent: "center",
  },
});

export default FormPage;
