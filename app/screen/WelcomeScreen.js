import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <View style={styles.main}>
      <ImageBackground
        style={styles.studyPhoto}
        source={require("../assets/study-group.jpg")}
      ></ImageBackground>
      <View style={styles.buttonContainer}>
        <AppButton title={"login"} onPress={() => console.log("login")} />
        <AppButton
          title={"Register"}
          onPress={() => console.log("register")}
          color={"secondary"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  studyPhoto: {
    position: "absolute",
    top: 40,
    height: 300,
    width: "100%",

    // justifyContent: "flex-end",
    // alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    bottom: 20,
  },
});
export default WelcomeScreen;
