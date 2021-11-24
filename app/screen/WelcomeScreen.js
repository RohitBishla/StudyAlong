import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <View style={styles.photos}>
        <ImageBackground
          style={styles.logoPhoto}
          source={require("../assets/study-along-logo.gif")}
        ></ImageBackground>
        <ImageBackground
          style={styles.studyPhoto}
          source={require("../assets/study-group1.jpeg")}
        ></ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"login"}
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title={"Register"}
          onPress={() => navigation.navigate("Register")}
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
  photos: {
    position: "absolute",
    top: "8%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  studyPhoto: {
    // position: "absolute",
    top: "10%",
    height: 250,
    width: "100%",

    // justifyContent: "flex-end",
    // alignItems: "center",
  },
  logoPhoto: {
    // position: "absolute",
    // top: "6%",
    height: 100,
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    bottom: "5%",
  },
});
export default WelcomeScreen;
