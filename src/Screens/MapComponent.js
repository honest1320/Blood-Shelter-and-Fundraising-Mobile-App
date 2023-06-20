import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
const GOOGLE_MAPS_APIKEY = "AIzaSyDRe7WAWJQW0CyfGPR1jatR1AfzbYCFpMM";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { Icon } from "react-native-elements";
import { locations } from "../../mocks";
import { maujanja } from "../../mocks2";
import { useRef } from "react";
import MapViewDirections from "react-native-maps-directions";
//import ShelterModal from "../Shared/components/ShelterModal";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const LATITUD_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUD_DELTA + width / height;

const MapComponent = ({ navigation }) => {
  const [userLocation, setuserLocation] = useState();
  const [endpoint, setEndpoint] = useState();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const getLocation = async () => {
    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ enabledHighAccuracy: true });
      setuserLocation({ latitude: latitude, longitude: longitude });
    } catch (error) {}
  };

  const fetchDestinationCords = (lat, long) => {
    setEndpoint((prev) => ({ ...prev, latitude: lat, longitude: long }));
  };

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    getLocation();

    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= locations.length) {
        index = locations.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const { coordinates } = locations[index];
          _map.current.animateToRegion(
            {
              ...coordinates,
              latitudeDelta: LATITUD_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = locations.map((location, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp",
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.index;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === "ios") {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  };

  const _map = useRef(null);
  const _scrollView = useRef(null);

  return (
    <View style={styles.container}>
      {/* --------------------------------------------------------------------------------------------- */}
      {/* <View style={styles.nav}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Icon
            type="material-community"
            name="arrow-left"
            color="black"
            size={32}
          />
        </TouchableOpacity>
      </View> */}
      {/* --------------------------------------------------------------------------------------------- */}
      <MapView
        ref={_map}
        style={styles.map}
        region={{
          latitude: 40.768788,
          longitude: 30.466111,
          latitudeDelta: LATITUD_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        //initialRegion={userLocation}
        showsUserLocation={true}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            coordinate={location.coordinates}
            onPress={(e) => onMarkerPress(e)}
          >
            <Animated.Image
              source={require("../../assets/image/Shelter.png")}
              style={[
                styles.marker,
                {
                  transform: [
                    {
                      scale: interpolations[index].scale,
                    },
                  ],
                },
              ]}
              resizeMode="cover"
            />
          </Marker>
        ))}

        <MapViewDirections
          origin={userLocation}
          //origin={{ latitude: 40.79538, longitude: 30.742969 }}
          destination={endpoint}
          //destination={{ latitude: 40.795315, longitude: 29.433929 }}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={8}
          strokeColor="hotpink"
        />
      </MapView>
      {/* ---------------------------------------CARDS ON THE  BOTTOM ------------------------------------------------------ */}
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
      >
        {maujanja.map((mauja, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={mauja.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardtitle}>
                {mauja.title}
              </Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                {mauja.description}
              </Text>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => {
                    fetchDestinationCords(
                      mauja.coordinates.latitude,
                      mauja.coordinates.longitude
                    );
                  }}
                  style={[
                    styles.signIn,
                    {
                      borderColor: "#FF6347",
                      borderWidth: 1,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: "#D61B1F",
                      },
                    ]}
                  >
                    Directions
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
      {/* {isModalVisible && (
        <ShelterModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )} */}
    </View>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  searchBox: {
    position: "absolute",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: "absolute",
    top: Platform.OS === "ios" ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: "center",
    marginTop: 5,
  },
  signIn: {
    width: "100%",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: "bold",
  },
  nav: {
    position: "absolute",
    top: 35,
    right: 22,
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8,
  },
});
