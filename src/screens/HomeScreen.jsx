import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Estimation from "../components/Home/Estimation";
import tw from "twrnc";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../constants/colors";
import Card from "../components/Home/Card";
import Cycle from "../components/Home/Cycle";

const HomeScreen = ({ navigation }) => {
  const [supportedServices, setsupportedServices] = useState([
    {
      title: "Health",
      icon: (
        <FontAwesome5 name="hospital-user" color={colors.blueblack} size={22} />
      ),
      url: "",
    },
    {
      title: "Phones",
      icon: (
        <MaterialCommunityIcons
          name="cellphone-information"
          color={colors.blueblack}
          size={30}
        />
      ),
      url: "",
    },
    {
      title: "Travel",
      icon: (
        <MaterialCommunityIcons
          name="bus-alert"
          color={colors.blueblack}
          size={30}
        />
      ),
      url: "",
    },
    {
      title: "Gadgets",
      icon: (
        <MaterialIcons name="phonelink" color={colors.blueblack} size={30} />
      ),
      url: "",
    },
  ]);

  return (
    <Layout title="welcome hycient 👋" navigation={navigation}>
      <Card />
      <Estimation />
      <ScrollView horizontal style={tw`my-5 pb-4 px-4`}>
        {supportedServices.map((service, index) => (
          <Cycle key={index} title={service.title} icon={service.icon} />
        ))}
      </ScrollView>
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
