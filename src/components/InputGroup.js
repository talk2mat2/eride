import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "../helpers/colors";
const InputGroup = ({
  autoFocus = false,
  value = "",
  placeholder,
  isset,
  onChangeText,
  onFocus,
}) => {
  // const [isset, setIsset] = React.useState(false);
  return (
    <View style={styles.container}>
      {!isset ? (
        <FontAwesome5 name="dot-circle" size={20} color={colors.lightblue} />
      ) : (
        <AntDesign name="search1" size={20} color={colors.grey2} />
      )}

      <TextInput
        onChangeText={onChangeText}
        onFocus={onFocus}
        placeholder=""
        value={value}
        autoFocus={autoFocus}
        style={styles.input}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: { height: "100%", flex: 1, marginLeft: 9, fontSize: 16 },
  container: {
    backgroundColor: colors.grey1,
    marginVertical: 2,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 9,
    height: 50,
    paddingHorizontal: 8,
  },
});
export default InputGroup;
