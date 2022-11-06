import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  ActivityIndicator,
} from "react-native";
import { Avatar } from "react-native-paper";
import { useSelector } from "react-redux";
import { appToast } from "../helpers";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import Buttons from "./buttons";

const DriverListItem = ({ navigation, item }) => {
  const [loading, setLoading] = React.useState(false);
  const user = useSelector(({ user }) => user?.data);
  const myLocation = useSelector(({ myLocation }) => myLocation?.myLocation);
  const myDestination = useSelector(
    ({ myLocation }) => myLocation?.myDestination
  );
  const [reqSent, setReq] = React.useState(false);
  const { show } = appToast();
  const subMitdata =  async (datas) => {
    setLoading(true);
    mutate(
      {
        key: "request",
        method: "get",
        data: datas,
      },
      {
        onSuccess: (response) => {
          setLoading(false);
          // show("Request sent to driver", {
          //   type: "normal",
          // });

          if (response?.message) {
            return show(response?.message, {
              type: "normal",
            });
          } else {
            Alert.alert("successfull");
          }
        },
        onError: (error) => {
          setLoading(false);
          show(error?.statusText || "an error occured");
        },
      }
    );
  };
  const handlesendReq = async () => {
    const data = {
      userid: user?.userData.id,
      driverid: item.id,
      user_destination_lng: myDestination.lng,
      user_destination_lat: myDestination.lat,
      user_location_lng: myLocation.lng,
      user_location_lat: myLocation.lat,
      user_address: myLocation.address,
      phone: user?.userData?.phone,
      username: user?.userData.first_name,
    };

    await subMitdata(data);
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
          <Avatar.Image
            source={item?.profile_pictured || ""}
            style={{ backgroundColor: colors.grey1 }}
          />
          <Text style={{ ...fonts.p, marginLeft: 10, fontSize: 18 }}>
            {item?.first_name} {item?.last_name}
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
