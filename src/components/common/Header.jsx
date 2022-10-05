import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HandleBack from "./HandleBack";
import tw from "twrnc";
import colors from "../../constants/colors";
import NotifBell from "./NotifBell";
import { Headline } from "react-native-paper";

const Header = ({ showBack, navigation, title }) => {
  return (
    <View
      style={tw`flex flex-row justify-between items-center  shadow  pb-3`}
    >
      {showBack ? (
        <HandleBack navigation={navigation} />
      ) : (
        <View style={tw`w-12`}></View>
      )}
      <View style={tw`mx-auto`}>
        <Headline>{title && title}</Headline>
      </View>
      <NotifBell />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
