import React from "react";
import { Text, Dimensions, StyleSheet, View, Image } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import colorValue from "../commoStyle/ColorValue";
import { sliderImages } from "../../../mocks";

const Slider = () => (
  <View style={styles.main}>
    <View style={styles.container}>
      <SwiperFlatList
        paginationStyleItem={{ width: 10, height: 10 }}
        paginationActiveColor={colorValue.primary}
        paginationDefaultColor="gray"
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={2}
        showPagination
      >
        {sliderImages.map((images, index) => (
          <View style={styles.child} key={index}>
            <Image source={images.image} style={styles.image} />
          </View>
        ))}
      </SwiperFlatList>
    </View>
  </View>
);

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: { height: height * 0.3, width: width, borderRadius: 20 },
  container: { flex: 1, backgroundColor: "white" },
  child: { width, justifyContent: "center", alignItems: "center" },
  //image: { flex: 1, aspectRatio: 1.5, resizeMode: "cover" },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default Slider;
