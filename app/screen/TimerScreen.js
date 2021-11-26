import React from "react";
import { ScrollView, StyleSheet } from "react-native";
// import Header from "../components/timer/Header";
import PomodoroTimer from "../components/timer/PomodoroTimer";

function TimerScreen(props) {
  return (
    <ScrollView style={styles.container}>
      {/* <Header /> */}
      <PomodoroTimer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TimerScreen;
