import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";

const StatsScreen = ({ navigation }) => {
  return (
    <Layout showBack={true} title="Statistics" navigation={navigation}>
      <View>
        <Text>StatsScreen</Text>
      </View>
    </Layout>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({});
