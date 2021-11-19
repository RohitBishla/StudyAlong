import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeprator from "../components/ListItemSeprator";
import Screen from "../components/Screen";
import colors from "../config/colors";

function AccountScreen(props) {
  const MenuItem = [
    {
      title: "Favorite",
      icon: {
        name: "heart",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Rohit Bishla"
          subtitle="rohit.btele20@pec.edu.in"
          image={require("../assets/profile_pic.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={MenuItem}
          keyExtractor={(MenuItem) => MenuItem.title}
          ItemSeparatorComponent={ListItemSeprator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
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
