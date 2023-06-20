import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import Constants from "expo-constants";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(":").shift()}:8080`;

const Payment = () => {
  const navigation = useNavigation();
  const { name, amount } = useSelector((state) => state.donation);

  const stripe = useStripe();

  const subscribe = async () => {
    try {
      const response = await fetch(`${uri}/pay`, {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      console.log(data);

      if (!response.ok) return Alert.alert(data.message);

      const clientSecret = data.clientSecret;

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);

      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert("Donation Completed successfully, Thank You!");
    } catch (err) {
      console.error(err);
      Alert.alert("Something went wrong, please try again!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 32,
            color: "black",
          }}
        >
          {name}
        </Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {/* <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={{
            width: 300,
            fontSize: 20,
            padding: 10,
            borderWidth: 1,
          }}
        /> */}
        <TextInput
          value={amount}
          style={{
            width: 300,
            fontSize: 20,
            padding: 10,
            borderWidth: 1,
          }}
        />

        {/* <Button title="Bağış Yap- 500 TRY" onPress={subscribe} /> */}

        <TouchableOpacity
          onPress={subscribe}
          style={{
            height: 50,
            width: 130,
            marginTop: 20,
            backgroundColor: `#34665b`,
            borderWidth: 0.5,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Donate
          </Text>
        </TouchableOpacity>

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

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
