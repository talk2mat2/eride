import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Title, Paragraph } from "react-native-paper";
import {
  Tabs,
  TabScreen,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import { useSelector } from "react-redux";
import Header from "../components/header";
import { useClientQuery } from "../services/api";
import FundWallet from "./fundwallet";
import Wallet from "./wallet";
const WalletMaint = ({ navigation }) => {
  const user = useSelector(({ user }) => user?.data);
  const { data, isError, isLoading, refetch } = useClientQuery("wallet/"+user?.userData?.id
  );

  useFocusEffect(
    React.useCallback(() => {
      if (true) {
        refetch();
      }
      // refetch()
      console.log(data?.data?.[0]?.amount);
    }, [isLoading])
  );
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
          style={{
            backgroundColor: "#fff",

            borderRadius: 2,
            width: "100%",
          }}
        >
          <TabScreen label="wallet">
            <Wallet data={data} />
          </TabScreen>
          <TabScreen label="Fund wallet">
            <FundWallet refetch={refetch} data={data} />
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
