import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import { auth } from "../../firebase/firebase";
import { UserInterfaceIdiom } from "expo-constants";
function AccountScreen({ navigation }) {
  const MenuItem = [
    {
      title: "Favorite",
      icon: {
        name: "heart",
        backgroundColor: colors.primary,
      },
      targetScreen: routes.FAVMESSAGESCREEN,
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      targetScreen: routes.MESSAGES,
    },
  ];
  const user = auth.currentUser;
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.displayName}
          subTitle={user.email}
          image={require("../assets/profile_pic.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={MenuItem}
          keyExtractor={(MenuItem) => MenuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        onPress={() =>
          auth.signOut().then(() => console.log("User signed out!"))
        }
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default AccountScreen;
