import React from "react";
import { Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { icons, images } from "@/constants";

const OAuth = () => {
  const loginWithGoogle = async () => {};
  return (
    <View className="w-full p-3 mt-5">
      <View className="flex flex-row w-full justify-center items-center gap-2">
        <View className="flex-1 h-[1px] bg-general-100"></View>
        <Text>Or</Text>
        <View className="flex-1 h-[1px] bg-general-100"></View>
      </View>
      <CustomButton
        title="log In with Google"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-5"
          />
        )}
        bgVariant="outline"
        textVariant="secondary"
        onPress={loginWithGoogle}
        className="mt-5"
      />
    </View>
  );
};

export default OAuth;
