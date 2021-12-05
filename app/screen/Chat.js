import React, { useCallback, useLayoutEffect, useState } from "react";
import uuid from "react-native-uuid";

import { GiftedChat } from "react-native-gifted-chat";
import { auth, db } from "../../firebase/firebase";

function Chat(groupId) {
  const groupChatsid = groupId.route.params.groupId[0];
  const groupClatName = groupId.route.params.groupId[1];
  const groupChatowner = groupId.route.params.groupId[2];
  const [messages, setMessages] = useState([]);
  const user1 = auth.currentUser;

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection(groupChatsid)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      );
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    db.collection(groupChatsid).add({ _id, createdAt, text, user });
  }, []);

  const fav = (message) => {
    const id = uuid.v4();
    db.collection("Fav")
      .doc(user1.email)
      .collection("classes")
      .doc(message._id)
      .set({
        title: message.user.name,
        className: groupClatName,
        owner: groupChatowner,
        id: groupChatsid,
        // section: Section,
        description: message.text,
        messageId: message._id,
      })
      .then(() => {
        // setCreateClassDialog(false);
        console.log("Done", {
          title: message.user.name,
          //className: values.name,
          // section: Section,
          description: message.text,
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

  const onLongPress = (context, message) => {
    console.log("Context", context, "Message", message);
    const options = ["Copy Text", "Favorite Message", "Cancel"];
    const cancelButtonIndex = options.length - 1;
    context.actionSheet().showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            Clipboard.setString(this.props.currentMessage.text);
          // break;
          case 1:
            // console.log("11111111111111111111111111111111111111111111");
            fav(message);

            //code to delete
            break;
        }
      }
    );
  };
  return (
    <GiftedChat
      messages={messages}
      onLongPress={onLongPress}
      showAvatarForEveryMessage={true}
      renderUsernameOnMessage={true}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
        avatar: "https://placeimg.com/140/140/any",
      }}
    />
  );
}

export default Chat;
