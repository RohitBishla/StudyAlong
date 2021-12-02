import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import uuid from "react-native-uuid";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { auth, db } from "../../firebase/firebase";

export default function CreateRoom() {
  const user = auth.currentUser;
  const [error, setError] = useState(false);
  const [joinedData, setJoinedData] = useState();
  const [classExists, setClassExists] = useState(false);

  const handleJoin = (values) => {
    // console.log(values);
    db.collection("CreatedClasses")
      .doc(values.ownerEmail)
      .collection("classes")
      .doc(values.classCode)
      .get()
      .then((doc) => {
        if (doc.exists && doc.owner !== user.email) {
          setClassExists(true);
          setJoinedData(doc.data());
          setError(false);
        } else {
          alert("No class was found");
          setError(true);
          setClassExists(false);
          return;
        }
      });

    if (classExists === true) {
      db.collection("JoinedClasses")
        .doc(user.email)
        .collection("classes")
        .doc(values.classCode)
        .set({
          joinedData,
        })
        .then(() => {
          alert("Done");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          Alert.alert("Failure!!", errorMessage);
        });
    }
  };
  const addClass = (values) => {
    // values.preventDefault();
    // console.log(values);
    const id = uuid.v4();
    db.collection("CreatedClasses")
      .doc(user.email)
      .collection("classes")
      .doc(id)
      .set({
        owner: user.email,
        className: values.name,
        // section: Section,
        description: values.description,
        id: id,
      })
      .then(() => {
        // setCreateClassDialog(false);
        console.log({
          owner: user.email,
          className: values.name,
          // section: Section,
          description: values.description,
          id: id,
        });
        alert("Done");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert.alert("Failure!!", errorMessage);
      });
  };
  return (
    <Screen>
      <ScrollView>
        <View style={styles.container}>
          <AppForm
            initialValues={{ classCode: "", ownerEmail: "" }}
            onSubmit={(values) => handleJoin(values)}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="classCode"
              placeholder="Class Code"
              // error={error}
              // helperText={error && "No class was found"}
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="ownerEmail"
              placeholder="Owner's email"
            />
            <SubmitButton title="Join Class" />
          </AppForm>
          <Image
            style={styles.image}
            source={require("../assets/study-along-logo.gif")}
          />
          <View style={styles.second}>
            <AppForm
              initialValues={{ name: "", description: "" }}
              onSubmit={(values) => addClass(values)}
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
              <SubmitButton title="Create room" color={"secondary"} />
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
