import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import CreateRoom from "../screen/CreateRoom";
import MessagesScreen from "../screen/MessagesScreen";
import TimerScreen from "../screen/TimerScreen";
import Chat from "../screen/Chat";
import GroupsList from "../screen/GroupsList";
import ChatNavigator from "./ChatNavigator";
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        bottom: 5,
      },
    }}
  >
    <Tab.Screen
      name="Self Study"
      component={TimerScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Groups"
      component={ChatNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="message" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="CreateRoom"
      component={CreateRoom}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.CREATEROOM)}
          />
        ),
        // tabBarIcon: ({ color, size }) => (
        //   <MaterialCommunityIcons
        //     name="plus-circle"
        //     color={color}
        //     size={size}
        //   />
        // ),
      })}
    />
    <Tab.Screen
      name="Favorite"
      component={MessagesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;

// const AppNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="CreateRoom" component={CreateRoom} />
//     <Tab.Screen name="Message" component={MessagesSecreen} />
//     <Tab.Screen name="Account" component={AccountScreen} />
//   </Tab.Navigator>
// );

// export default AppNavigator;
