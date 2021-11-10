import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppTest from "./AppTest";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.images} source={image} />
      <View style={styles.detailsContainer}>
        <AppTest style={styles.titles}>{title}</AppTest>
        <AppTest style={styles.subTitle}>{subtitle}</AppTest>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 10,
  },
  images: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  titles: {
    paddingBottom: 10,
  },
});
export default Card;
