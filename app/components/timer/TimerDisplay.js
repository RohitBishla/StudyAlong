import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

class TimerDisplay extends React.Component {
  // display currently running timer
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {Math.floor(this.props.time / 60)
            .toString()
            .padStart(2, "0") +
            ":" +
            (this.props.time % 60).toString().padStart(2, "0")}
        </Text>
      </View>
    );
  }
}

export default TimerDisplay;

const styles = StyleSheet.create({
  container: {
    marginTop: "7%",
    marginBottom: "7%",
    marginLeft: "7%",
    marginRight: "7%",
    padding: "15%",
    borderColor: "white",
    borderRadius: 100,
    borderWidth: 3,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  textStyle: {
    color: "white",
    fontSize: 50,
    fontWeight: "400",
  },
});
