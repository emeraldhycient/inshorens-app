import { StyleSheet, View, ImageBackground, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Title } from "react-native-paper";
import colors from "../../constants/colors";

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
        <View style={tw`flex-row justify-between items-end w-full px-12`}>
          <Title style={{ color: colors.white, marginRight: 30 }}>
            Igweze hycient
          </Title>
          <Image
            source={require("../../../assets/qr.png")}
            style={{ height: 90, width: 90 }}
            resizeMode="contain"
          />
        </View>
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
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 22,
  },
});
