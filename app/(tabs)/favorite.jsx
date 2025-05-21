import { StyleSheet, Text, View } from "react-native";
import React from "react";

const favorite = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Favorites</Text>
    </View>
  );
};

export default favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
