import React from "react";
import { StyleSheet, Image, View, Alert } from "react-native";
import * as Yup from "yup";

import { auth } from "../../firebase/firebase";

import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import { ScrollView } from "react-native-gesture-handler";

function RegisterScreen() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
  });

  const handleSignUp = (values) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredentials) => {
        if (userCredentials.user) {
          userCredentials.user.updateProfile({
            displayName: values.name,
          });
        }
        userCredentials.user.sendEmailVerification();
        auth.signOut();
        alert("Email sent");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert("Failure!!", errorMessage);
      });
  };
  return (
    <Screen>
      <Image style={styles.image} source={require("../assets/grp.jpeg")} />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Form
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={(values) => handleSignUp(values)}
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
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 1,
  },
  image: {
    width: "100%",
    height: "40%",
    alignSelf: "center",
    // marginTop: 10,
    marginBottom: 10,
  },
});

export default RegisterScreen;
