import { router } from "expo-router";
import React, { useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Onboarding = () => {
  const swiperRef = useRef(null);
  return (
    <SafeAreaView className="flex h-full justify-between items-center bg-white">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="flex w-full justify-end items-end p-8"
      >
        <Text className="text-lg text-black font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
        activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF]" />}
      ></Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
