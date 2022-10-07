import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Provider as PaperProvider } from "react-native-paper";
import Login from "./src/views/login";
import Register from "./src/views/register";
import ResetPass from "./src/views/resetpassword";
import EditProfile from "./src/views/editprofile";
import DriverProfile from "./src/views/driverProffile";
import WithMap from "./src/views/withmap";
import PickUpWithMap from "./src/views/pickupwithmap";
import Home from "./src/views/home";
import EnterPickUp from "./src/views/enterPickUp";
import ChangePass from "./src/views/changeapasss";
import Logs from "./src/views/logs";
import { NavigationContainer } from "@react-navigation/native";
import Account from "./src/views/account";
import Main from "./src/views/navigations";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountSettings from "./src/views/Accountsettings";



export default function App() {
  const [fontsLoaded] = useFonts({
    SourceSansProSemiBold: require("./assets/fonts/SourceSansProSemiBold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          <SafeAreaView style={[styles.container]}>
            <Main />
          </SafeAreaView>
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
});
