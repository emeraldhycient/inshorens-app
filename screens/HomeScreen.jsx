import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";

const HomeScreen = ({ navigation }) => {
  return (
    <Layout title="welcome" navigation={navigation}>
      <View>
        <Text>HomeScreen</Text>
      </View>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
