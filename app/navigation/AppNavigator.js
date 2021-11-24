import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import CreateRoom from "../screen/CreateRoom";
import MessagesScreen from "../screen/MessagesScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        bottom: 3,
      },
    }}
  >
    <Tab.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
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
