import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Provider as PaperProvider } from "react-native-paper";
// import Login from "./src/views/login";
// import Register from "./src/views/register";
// import ResetPass from "./src/views/resetpassword";
// import EditProfile from "./src/views/editprofile";
// import DriverProfile from "./src/views/driverProffile";
// import WithMap from "./src/views/withmap";
// import PickUpWithMap from "./src/views/pickupwithmap";
// import Home from "./src/views/home";
// import EnterPickUp from "./src/views/enterPickUp";
// import ChangePass from "./src/views/changeapasss";
// import Logs from "./src/views/logs";
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from "@react-navigation/native";
// import Account from "./src/views/account";
import Main from "./src/views/navigations";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
// import AccountSettings from "./src/views/Accountsettings";
import { ToastProvider } from "react-native-toast-notifications";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { persistor, store } from "./src/redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    SourceSansProSemiBold: require("./assets/fonts/SourceSansProSemiBold.ttf"),
  });
  const queryClient = new QueryClient();
  if (!fontsLoaded) {
    return null;
  }

  // Notifications.setNotificationHandler({
  //   handleNotification: async () => ({
  //     shouldShowAlert: true,
  //     shouldPlaySound: false,
  //     shouldSetBadge: false,
  //   }),
  // });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <QueryClientProvider client={queryClient}>
            <PaperProvider>
              <SafeAreaProvider>
                <SafeAreaView style={[styles.container]}>
                  <ToastProvider offsetBottom={70}>
                    <Main />
                  </ToastProvider>
                </SafeAreaView>
              </SafeAreaProvider>
            </PaperProvider>
          </QueryClientProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
});
