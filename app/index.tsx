import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  // const { isSignedIn } = useAuth();
  // if (isSignedIn) {
  //   return <Redirect href={"/"} />;
  // }
  return (
    <SafeAreaView>
      <View>
        <Text>Now its working</Text>
      </View>
    </SafeAreaView>
  );
  // return <Redirect href="/(auth)/welcome" />;
};

export default Home;
