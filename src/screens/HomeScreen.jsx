import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Estimation from "../components/Home/Estimation";
import Card from "../components/Home/Card";

const HomeScreen = ({ navigation }) => {
  return (
    <Layout title="welcome hycient 👋" navigation={navigation}>
      <Card />
      <Estimation />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
