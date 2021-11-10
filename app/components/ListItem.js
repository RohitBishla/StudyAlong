import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppTest from "./AppTest";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ title, subtitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          <Image style={styles.images} source={image}></Image>
          <View>
            <AppTest style={styles.title}>{title}</AppTest>
            <AppTest style={styles.subtitle}>{subtitle}</AppTest>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
  },
  images: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
});
export default ListItem;
