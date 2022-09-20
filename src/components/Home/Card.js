import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const Card = ({ children }) => {
  return (
    <View style={styles.card1}>
      <ImageBackground
        source={require("../../../assets/card.png")}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10 }}
        style={styles.card2}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card1: {
    height: 260,
    width: "100%",
    paddingHorizontal: 14,
    marginVertical: 20,
  },

  card2: {
    height: 260,
    width: "100%",
  },
});
