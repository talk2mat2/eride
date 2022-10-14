import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Logs from "./logs";
import Account from "./account";
import MyTabBar from "../components/tabbar";
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import EnterPickUp from "./enterPickUp";
import AccountSettings from "./Accountsettings";
import SavedLocation from "./savedLocation";
import LocationHistory from "./locationhistory";
import Wallet from "./wallet";
import FundWallet from "./fundwallet";
import WalllletMain from "./walletmain";
import Login from "./login";
import Register from "./register";
import { useSelector } from "react-redux";
import EditProfile from "./editprofile";
import OtpView from "./otp";
import register from "./register";
import ResetPass from "./resetpassword";
import WithMap from "./withmap";

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

function Main() {
  const user = useSelector(({ user }) => user);
  const isLoggedIn = user?.isLoggedIn;
  return (
    <Stack.Navigator>
      {!isLoggedIn && (
        <>
          <Stack.Screen
            options={{ headerShown: false, ...AnimateDown }}
            name="login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false, ...AnimateSide }}
            name="register"
            component={register}
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
            component={HomeNav}
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
        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff",
  },
});

export default Main;
