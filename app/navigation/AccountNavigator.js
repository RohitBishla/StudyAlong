import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screen/AccountScreen";
import MessagesScreen from "../screen/MessagesScreen";
import FavMessageScreen from "../screen/FavMessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="FavMessageScreen" component={FavMessageScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
