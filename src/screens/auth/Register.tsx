import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLogoSVG from "../../components/AppLogoSVG";
import { FontAwesome } from "@expo/vector-icons";
import { RefType, RootStackParamsType } from "../../utils/types";
import { ActivityIndicator } from "react-native-paper";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Register() {
  const emailRef = useRef<RefType>({ value: "", input: null });
  const usernameRef = useRef<RefType>({ value: "", input: null });
  const passwordRef = useRef<RefType>({ value: "", input: null });
  const confirmPasswordRef = useRef<RefType>({ value: "", input: null });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsType>>();

  const handleSubmit = () => {
    setIsLoading(true);
    // if (passwordRef.current !== confirmPasswordRef.current) {
    //   alert("Passwords do not match!");
    // } else {
    //   alert("Form submitted successfully!");
    // }
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
            <View
              id="app-logo"
              className="flex-[0.3] flex flex-col justify-center items-center bg-[#2d3250] rounded-b-[15%]"
            >
              <AppLogoSVG width={200} height={100} />
            </View>

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
                <TouchableWithoutFeedback
                  onPress={() => emailRef.current.input?.focus()}
                >
                  <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-5 w-full justify-between mb-4 border border-[#2d3250]">
                    <TextInput
                      ref={(ref) => {
                        emailRef.current.input = ref;
                      }}
                      defaultValue={emailRef.current.value}
                      onChangeText={(text) => (emailRef.current.value = text)}
                      placeholder="البريد الإلكتروني"
                      keyboardType="email-address"
                      placeholderTextColor="#A0A0A0"
                      className="text-right flex-1 mr-2 h-full text-gray-700"
                      textAlign="right"
                    />
                    <FontAwesome name="envelope-o" size={20} color="#A0A0A0" />
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                  onPress={() => usernameRef.current.input?.focus()}
                >
                  <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-5 w-full justify-between mb-4 border border-[#2d3250]">
                    <TextInput
                      ref={(ref) => {
                        usernameRef.current.input = ref;
                      }}
                      defaultValue={usernameRef.current.value}
                      onChangeText={(text) =>
                        (usernameRef.current.value = text)
                      }
                      placeholder="اسم المستخدم"
                      placeholderTextColor="#A0A0A0"
                      className="text-right flex-1 mr-2 h-full text-gray-700"
                      textAlign="right"
                    />
                    <FontAwesome name="envelope-o" size={20} color="#A0A0A0" />
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                  onPress={() => passwordRef.current.input?.focus()}
                >
                  <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-5 w-full justify-between mb-4 border border-[#2d3250]">
                    <TextInput
                      ref={(ref) => {
                        passwordRef.current.input = ref;
                      }}
                      defaultValue={passwordRef.current.value}
                      onChangeText={(text) =>
                        (passwordRef.current.value = text)
                      }
                      placeholder="كلمة المرور"
                      placeholderTextColor="#A0A0A0"
                      className="text-right flex-1 mr-2 h-full text-gray-700"
                      textAlign="right"
                    />
                    <FontAwesome name="envelope-o" size={20} color="#A0A0A0" />
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                  onPress={() => confirmPasswordRef.current.input?.focus()}
                >
                  <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-5 w-full justify-between mb-4 border border-[#2d3250]">
                    <TextInput
                      ref={(ref) => {
                        confirmPasswordRef.current.input = ref;
                      }}
                      defaultValue={confirmPasswordRef.current.value}
                      onChangeText={(text) =>
                        (confirmPasswordRef.current.value = text)
                      }
                      placeholder="كلمة المرور"
                      placeholderTextColor="#A0A0A0"
                      className="text-right flex-1 mr-2 h-full text-gray-700"
                      textAlign="right"
                    />
                    <FontAwesome name="envelope-o" size={20} color="#A0A0A0" />
                  </View>
                </TouchableWithoutFeedback>

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
