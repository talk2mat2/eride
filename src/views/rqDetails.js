import React from "react";
import { View, StyleSheet, Text } from "react-native";
import moment from "moment";
import Header from "../components/header";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../helpers/colors";
import { fonts } from "../helpers/constants";
import Buttons from "../components/buttons";
import Buttons2 from "../components/buttons2";
import MiniMap2 from "../components/miniMap2";
import WithSpinner from "../components/withspinner";
import { useQueryClient } from "react-query";
import { appToast } from "../helpers";
import { useMutations } from "../services/api";
import { useSelector } from "react-redux";
const RequestDetails = ({ navigation, route, setLoading }) => {
  const [accepted, setAccepted] = React.useState(false);
  const user = useSelector(({ user }) => user?.data);
  const queryClient = useQueryClient();
  const { show: shows } = appToast();
  const [details, setDetails] = React.useState(route.params?.details || {});
  const [show, setShow] = React.useState(false);
  const { mutate } = useMutations();
  const subMitdata = (datas) => {
    setLoading(true);
    mutate(
      {
        key: "request/accept/" + details?.id,
        method: "get",
        data: datas,
      },
      {
        onSuccess: (response) => {
          setLoading(false);
          queryClient.invalidateQueries("request/" + user?.userData?.id);

          setDetails(response?.data?.[0]);
          if (response?.message) {
            return shows(response?.message, {
              type: "normal",
            });
          } else {
            Alert.alert("successfull");
          }
        },
        onError: (error) => {
          setLoading(false);
          shows(error?.statusText || "an error occured");
        },
      }
    );
  };
  const rejectRequest = (datas) => {
    setLoading(true);
    mutate(
      {
        key: "request/reject/" + details?.id,
        method: "get",
        data: datas,
      },
      {
        onSuccess: (response) => {
          setLoading(false);

          if (response?.message) {
            return shows(response?.message, {
              type: "normal",
            });
          } else {
            Alert.alert("successfull");
          }
          navigation.navigate("home");
        },
        onError: (error) => {
          setLoading(false);
          shows(error?.statusText || "an error occured");
        },
      }
    );
  };
  const endEvent = (datas) => {
    setLoading(true);
    mutate(
      {
        key: "request/start/" + details?.id,
        method: "get",
        data: datas,
      },
      {
        onSuccess: (response) => {
          setLoading(false);
          
          setDetails(response?.data?.[0]);
          if (response?.message) {
            return shows(response?.message, {
              type: "normal",
            });
          } else {
            Alert.alert("successfull");
          }
        },
        onError: (error) => {
          setLoading(false);
          shows(error?.statusText || "an error occured");
        },
      }
    );
  };

  function timeDifference(d1, d2) {
  
    var mins =
      moment
        .utc(moment(d2, "YYYYY-MM-DD HH:mm:ss").diff(moment(d1, "YYYYY-MM-DD HH:mm:ss")))
        .format("mm") || 0;
    return mins +" mins"; 
  }
  const startEvent = (datas) => {
    setLoading(true);
    mutate(
      {
        key: "request/start/" + details?.id,
        method: "get",
        data: datas,
      },
      {
        onSuccess: (response) => {
          setLoading(false);
          console.log(response);
          setDetails(response?.data?.[0]);
          if (response?.message) {
            return shows(response?.message, {
              type: "normal",
            });
          } else {
            Alert.alert("successfull");
          }
        },
        onError: (error) => {
          setLoading(false);
          shows(error?.statusText || "an error occured");
        },
      }
    );
  };
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        textStyle={{ fontSize: 19 }}
        title="Details"
        showNav={true}
      />
      <View
        style={{
          marginTop: "9%",
          alignItems: "center",
          height: 320,
          backgroundColor: "cyan",
        }}
      >
        <MiniMap2 details={details} />
      </View>
      <View
        style={{
          height: "25%",
          alignItems: "center",
          marginTop: "3%",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Ionicons
            name="person-circle-outline"
            size={90}
            color={colors.primary}
          />
          <View style={{ marginLeft: 20 }}>
            <View style={{ marginTop: "2%" }}>
              <Text style={{ ...fonts.h2, textAlign: "center" }}>
                NAME:{details?.username}
              </Text>
            </View>
            <View style={{ marginTop: "3%" }}>
              <Text style={{ ...fonts.h2, textAlign: "center" }}>
                Phone: {details?.phone}
              </Text>
            </View>
            <View style={{ marginTop: "2%" }}>
              <Text
                style={{
                  ...fonts.p,
                  textAlign: "center",
                  color: colors.primary,
                }}
              >
                Pick up: {details?.user_address}
              </Text>
            </View>
          </View>
        </View>

        {details?.is_accepted == 0 ? (
          <>
            <View style={{ marginTop: "4%" }}>
              <Text
                style={{ ...fonts.p, textAlign: "center", color: colors.grey2 }}
              >
                if you Accept you are to pick the client{"\n"} as fast you can{" "}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                width: "80%",
                marginTop: "5%",
              }}
            >
              <Buttons
                onPress={() => {
                  subMitdata();
                }}
                textStyles={{ fontSize: 17 }}
                btnStyles={{ height: 28, width: 79 }}
                title="Accept"
              />
              <Buttons2
                onPress={() => {
                  rejectRequest();
                }}
                textStyles={{ fontSize: 17 }}
                btnStyles={{ height: 28, width: 79 }}
                title="Reject"
              />
            </View>
          </>
        ) : (
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              width: "80%",
              marginTop: 10,
            }}
          >
            <View>
              <Text
                style={{
                  ...fonts.p,
                  textAlign: "center",
                  color: colors.grey2,
                  marginBottom: 10,
                }}
              >
                {details?.end_time?.split(" ")?.[1]}
              </Text>

              <Buttons
                onPress={() => {
                  endEvent();
                }}
                disabled={details?.end_time}
                textStyles={{ fontSize: 16 }}
                btnStyles={{ height: 28, width: 110 }}
                title="End Journey"
              />
            </View>
            <View>
              <Text
                style={{
                  ...fonts.p,
                  textAlign: "center",
                  color: colors.grey2,
                  marginBottom: 10,
                }}
              >
                {details?.start_time?.split(" ")?.[1]}
              </Text>
              <Buttons2
                disabled={details?.start_time}
                onPress={() => {
                  startEvent();
                }}
                textStyles={{ fontSize: 16 }}
                btnStyles={{ height: 28, width: 110 }}
                title="Start Journey"
              />
            </View>
          </View>
        )}
      </View>
      {details?.start_time && details?.end_time ? (
        <View>
          <Text style={{ ...fonts.h2, textAlign: "center" }}>Ride Ended</Text>
          <Text style={{ ...fonts.p, textAlign: "center", marginTop: 10 }}>
            duration :
            {timeDifference(
              details?.start_time,
              details?.end_time
            )}
          </Text>
        </View>
      ) : details?.start_time && !details?.end_time ? (
        <View>
          <Text style={{ ...fonts.h2, textAlign: "center" }}>
            Ride started at{" "}
          </Text>
          <Text style={{ ...fonts.p, textAlign: "center", marginTop: 10 }}>
            {details?.start_time?.split(" ")?.[1]}}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: { backgroundColor: "#ffffff", flex: 1 },
});
export default WithSpinner(RequestDetails);
