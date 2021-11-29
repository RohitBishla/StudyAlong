import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  ScrollView,
} from "react-native";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppButton from "../components/AppButton";

export default function CreateRoom() {
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <AppForm
            initialValues={{ join: "" }}
            onSubmit={(values) => console.log(values)}
          >
            <View style={styles.container1}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="numeric"
                keyboardType="numeric"
                name="join"
                placeholder="Group Code"
              />
            </View>
            <SubmitButton title="Join Group" />
          </AppForm>
          <Image
            style={styles.image}
            source={require("../assets/study-along-logo.gif")}
          />
          <View style={styles.second}>
            <AppForm
              initialValues={{ name: "", description: "" }}
              onSubmit={(values) => console.log(values)}
            >
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                name="name"
                placeholder="Name of subject"
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                name="description"
                placeholder="Description"
                multiline
              />
              <AppButton title="Create room" color={"secondary"} />
            </AppForm>
          </View>
        </View>
      </ScrollView>
      {/* <Formik
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
      </Formik> */}
      {/* <StatusBar style="auto"></StatusBar> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "80%",
    // height: 200,
    // marginLeft: 20,
    // marginRight: 200,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 10,
    flex: 1,
    // justifyContent: "space-evenly",
  },
  container1: {
    paddingLeft: "27%",
    paddingRight: "27%",
  },
  second: {
    // paddingTop: 10,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    paddingTop: 150,
  },
});
