import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home/HomeScreen";
import { Icon, Badge } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";
import colorValue from "../Shared/commoStyle/ColorValue";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import ProfileScreen from "../Screens/ProfileScreen";
import MapComponent from "../Screens/MapComponent";
import Donations from "../Screens/Donations";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colorValue.primary,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color={color} />
          ),
          headerLeft: () => (
            <View style={{ marginHorizontal: 5 }}>
              <Image
                resizeMode="contain"
                style={{ width: 25 }}
                source={require("../../assets/favicon.png")}
              />
            </View>
          ),

          headerRight: () => (
            <View style={{ marginHorizontal: 5 }}>
              <View>
                <Badge status="error" value={5} />
              </View>
              <View style={{ marginBottom: 8 }}>
                <Fontisto name="bell" size={25} />
              </View>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="MapComponent"
        component={MapComponent}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="map" size={24} color={color} />
          ),
          title: "",
        }}
      />

      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <Tab.Screen
        name="Donations"
        component={Donations}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="volunteer-activism" size={24} color={color} />
          ),
          title: "",
        }}
      />
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          title: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
