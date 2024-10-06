import { onboardingScreenData } from "@/constants";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import CustomButton from "../components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex == onboardingScreenData.length - 1;
  return (
    <SafeAreaView className="flex h-full justify-center items-center bg-white py-2 px-3">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="flex w-full justify-end items-end px-5"
      >
        <Text className="text-lg text-black font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboardingScreenData.map((item) => {
          return (
            <View
              key={item.id}
              className="flex w-full justify-center items-center p-5"
            >
              <Image
                source={item.image}
                className="w-full h-[300px]"
                resizeMode="contain"
              />
              <View className="w-full flex justify-center mt-3">
                <Text className="text-black text-3xl text-center my-2 font-bold mx-10">
                  {item.title}
                </Text>
              </View>
              <Text className="text-[#858585] text-xl text-center font-JakartaSemiBold mx-10 mt-3">
                {item.description}
              </Text>
            </View>
          );
        })}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 "
        onPress={() => {
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1);
        }}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
