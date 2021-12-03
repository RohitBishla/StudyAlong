import { useRoute } from "@react-navigation/core";
import React from "react";
import { View, TouchableOpacity } from "react-native";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import AppText from "./AppText";

function ChatHeader({ navigation }) {
  const route = useRoute();
  console.log(route);
  const num = route.params.groupId[1];
  return (
    <View>
      {/* <AppButton title="Hello" /> */}
      <TouchableOpacity
        onPress={() => navigation.navigate(ListingDetailsScreen)}
      >
        <AppText style={{ fontWeight: "bold" }}>{num}</AppText>
      </TouchableOpacity>
    </View>
  );
}

export default ChatHeader;
