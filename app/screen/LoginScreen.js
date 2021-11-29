import React, { useEffect } from "react";
import { StyleSheet, Image, View, ScrollView, Alert } from "react-native";
import * as Yup from "yup";

import { auth } from "../../firebase/firebase";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen() {
  const handleLogin = (values) => {
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // Alert.alert("Success!!");
        console.log(user);

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert("Failure!!", errorMessage);
        // ..
      });
  };
  return (
    <Screen>
      <Image style={styles.image} source={require("../assets/2.png")} />
      <ScrollView>
        <View style={styles.container}>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => handleLogin(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Login" />
          </AppForm>
        </View>
      </ScrollView>
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
    // marginTop: 50,
    marginBottom: "10%",
  },
});

export default LoginScreen;
