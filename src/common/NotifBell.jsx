import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Fontisto from "react-native-vector-icons/Fontisto";
import tw from "twrnc";
import colors from "../constants/colors";

const NotifBell = () => {
  return (
    <View
      style={tw`bg-[${colors.white}] rounded-full h-[12] w-[12] border border-gray-200 flex justify-center items-center`}
    >
      <Fontisto name="bell-alt" color={colors.black} size={18} />
    </View>
  );
};

export default NotifBell;

const styles = StyleSheet.create({});
