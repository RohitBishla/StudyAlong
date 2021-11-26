import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import PomodoroTimer from "../components/timer/PomodoroTimer";

function TimerScreen(props) {
  return (
    <Screen>
      <ScrollView style={styles.container}>
        <PomodoroTimer />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TimerScreen;
