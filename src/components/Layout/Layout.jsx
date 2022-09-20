import { SafeAreaView, StyleSheet, Platform } from "react-native";
import React from "react";
import Header from "../common/Header";

const Layout = ({ children, showBack, navigation, title }) => {
  return (
    <SafeAreaView
      style={[
        Platform.OS === "android" ? { paddingTop: 30 } : { paddingTop: 0 },
        { paddingHorizontal: 7 },
      ]}
    >
      <Header showBack={showBack} navigation={navigation} title={title} />
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({});
