import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Username-1",
    discription: "Discription-1",
    image: require("../assets/profile_pic.jpeg"),
  },
  {
    id: 2,
    title: "Username-2",
    discription: "Discription-2",
    image: require("../assets/profile_pic.jpeg"),
  },
];
function MessagesSecreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.discription}
            image={item.image}
            onPress={() => console.log("message is Pressed: ", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "Username-3",
              discription: "Discription-3",
              image: require("../assets/profile_pic.jpeg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessagesSecreen;
