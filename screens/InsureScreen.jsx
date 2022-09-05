import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";

const InsureScreen = ({ navigation }) => {
  return (
    <Layout showBack={true} title="Get Insured" navigation={navigation}>
      <View>
        <Text>InsureScreen</Text>
      </View>
    </Layout>
  );
};

export default InsureScreen;

const styles = StyleSheet.create({});
