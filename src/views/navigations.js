import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Logs from "./logs";
import Account from "./account";
import MyTabBar from "../components/tabbar";
import { createStackNavigator } from "@react-navigation/stack";
import EnterPickUp from "./enterPickUp";
import AccountSettings from "./Accountsettings";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
  return (
  
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeNav"
          component={HomeNav}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EnterPickup"
          component={EnterPickUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AccounteSettings"
          component={AccountSettings}
        />
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
