import { icons, images } from "@/constants";
import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const getSignIn = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white px-4">
        <View className="flex flex-col">
          <Image
            source={images.signUpCar}
            className="w-full h-[300px] bg-cover"
          />
          <Text className="text-2xl font-JakartaBold absolute bottom-5 left-5">
            Welcome To EasyRyde👋
          </Text>
        </View>
        <View>
          <InputField
            label="Email"
            labelStyle=""
            secureTextEntry={false}
            placeholder="Enter your Email"
            icon={icons.email}
            value={form.email}
            onTextInput={(value: any) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            labelStyle=""
            secureTextEntry={true}
            placeholder="Enter your Password"
            icon={icons.lock}
            value={form.password}
            onTextInput={(value: any) => setForm({ ...form, password: value })}
          />
          <CustomButton title="Sign In" onPress={getSignIn} />
          {/* OAuth */}
          <OAuth />
          <Link href="/sign-up" className="w-full text-center my-5">
            <Text className="text-xl text-center">Don`t have an Account? </Text>
            <Text className="text-xl text-primary-500">Sign Up</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
