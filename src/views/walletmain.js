import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import Header from "../components/header";
import FundWallet from "./fundwallet";
import Wallet from "./wallet";
const WalletMaint = ({ navigation }) => {
  return (
    <View style={{ ...styles.container }}>
      <Header
        animate={true}
        textStyle={{ fontSize: 25 }}
        navigation={navigation}
   
        title="My Wallet"
      />

      <View style={{ flex: 1, marginTop: 10 }}>
        <Tabs
          theme={{ fontFamily: " SourceSansProSemiBold" }}
          // defaultIndex={0} // default = 0
          // uppercase={false} // true/false | default=true | labels are uppercase
          // showTextLabel={false} // true/false | default=false (KEEP PROVIDING LABEL WE USE IT AS KEY INTERNALLY + SCREEN READERS)
          // iconPosition // leading, top | default=leading
          style={{
            backgroundColor: "#fff",
            width: "60%",
            alignSelf: "center",
            borderRadius: 2,
          }} // works the same as AppBar in react-native-paper
          // dark={false} // works the same as AppBar in react-native-paper
          // theme={} // works the same as AppBar in react-native-paper
          // mode="scrollable" // fixed, scrollable | default=fixed
          // onChangeIndex={(newIndex) => {}} // react on index change
          // showLeadingSpace={true} //  (default=true) show leading space in scrollable tabs inside the header
          // disableSwipe={false} // (default=false) disable swipe to left/right gestures
        >
          <TabScreen label="wallet">
            <Wallet />
          </TabScreen>
          <TabScreen label="Fund wallet">
            <FundWallet />
          </TabScreen>
        </Tabs>
      </View>
    </View>
  );
};

function ExploreWitHookExamples() {
  const goTo = useTabNavigation();
  const index = useTabIndex();
  return (
    <View style={{ flex: 1 }}>
      <Title>Explore</Title>
      <Paragraph>Index: {index}</Paragraph>
      <Button onPress={() => goTo(1)}>Go to Flights</Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default WalletMaint;
