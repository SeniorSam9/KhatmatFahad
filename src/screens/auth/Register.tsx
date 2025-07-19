import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RefType, RootStackParamsType } from "../../utils/types";
import { ActivityIndicator } from "react-native-paper";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Appheader from "../../components/AppHeader";
import Input from "../../components/Input";

export default function Register() {
  const emailRef = useRef<RefType>({ value: "", input: null });
  const usernameRef = useRef<RefType>({ value: "", input: null });
  const [isLoading, setIsLoading] = useState(false);
  const [unexpectedError, setUnexpectedError] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsType>>();

  const refs = [
    { ref: usernameRef, label: "اسم المستخدم" },
    { ref: emailRef, label: "البريد الإلكتروني" },
  ];

  const showError = (message: string) => {
    setUnexpectedError(message);
    setTimeout(() => {
      setUnexpectedError("");
    }, 3000);
  };

  const handleSubmit = () => {
    setIsLoading(true);

    for (let field of refs) {
      if (!field.ref.current.value.trim()) {
        showError(`عذرًا! حقل ${field.label} فارغ`);
        setIsLoading(false);
        return;
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View id="container" className="flex-1 bg-[#ffffffbd]">
            <Appheader />
            <View
              id="register-section"
              className="flex-[0.7] flex flex-col justify-center items-center"
            >
              <Text
                className="text-3xl mb-auto mt-4 text-[#2d3250]"
                style={{ fontFamily: "appFontBold" }}
              >
                إنشاء حساب
              </Text>

              <View className="w-[90%] mb-auto justify-between">
                <View className="mx-auto -translate-y-24 border-r pr-2 border-[#f9b17a]">
                  <Text
                    className="text-xl text-[#2d3250]"
                    style={{ fontFamily: "appFont" }}
                  >
                    قم بإنشاء حسابك لإنشاء جلسات ختم القرآن الكريم
                  </Text>
                </View>
                {unexpectedError.length ? (
                  <View className="mb-2 p-3 flex justify-center bg-[#e11d48] rounded-lg shadow-2xl shadow-rose-500/50">
                    <Text className="text-white mx-auto text-lg">
                      {unexpectedError}
                    </Text>
                  </View>
                ) : (
                  <></>
                )}
                <Input
                  ref={(ref) => {
                    usernameRef.current.input = ref;
                  }}
                  onPressCallback={() => usernameRef.current.input?.focus()}
                  defaultValue={usernameRef.current.value}
                  onChangeTextCallback={(text) =>
                    (usernameRef.current.value = text)
                  }
                  placeholder="اسم المستخدم"
                  className="text-right flex-1 mr-2 h-full text-gray-700"
                  textAlign="right"
                  iconName={"user-o"}
                />
                <Input
                  ref={(ref) => {
                    emailRef.current.input = ref;
                  }}
                  onPressCallback={() => emailRef.current.input?.focus()}
                  defaultValue={emailRef.current.value}
                  onChangeTextCallback={(text) =>
                    (emailRef.current.value = text)
                  }
                  placeholder="البريد الإلكتروني"
                  keyboardType="email-address"
                  className="text-right flex-1 mr-2 h-full text-gray-700"
                  textAlign="right"
                  iconName={"envelope-o"}
                />

                <TouchableOpacity
                  onPress={handleSubmit}
                  className="w-full py-4 mt-4 rounded-xl bg-[#f9b17a] shadow-md"
                >
                  {isLoading ? (
                    <ActivityIndicator
                      animating={true}
                      color="#2d3250"
                      size={32}
                    />
                  ) : (
                    <Text
                      style={{ fontFamily: "appFontBold" }}
                      className="text-white text-center text-2xl"
                    >
                      إنشاء الحساب
                    </Text>
                  )}
                </TouchableOpacity>
                <View className="mx-auto mt-4 flex flex-row gap-x-4">
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Login");
                    }}
                    className=""
                  >
                    <Text
                      style={{ fontFamily: "appFont" }}
                      className="text-[#2d3250] text-xl"
                    >
                      تسجيل الدخول
                    </Text>
                  </TouchableOpacity>
                  <Text className="text-xl" style={{ fontFamily: "appFont" }}>
                    يوجد لديك حساب؟
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
