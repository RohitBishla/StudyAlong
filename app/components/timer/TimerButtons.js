import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

class TimerButtons extends React.Component {
  state = {};

  //renders pause, play and reset buttons
  render() {
    if (this.props.running === true) {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.props.pause}
          >
            <AppText style={styles.buttonText}>Pause</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.props.reset}
          >
            <AppText style={styles.buttonText}>Reset</AppText>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.props.play}
          >
            <AppText style={styles.buttonText}>Play</AppText>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // marginLeft: 20,
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 30,
    flexDirection: "row",
    borderRadius: 80,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "300",
  },
});

export default TimerButtons;
