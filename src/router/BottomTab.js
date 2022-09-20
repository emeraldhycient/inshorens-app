import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeScreen from "../../screens/HomeScreen";
import StatsScreen from "../../screens/StatsScreen";
import InsureScreen from "../../screens/InsureScreen";
import colors from "../constants/colors";

const BTab = createMaterialBottomTabNavigator();

const BottomTab = () => (
  <BTab.Navigator
    activeColor={colors.black}
    inactiveColor={colors.inactiveColor}
    barStyle={{ backgroundColor: colors.white }}
  >
    <BTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Dashboard",
        tabBarIcon: ({ color }) => (
          <Entypo name="home" color={color} size={24} />
        ),
      }}
    />
    <BTab.Screen
      name="insure"
      component={InsureScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Insure",
        tabBarIcon: ({ color }) => (
          <Entypo name="squared-plus" color={color} size={24} />
        ),
      }}
    />
    <BTab.Screen
      name="Stats"
      component={StatsScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Stats",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="chart-areaspline"
            color={color}
            size={24}
          />
        ),
      }}
    />
    <BTab.Screen
      name="Profile"
      component={StatsScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Profile",
        tabBarIcon: ({ color }) => (
          <FontAwesome name="user" color={color} size={24} />
        ),
      }}
    />
  </BTab.Navigator>
);

export default BottomTab;
