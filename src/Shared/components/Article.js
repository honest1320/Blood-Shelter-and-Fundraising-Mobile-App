import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import * as Progress from "react-native-progress";

// import moment from "moment";
// import * as WebBrowser from "expo-web-browser";

const Article = (props) => {
  const navigation = useNavigation();

  //   const goToSource = () => {
  //     WebBrowser.openBrowserAsync(props.url);
  //   };

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("DetailsScreen", props)}
    >
      {/* image */}
      <Image source={props.image} style={styles.image} />

      <View style={{ padding: 20 }}>
        {/*    title */}
        <Text style={styles.title}>{props.title}</Text>

        {/*    description */}
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>

        <View style={styles.data}>
          <Text style={styles.heading}>
            by: <Text style={styles.author}>{props.author}</Text>
          </Text>
          <Text style={styles.date}>
            {/* {moment(props.publishedAt).format("MMM Do YY")} */}
            {props.publishedAt}
          </Text>
        </View>

        {/*     source */}
        <View style={{ marginTop: 10 }}>
          <Text>
            source: <Text style={styles.source}>{props.sourceName}</Text>
          </Text>
          <Text style={styles.author}>
            {props.currentPrice.toLocaleString()} ₺ of{" "}
            {props.goalPrice.toLocaleString()} ₺ raised
          </Text>
          <View style={{ marginTop: 5 }}>
            <Progress.Bar
              progress={props.currentPrice / props.goalPrice}
              width={null}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "#fff",
    marginTop: 20,
  },
  image: {
    resizeMode: "cover",
    height: 200,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    color: "#e63946",
    fontSize: 15,
  },
  source: {
    color: "#e63946",
    fontWeight: "bold",
    fontSize: 18,
  },
});
