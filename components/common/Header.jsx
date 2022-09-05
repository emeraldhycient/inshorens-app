import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HandleBack from "./HandleBack";
import tw from "twrnc";
import colors from "../../constants/colors";
import NotifBell from "./NotifBell";
import { Title } from "react-native-paper";

const Header = ({ showBack, navigation, title }) => {
  return (
    <View style={tw`flex flex-row justify-between items-center `}>
      {showBack ? (
        <HandleBack navigation={navigation} />
      ) : (
        <View style={tw`w-12`}></View>
      )}
      <View style={tw`mx-auto`}>
        <Title>{title && title}</Title>
      </View>
      <NotifBell />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
