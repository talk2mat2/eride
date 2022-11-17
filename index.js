// import { registerRootComponent } from 'expo';
// import App from './App';
import { AppRegistry, Platform } from "react-native";
import { registerRootComponent } from "expo";
import App from "./App";
// import { name as main } from "./app.json";

if (Platform.OS == "android") {
    registerRootComponent(App);
  } else {
    AppRegistry.registerComponent("main", () => App);
  }