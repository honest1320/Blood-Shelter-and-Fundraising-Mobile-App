import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import { setAmount, setName } from "../Redux/donationSlice";

const DetailsScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route.params;

  const dispatch = useDispatch();

  const handleChange = () => {
    navigation.navigate("Payment");
    dispatch(setName(data.author));
    dispatch(setAmount(data.currentPrice.toLocaleString()));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <ImageBackground
        source={data.image}
        style={{
          resizeMode: "cover",
          position: "absolute",
          width: "100%",
          height: 400,
          borderBottomRightRadius: 60,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            justifyContent: "space-between",
          }}
        >
          <Icon
            //onPress={navigation.goBack}
            name="chevron-left"
            size={30}
            color="white"
          />
          <Icon name="dots-vertical" size={30} color="white" />
        </View>
      </ImageBackground>

      <View
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 10,
          top: 400,
          padding: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Image
              source={data.creatorImage}
              style={{ height: 50, width: 50, borderRadius: 50 }}
            /> */}
            {/* <Text style={{ marginLeft: 10, color: COLORS.black }}>
              {data.creator}
            </Text> */}
          </View>
          <View
            style={{
              height: 30,
              width: 60,
              backgroundColor: `#34665b`,
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
            }}
          >
            <Icon name="heart-outline" size={18} color="white" />
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 2,
              }}
            >
              33
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 22,
            color: "black",
            marginVertical: 7,
            fontWeight: "bold",
          }}
        >
          {data.title}
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            marginBottom: 10,
            lineHeight: 26,
          }}
        >
          {data.description}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          padding: 20,
          paddingBottom: 30,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginLeft: 5, color: "black", fontWeight: "bold" }}>
            {data.currentPrice.toLocaleString()} ₺
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleChange}
          style={{
            height: 50,
            width: 140,
            backgroundColor: `#34665b`,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Icon
              //style={{ marginTop: 10, padding: 12 }}
              name="hand-heart-outline"
              color="white"
              size={28}
            />
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 10,
              }}
            >
              Donate
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 120,
    backgroundColor: "white",
    marginHorizontal: 20,
    flex: 1,
    bottom: -60,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: "center",
  },
  comment: {
    marginTop: 10,
    fontSize: 12.5,
    color: "black",
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    height: 100,
    backgroundColor: `black`,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: "red",
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  btn: {
    backgroundColor: "red",
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
});
export default DetailsScreen;
