import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function RegisterScreen() {
  return (
    <Screen>
      <Image style={styles.image} source={require("../assets/grp.jpeg")} />
      <View style={styles.container}>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: "80%",
    height: "50%",
    alignSelf: "center",
    marginTop: 10,
    // marginBottom: 40,
  },
});

export default RegisterScreen;
