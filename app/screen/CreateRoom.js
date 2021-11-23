import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { Formik } from "formik";

export default function CreateRoom() {
  return (
    <View style={styles.globalStylesContainer}>
      <Image
        source={require("../assets/study_along.jpeg")}
        style={{ width: 300, height: 300 }}
      />
      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.globalStylesInput}
              placeholder="Name of subject"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              multiline
              style={styles.globalStylesInput}
              placeholder="Description"
              onChangeText={props.handleChange("description")}
              value={props.values.description}
            />
            <Button
              title="Create room"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  globalStylesContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  globalStylesInput: {
    borderWidth: 2,
    borderColor: "#ddd",
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
  },
  globalStylesTitleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
});
