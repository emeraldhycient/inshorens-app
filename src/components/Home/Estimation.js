import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../constants/colors";
import { Subheading, Headline } from "react-native-paper";

const Estimation = () => {
  return (
    <View
      style={tw`h-[20] bg-[${colors.black}] flex-row w-[90%] mx-auto rounded-lg justify-between items-center pl-5 py-3 pr-3`}
    >
      <View
        style={tw`h-[13] w-[13] bg-[${colors.blue}] rounded-full justify-center items-center`}
      >
        <FontAwesome name="pie-chart" color={colors.white} size={24} />
      </View>
      <View style={{ width: "38%" }}>
        <Subheading style={{ color: colors.white }}>Estimate</Subheading>
      </View>
      <View style={{ width: "40%" }}>
        <Headline style={{ color: colors.white, fontWeight: "bold" }}>
          $3,000.00
        </Headline>
      </View>
    </View>
  );
};

export default Estimation;

const styles = StyleSheet.create({});
