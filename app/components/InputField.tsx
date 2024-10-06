import { InputFieldProps } from "@/types/type";
import React from "react";
import {
  Image,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry,
  containerStyle,
  inputStyle,
  iconStyle,
  placeholder,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="w-full my-2 px-2">
          <Text
            className={`text-lg font-JakartaSemiBold m-2 px-5 ${inputStyle}`}
          >
            {label}
          </Text>
          <View className="w-full flex flex-row justify-start items-center bg-neutral-200 relative rounded-full border border-neutral-100">
            {icon && (
              <Image
                source={icon}
                alt="no image"
                className={`w-6 h-6 ml-5 mr-3 ${iconStyle}`}
              />
            )}
            <TextInput
              className={`w-full p-3 font-JakartaSemiBold text-[15px] rounded-full text-left ${inputStyle}`}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
