import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../screen/Chat";
import GroupList from "../screen/GroupsList";

const Stack = createStackNavigator();

const ChatNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Groups" component={GroupList} />
    <Stack.Screen name="Chat" component={Chat} />
  </Stack.Navigator>
);

export default ChatNavigator;
