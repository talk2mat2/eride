import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Logs from "./logs";
import Account from "./account";
import MyTabBar from "../components/tabbar";
import * as Device from "expo-device";
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import EnterPickUp from "./enterPickUp";
import AccountSettings from "./Accountsettings";
import * as Notifications from "expo-notifications";
import SavedLocation from "./savedLocation";
import LocationHistory from "./locationhistory";
import Wallet from "./wallet";
import * as Location from "expo-location";
import FundWallet from "./fundwallet";
import WalllletMain from "./walletmain";
import Login from "./login";
import Register from "./register";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "./editprofile";
import OtpView from "./otp";
import register from "./register";
import ResetPass from "./resetpassword";
import WithMap from "./withmap";
import PickUpWithMap from "./pickupwithmap";
import DriverProfile from "./driverProffile";
import io, { Socket } from "socket.io-client";
import WithSpinner from "../components/withspinner";
import {
  addNearbyDrivers,
  setMylocation,
} from "../redux/reducers/locationSlice";
import corsapi from "../services/corsapi";
import { calcDistanceLatLong } from "../helpers";
import driverlogin from "./driverlogin";
import driverregister from "./driverregister";
import driverregistersuccess from "./driverregistersuccess";
import DriverDash from "./driverdash";
import RequestDetails from "./rqDetails";
import About from "./about";
import Terms from "./Terms";
import Privacy from "./privacy";
import Abouteride from "./abouteride";
import Help from "./help";
import saveLocation from "./saveLocation";
import Messages from "./messages";
import ChangePass from "./changeapasss";
import login from "./login";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Rotate = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.FadeOutToBottomAndroidSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          // {
          //   rotate: current.progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [1, 0],
          //   }),
          // },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};
const AnimateDown = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.FadeOutToBottomAndroidSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          // {
          //   rotate: current.progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [1, 0],
          //   }),
          // },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};
const AnimateSide = {
  gestureDirection: "horizontal",
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.FadeOutToBottomAndroidSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          // {
          //   rotate: current.progress.interpolate({
          //     inputRange: [0, 1],
          //     outputRange: [1, 0],
          //   }),
          // },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

function HomeNav() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Logs"
        component={Logs}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Account}
      />
    </Tab.Navigator>
  );
}

function DriverHomeNav() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={DriverDash}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Account}
      />
    </Tab.Navigator>
  );
}

