import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OnBoardingScreen from "../Screens/OnBoardingScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";

import DrawerNavigation from "./DrawerNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import Donations from "../Screens/Donations";
import MapComponent from "../Screens/MapComponent";
import BottomNavigation from "./BottomNavigation";
import DetailsScreen from "../Screens/DetailsScreen";
import Payment from "../Screens/Payment";
import BloodDetails from "../Screens/BloodDetails";
import FormPage from "../Screens/FormPage";
import FormPage2 from "../Screens/FormPage2";
import FormPage3 from "../Screens/FormPage3";
import SuccessAppointment from "../Screens/SuccessAppointment";
import ModalView from "../Shared/components/ModalView";
import FindDonors from "../Screens/FindDonors";
import Appointments from "../Screens/Appointments";
import Shelters from "../Screens/Shelters";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{ headerMode: false }}
      /> */}

      {/* <Stack.Screen
        options={{ headerMode: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="SignUpScreen"
        component={SignUpScreen}
      /> */}
      <Stack.Screen
        name="OnBoardingScreen"
        component={OnBoardingScreen}
        options={{ headerMode: false }}
      />

      <Stack.Screen
        options={{ headerMode: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="SignUpScreen"
        component={SignUpScreen}
      />

      <Stack.Screen
        options={{ headerMode: false }}
        name="BottomNavigation"
        component={BottomNavigation}
      />
      <Stack.Screen name="MapComponent" component={MapComponent} />

      <Stack.Screen
        options={{ headerMode: false }}
        name="Donations"
        component={Donations}
      />

      <Stack.Screen
        options={{ headerMode: false }}
        name="DetailsScreen"
        component={DetailsScreen}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="BloodDetails"
        component={BloodDetails}
      />

      <Stack.Screen
        options={{ headerMode: false }}
        name="Payment"
        component={Payment}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="FormPage"
        component={FormPage}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="FormPage2"
        component={FormPage2}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="FormPage3"
        component={FormPage3}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="ModalView"
        component={ModalView}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="SuccessAppointment"
        component={SuccessAppointment}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="Shelters"
        component={Shelters}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="FindDonors"
        component={FindDonors}
      />
      <Stack.Screen
        options={{ headerMode: false }}
        name="Appointments"
        component={Appointments}
      />
      <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
