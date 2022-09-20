import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import colors from "../constants/colors";

const HandleBack = ({ navigation }) => {
  return (
    <View
      style={tw`bg-[${colors.white}] rounded-full h-[12] w-[12] border border-gray-200 flex justify-center items-center`}
    >
      <Ionicons name="caret-back" color={colors.black} size={20} />
    </View>
  );
};

export default HandleBack;

const styles = StyleSheet.create({});
