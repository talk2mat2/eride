import React from "react";
import { View, Text ,   TouchableNativeFeedback} from "react-native";
import { Avatar } from "react-native-paper";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import Buttons from "./buttons";

const DriverListItem = () => {
  return (
    <TouchableNativeFeedback>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 9,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image style={{ backgroundColor:colors.grey1 }} />
          <Text style={{ ...fonts.p, marginLeft: 10,fontSize:18}}>Rachel Dave</Text>
        </View>
        <Buttons
          textStyles={{ fontSize: 14 }}
          btnStyles={{ height: 20, width: 100 }}
          title="Send Request"
        />
      </View>
    </TouchableNativeFeedback>
  );
};

export default DriverListItem;
