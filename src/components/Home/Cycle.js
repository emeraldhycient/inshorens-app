import { StyleSheet, View } from "react-native";
import React from "react";
import tw from "twrnc";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../constants/colors";
import { Text } from "react-native-paper";

const Cycle = ({ icon, title }) => {
  return (
    <View style={tw`mr-8 flex items-center`}>
      <View
        style={tw`h-[14] w-[14] bg-[${colors.gray}] rounded-full justify-center items-center`}
      >
        {icon}
      </View>
      <Text style={tw`text-[${colors.black}] mt-2`}>{title}</Text>
    </View>
  );
};

export default Cycle;

const styles = StyleSheet.create({});
