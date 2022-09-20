import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../constants/colors";

const Estimation = () => {
  return (
    <View
      style={tw`h-[20] bg-[${colors.black}] w-[90%] mx-auto rounded-lg justify-center pl-5 py-3 pr-3`}
    >
      <View
        style={tw`h-[13] w-[13] bg-[${colors.blue}] rounded-full justify-center items-center`}
      >
        <FontAwesome name="pie-chart" color={colors.white} size={24} />
      </View>
    </View>
  );
};

export default Estimation;

const styles = StyleSheet.create({});
