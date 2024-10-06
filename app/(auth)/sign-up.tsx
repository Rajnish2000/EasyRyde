import { icons, images } from "@/constants";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import { Link, useRouter } from "expo-router";
import OAuth from "../components/OAuth";
import { useSignUp } from "@clerk/clerk-expo";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { isLoaded, signUp, setActive } = useSignUp();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = React.useState("");
  const router = useRouter();
  const getSignUp = async () => {
    // if (!isLoaded) {
    //   return;
    // }
    // try {
    //   await signUp.create({
    //     ...form,
    //   });
    //   await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    //   setPendingVerification(true);
    // } catch (err: any) {
    //   // See https://clerk.com/docs/custom-flows/error-handling
    //   // for more info on error handling
    //   console.error(JSON.stringify(err, null, 2));
    // }
  };

  // const onPressVerify = async () => {
  //   if (!isLoaded) {
  //     return;
  //   }

  //   try {
  //     const completeSignUp = await signUp.attemptEmailAddressVerification({
  //       code,
  //     });

  //     if (completeSignUp.status === "complete") {
  //       await setActive({ session: completeSignUp.createdSessionId });
  //       router.replace("/");
  //     } else {
  //       console.error(JSON.stringify(completeSignUp, null, 2));
  //     }
  //   } catch (err: any) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error(JSON.stringify(err, null, 2));
  //   }
  // };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white px-4">
        <View className="flex flex-col">
          <Image
            source={images.signUpCar}
            className="w-full h-[300px] bg-cover"
          />
          <Text className="text-2xl font-JakartaBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        {!pendingVerification && (
          <View>
            <InputField
              label="Name"
              labelStyle=""
              secureTextEntry={false}
              placeholder="Enter your Name"
              icon={icons.person}
              value={form.name}
              onTextInput={(value: any) => setForm({ ...form, name: value })}
            />
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
              onTextInput={(value: any) =>
                setForm({ ...form, password: value })
              }
            />
            <CustomButton title="Sign Up" onPress={getSignUp} />
            {/* OAuth */}
            <OAuth />
            <Link href="/sign-in" className="w-full text-center my-5">
              <Text className="text-xl text-center">
                Already have an Account?{" "}
              </Text>
              <Text className="text-xl text-primary-500">Log In</Text>
            </Link>
          </View>
        )}
        {/* {pendingVerification && (
          <>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
            <CustomButton title="Verify Email" onPress={onPressVerify} />
          </>
        )} */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
