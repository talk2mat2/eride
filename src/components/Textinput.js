import React from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { colors } from "../helpers/colors";

const TextInputs = ({
  inputStyles = {},
  placeholder = "",secureTextEntry = false,
}) => {
  const [text, setText] = React.useState("");
  return (
    <View style={{ ...styles.container, ...inputStyles }}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={{ backgroundColor: colors.white }}
        label={placeholder}
        value={text}
        onChangeText={(text) => setText(text)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 40,
    width: "100%",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default TextInputs;
