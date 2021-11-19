import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppTest from "./AppTest";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subtitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.images} source={image}></Image>}
          <View style={styles.detailContainer}>
            <AppTest style={styles.title}>{title}</AppTest>
            {subtitle && <AppTest style={styles.subtitle}>{subtitle}</AppTest>}
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
    backgroundColor: colors.white,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  images: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
});
export default ListItem;
