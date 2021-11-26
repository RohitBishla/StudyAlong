import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../AppText";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <AppText style={styles.textStyle}> Timer </AppText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    // backgroundColor: "#C2362B",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 1,
    elevation: 5,
    position: "relative",
  },
  textStyle: {
    // color: "white",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 1.5,
    marginTop: 50,
  },
});

export default Header;
