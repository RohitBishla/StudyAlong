import { useRoute } from "@react-navigation/core";
import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import AppText from "./AppText";
// import Clipboard from "@react-native-clipboard/clipboard";
// import { useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../config/colors";
import { color } from "react-native-reanimated";
function ChatHeader() {
  const route = useRoute();
  console.log(route);
  const num = route.params.groupId[1];
  const num2 = route.params.groupId[0];
  const num3 = route.params.groupId[2];
  const refRBSheet = useRef();
  return (
    <View>
      {/* <AppButton title="Hello" /> */}
      <View
      // style={{
      //   width: "100%",
      //   alignContent: "center",
      //   justifyContent: "center",
      //   // marginLeft: 100,
      //   // marginRight: 100,
      // }}
      >
        <TouchableOpacity onPress={() => refRBSheet.current.open()}>
          <AppText style={{ fontWeight: "bold" }}>{num}</AppText>
        </TouchableOpacity>
      </View>
      <View
        style={{
          // flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        {/* <Button
          title="OPEN BOTTOM SHEET"
          onPress={() => refRBSheet.current.open()}
        /> */}
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
            },
            draggableIcon: {
              backgroundColor: "black",
            },
          }}
        >
          {/* <YourOwnComponent /> */}
          <View
            style={{
              flex: 1,
              backgroundColor: colors.light,
              borderRadius: 30,
              paddingTop: 20,
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AppText>Owner Email:</AppText>
            <View
              style={{
                backgroundColor: "white",
                width: "85%",
                borderRadius: 15,
                alignItems: "center",
                padding: 10,
                margin: 10,
              }}
            >
              <Text selectable={true} style={{ fontSize: 18 }}>
                {num3}
              </Text>
            </View>
            <AppText>Class Code:</AppText>
            <View
              style={{
                backgroundColor: "white",
                width: "85%",
                borderRadius: 15,
                alignItems: "center",
                padding: 10,
                margin: 10,
              }}
            >
              <Text
                selectable={true}
                // selectionColor="orange"
                style={{ fontSize: 14 }}
              >
                {num2}
              </Text>
            </View>
          </View>
        </RBSheet>
      </View>
    </View>
  );
}
export default ChatHeader;
