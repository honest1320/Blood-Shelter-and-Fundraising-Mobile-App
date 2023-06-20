import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const { currentUser } = useSelector((state) => state.user);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ ...commonJustify.rowCenter, marginVertical: 20 }}>
        <Avatar
          size={150}
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          containerStyle={{ backgroundColor: "#5E5E5E" }}
        />
      </View>

      <View>
        <Text
          style={[
            commonStyle({ fontSize: 25, color: "#7E7E7E" }).text,
            commonJustify.textCenter,
          ]}
        >
          {currentUser}
        </Text>
      </View>

      <View style={{ ...commonJustify.rowCenter, marginVertical: 20 }}>
        <Icon name="location-pin" />
        <Text
          style={[
            commonStyle({ fontSize: 15, color: "#272A2F" }).text,
            commonJustify.textCenter,
          ]}
        >
          Istanbul, Turkey
        </Text>
      </View>

      <View style={commonJustify.rowSpaceEvenly}>
        <View style={styles.card}>
          <Text
            style={[
              commonStyle({ fontSize: 24, fontFamily: "System" }).text,
              { textAlign: "center" },
            ]}
          >
            A+
          </Text>
          <Text>Blood Group</Text>
        </View>

        <View style={styles.card}>
          <Text
            style={[
              commonStyle({ fontSize: 24, fontFamily: "System" }).text,
              { textAlign: "center" },
            ]}
          >
            05
          </Text>
          <Text>Past Donations</Text>
        </View>

        <View style={styles.card}>
          <Text
            style={[
              commonStyle({ fontSize: 24, fontFamily: "System" }).text,
              { textAlign: "center" },
            ]}
          >
            02
          </Text>

          <Text>Requested</Text>
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        {list.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate(item.page)}
          >
            <ListItem
              containerStyle={{
                marginTop: 10,
                marginHorizontal: 10,
                height: 60,
              }}
              bottomDivider
            >
              <item.iconName color="#FF2156" name={item.icon} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
  },
});

const list = [
  {
    //title: "Available to donate",
    title: "My Appointments",
    icon: "calendar",
    iconName: AntDesign,
    page: "Appointments",
  },
  {
    title: "Invite a friend",
    icon: "mail",
    iconName: AntDesign,
  },
  {
    title: "Logout",
    icon: "logout",
    iconName: AntDesign,
  },
];
const commonStyle = (obj) => {
  const {
    fontSize = 14,
    fontFamily = "System",
    color = "#7E7E7E",
    backgroundColor = "#FF2156",
  } = obj;

  const styles = StyleSheet.create({
    text: {
      fontSize: fontSize,
      fontFamily: fontFamily,
      color: color,
    },

    color: {
      color: color,
    },
    background: {
      backgroundColor: backgroundColor,
    },
  });

  return styles;
};

const commonJustify = StyleSheet.create({
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rowFlexEnd: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  rowFlexStart: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  rowSpaceAround: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowSpaceEvenly: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  center: {
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
});

export default ProfileScreen;
