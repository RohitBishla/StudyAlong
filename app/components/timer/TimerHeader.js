import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppText from "../AppText";

class TimerHeader extends React.Component {
  // handles the display of timer header
  handleDisplay = () => {
    if (this.props.intervalType === "Working") {
      if (this.props.running === true) {
        return "Keep working hard!";
      } else {
        return "Time to study!";
      }
    } else {
      if (this.props.running === true) {
        return "It's break time! Enjoy";
      } else {
        return "Relax :)";
      }
    }
  };
  render() {
    let texttoshow = this.handleDisplay();
    return <AppText style={styles.textStyle}>{texttoshow}</AppText>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: "500",
    letterSpacing: 1.5,
    marginTop: 40,
    padding: 20,
  },
});

export default TimerHeader;
