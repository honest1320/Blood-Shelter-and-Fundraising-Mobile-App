import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Article from "../Shared/components/Article";
import { charities } from "../../mocks";

const Donations = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Ongoing Fundraisers
        </Text>
      </View>
      <FlatList
        data={charities}
        renderItem={({ item }) => (
          <Article
            image={item.image}
            title={item.title}
            description={item.description}
            author={item.author}
            currentPrice={item.currentPrice}
            goalPrice={item.goalPrice}
            publishedAt={item.publishedAt}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
};

export default Donations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
