import React, { useState, useEffect } from "react";
import { Button, FlatList, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import { auth, db } from "../../firebase/firebase";
import routes from "../navigation/routes";
import MessagesScreen from "./MessagesScreen";
import Chat from "./Chat";

// const initialMessages = [
//   {
//     id: 1,
//     title: "UserName 1",
//     description: "Hey! Is this a correct answer?",
//     image: require("../assets/images2.jpeg"),
//   },
//   {
//     id: 2,
//     title: "UserName 2",
//     description:
//       "I'm interested in this question. When will you be able to solve it?",
//     image: require("../assets/profile_pic.jpeg"),
//   },
// ];

function FavMessageScreen({ navigation }) {
  const user = auth.currentUser;

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  const [createdClasses, setCreatedClasses] = useState([]);
  //   const [joinedClasses, setJoinedClasses] = useState([]);

  useEffect(() => {
    if (user.email) {
      let unsubscribe = db
        .collection("Fav")
        .doc(user.email)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setCreatedClasses(snapshot.docs.map((doc) => doc.data()));
          // console.log("New", snapshot);
        });
      return () => unsubscribe();
    }
  }, [user.email]);

  //   useEffect(() => {
  //     if (user.email) {
  //       let unsubscribe = db
  //         .collection("JoinedClasses")
  //         .doc(user.email)
  //         .collection("classes")
  //         .onSnapshot((snapshot) => {
  //           setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData));
  //         });

  //       return () => unsubscribe();
  //     }
  //   }, [user.email]);
  //   console.log(joinedClasses, createdClasses);

  const [messages, setMessages] = useState(createdClasses);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={require("../assets/images2.jpeg")}
            onPress={
              () =>
                navigation.navigate("Chat", {
                  groupId: [item.id, item.className, item.owner],
                })
              //   console.log(item)
            }
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(createdClasses);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default FavMessageScreen;
