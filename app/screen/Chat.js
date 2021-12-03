import React, {
  useCallback,
  useLayoutEffect,
  useEffect,
  useState,
} from "react";

import { GiftedChat } from "react-native-gifted-chat";
import { auth, db } from "../../firebase/firebase";

function Chat(groupId) {
  // console.log("1", groupId);
  // console.log("Hello ", groupId.route.params.groupId);
  const groupChatsid = groupId.route.params.groupId[0];
  const [messages, setMessages] = useState([]);

  //   useEffect(() => {
  //     setMessages([
  //       {
  //         _id: 1,
  //         text: "Hello developer",
  //         createdAt: new Date(),
  //         user: {
  //           _id: 2,
  //           name: "React Native",
  //           avatar: "https://placeimg.com/140/140/any",
  //         },
  //       },
  //     ]);
  //   }, []);
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
  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
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