function Main({ setLoading }) {
  const user = useSelector(({ user }) => user);
  const [socketio, setSocketio] = React.useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const isLoggedIn = user?.isLoggedIn;
  const dispatch = useDispatch();
  const myLocation = useSelector(({ myLocation }) => myLocation?.myLocation);
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState(false);
  const notificationListener = React.useRef();
  const responseListener = React.useRef();

  const updatePushToken = (datas) => {
    mutate(
      {
        key: "updatetoken",
        method: "post",
        data: datas,
      },
      {
        onSuccess: (response) => {},
        onError: (error) => {},
      }
    );
  };

  React.useEffect(() => {
    //driver update his token for push service
    if (isLoggedIn &&user?.data?.userData?.role == "driver") {
      registerForPushNotificationsAsync().then((token) => {
        setExpoPushToken(token);
        updatePushToken({
          pushtoken: expoPushToken,
          driverid: user?.uuserData.id,
        });
        console.log("token", token);
      });

      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });

      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response);
        });
    }

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      // console.log(location.coords);
      if (location?.coords?.longitude && location?.coords?.latitude) {
        setLoading(true);
        await corsapi
          .getPlacesByLngLat(
            location?.coords?.latitude,
            location?.coords?.longitude
          )
          .then((res) => {
            setLoading(false);
            // console.log("MY ADD", res?.results?.[0]);
            dispatch(
              setMylocation({
                lat: location?.coords?.latitude,
                lng: location?.coords?.longitude,
                address: res?.results?.[0]?.formatted_address,
              })
            );
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }
    })();
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      let latitude;
      let longitude;
      let geocoding;
      let address;
      let user_city;
      let driver_city;
      let locations = [];
      const socket = io("https://testsite.essentialdirect.ng");
      setSocketio(socket);
      setTimeout(() => {
        if (user?.data?.userData?.role == "driver") {
          Location.watchPositionAsync(
            { accuracy: Location.Accuracy.Balanced, distanceInterval: 1000 },
            async (data) => {
              // console.log("user",user.data.userData)
              // latitude = data.coords.latitud`e;
              // longitude = data.coords.longitude;
              socket.emit("store-location", {
                ...user?.data.userData,
                latitude: data.coords.latitude,
                longitude: data.coords.longitude,

                // latitude: data.coords.latitude,
                // longitude: data.coords.longitude,
                // user_id: user.data.userData.id,
                // user: {
                //   phone: user.data.userData?.phone,
                //   first_name: user.data.userData.first_name,
                //   last_name: user.data.userData.last_name,
                //   profile_pictured: user.data.userData.profile_pictured,
                // },
              });

              // await corsapi
              //   .getPlacesByLngLat(
              //     location?.coords?.latitude,
              //     location?.coords?.longitude
              //   )
              //   .then((res) => {
              //     address = res?.results[0].formatted_address;
              //     user_city = res?.results[0]?.address_components[4]?.long_name;
              //     console.log(user_city);
              //     socket.emit("store-location", {
              //       latitude: latitude,
              //       longitude: longitude,
              //     });
              //   })
              //   .catch((err) => {
              //     console.log("erro hannpend"), err;
              //     setLoading(false);
              //   });
            }
          );
        }
      }, 3000);
      // setTimeout(()=>{console.log(socket.connected)
      //   socket.emit("store-location", {
      //     latitude: latitude,
      //     longitude: longitude,
      //   });
      // },3000)

      socket.on("send-location", async function (data) {
        // console.log("received data from socekt server", data);
        if (myLocation) {
          const distanceApart = calcDistanceLatLong(
            myLocation.lat,
            myLocation.lng,
            data?.latitude,
            data?.longitude
          )?.toFixed(1);
          //check if driver is within 60km
          // ikeja is 7km in length and 7 km width
          if (distanceApart < 10) {
            dispatch(addNearbyDrivers(data));
          }
        }
      });
    } else {
      console.log("logged out");

      setSocketio(null);

      // console.log("not logged in");
      // console.log(props.currentuser);
    }
  }, [isLoggedIn, myLocation]);
  return (
    <Stack.Navigator>
      {!isLoggedIn && (
        <>
          <Stack.Screen
            options={{ headerShown: false, ...AnimateDown }}
            name="login"
            component={login}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateDown }}
            name="driverlogin"
            component={driverlogin}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="register"
            component={register}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="driverregister"
            component={driverregister}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="successregister"
            component={driverregistersuccess}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateDown }}
            name="otpView"
            component={OtpView}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateDown }}
            name="resetpass"
            component={ResetPass}
          />
        </>
      )}

      {isLoggedIn && (
        <>
          <Stack.Screen
            options={{ headerShown: false, ...Rotate }}
            name="HomeNav"
            component={
              user?.data?.userData?.role == "driver" ? DriverHomeNav : HomeNav
            }
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="EnterPickup"
            component={EnterPickUp}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="AccounteSettings"
            component={AccountSettings}
          />
          <Stack.Screen
            options={{ headerShown: false, ...Rotate }}
            name="SavedLocation"
            component={SavedLocation}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateDown }}
            name="Wallet"
            component={WalllletMain}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateDown }}
            name="FundWallet"
            component={Wallet}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateDown }}
            name="LocationHistory"
            component={LocationHistory}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateDown }}
            name="editProfile"
            component={EditProfile}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="withmap"
            component={WithMap}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="pickupwithmap"
            component={PickUpWithMap}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="driverdetails"
            component={DriverProfile}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="rqdetails"
            component={RequestDetails}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="savelocation"
            component={saveLocation}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="Messages"
            component={Messages}
          />
        </>
      )}
      <Stack.Screen
        options={{ headerShown: false, ...AnimateSide }}
        name="about"
        component={About}
      />
      <Stack.Screen
        options={{ headerShown: false, ...AnimateSide }}
        name="terms"
        component={Terms}
      />
      <Stack.Screen
        options={{ headerShown: false, ...AnimateSide }}
        name="privacy"
        component={Privacy}
      />
      <Stack.Screen
        options={{ headerShown: false, ...AnimateSide }}
        name="abouteride"
        component={Abouteride}
      />
      <Stack.Screen
        options={{ headerShown: false, ...AnimateSide }}
        name="help"
        component={Help}
      />
      <Stack.Screen
        options={{ headerShown: false, ...AnimateSide }}
        name="changepass"
        component={ChangePass}
      />
    </Stack.Navigator>
  );
}
async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff",
  },
});

export default WithSpinner(Main);
