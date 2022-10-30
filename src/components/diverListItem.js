import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator,
} from "react-native";
import { Avatar } from "react-native-paper";
import { appToast } from "../helpers";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import Buttons from "./buttons";

const DriverListItem = ({ navigation, item }) => {
  const [loading, setLoading] = React.useState(false);
  const [reqSent, setReq] = React.useState(false);
  const { show } = appToast();
  const handlesendReq = () => {
    setLoading(true);
    setTimeout(() => {
      setReq(true);
      setLoading(false);
      return show("Request sent to driver", {
        type: "normal",
      });
    }, 3000);
  };
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation &&
        navigation.navigate("driverdetails", {
          ...item,
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 9,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image source={item?.profile_pictured||""}  style={{ backgroundColor: colors.grey1 }} />
          <Text style={{ ...fonts.p, marginLeft: 10, fontSize: 18 }}>
            {item?.first_name}  {item?.last_name}
          </Text>
        </View>
        {!loading ? (
          <Buttons
            onPress={handlesendReq}
            textStyles={{ fontSize: 14 }}
            btnStyles={{
              height: 20,
              width: 100,
              backgroundColor: reqSent ? colors.blue : colors.primary,
            }}
            title={reqSent ? "sent" : "Send Request"}
          />
        ) : (
          <ActivityIndicator
            style={{ paddingHorizontal: 40 }}
            color={colors.primary}
            size={17}
          />
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

export default DriverListItem;
