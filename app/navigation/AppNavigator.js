import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screen/AccountScreen";
import CreateRoom from "../screen/CreateRoom";
import MessagesSecreen from "../screen/MessagesSecreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="CreateRoom" component={CreateRoom} />
    <Tab.Screen name="Message" component={MessagesSecreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
