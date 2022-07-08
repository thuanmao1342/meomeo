import * as React from "react";

import BoyScreen from "./BoyScreen";
import GirlScreen from "./GirlScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
const Tab = createBottomTabNavigator();

const HomeScreens: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Boy"
        options={{ tabBarIcon: () => <Text>😎</Text> }}
        component={BoyScreen}
      />
      <Tab.Screen
        name="Girl"
        options={{ tabBarIcon: () => <Text>👩</Text> }}
        component={GirlScreen}
      />
    </Tab.Navigator>
  );
};

export default HomeScreens;
