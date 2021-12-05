import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../screen/Chat";
import GroupList from "../screen/GroupsList";
import ChatHeader from "../components/ChatHeader";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";

const Stack = createStackNavigator();
const ChatNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Groups" component={GroupList} />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={{ headerTitle: (route) => <ChatHeader {...route} /> }}
    />
    <Stack.Screen
      name="ListingDetailsScreen"
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default ChatNavigator;