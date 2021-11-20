import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import DefaultStyle from "../config/styles";
function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icons}
        />
      )}
      <TextInput style={DefaultStyle.text} {...otherProps} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icons: {
    marginRight: 5,
  },
});

export default AppTextInput;
