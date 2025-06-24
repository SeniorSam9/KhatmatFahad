import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
  Platform,
} from "react-native";
import AppLogoSVG from "../../components/AppLogoSVG";
import { FontAwesome } from "@expo/vector-icons";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      // Handle form submission
      alert("Form submitted successfully!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            <View className="shadow-sm shadow-gray-400 flex-row items-center bg-gray-100 rounded-xl px-4 py-2 w-full justify-between mb-4">
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="البريد الإلكتروني"
                placeholderTextColor="#A0A0A0"
                className="text-right flex-1 mr-2 text-gray-700"
                textAlign="right"
              />
              <FontAwesome name="envelope-o" size={20} color="#A0A0A0" />
            </View>
            <View className="shadow-sm shadow-gray-400 flex-row items-center bg-gray-100 rounded-xl px-4 py-2 w-full justify-between mb-4">
              <TextInput
                value={username}
                onChangeText={setUsername}
                placeholder="اسمك"
                placeholderTextColor="#A0A0A0"
                className="text-right flex-1 mr-2 text-gray-700"
                textAlign="right"
              />
              <FontAwesome name="user-o" size={20} color="#A0A0A0" />
            </View>
            <View className="shadow-sm shadow-gray-400 flex-row items-center bg-gray-100 rounded-xl px-4 py-2 w-full justify-between mb-4">
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="كلمة المرور"
                placeholderTextColor="#A0A0A0"
                className="text-right flex-1 mr-2 text-gray-700"
                textAlign="right"
              />
              <FontAwesome name="lock" size={20} color="#A0A0A0" />
            </View>
            <View className="shadow-sm shadow-gray-400 flex-row items-center bg-gray-100 rounded-xl px-4 py-2 w-full justify-between mb-4">
              <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="تأكيد كلمة المرور"
                placeholderTextColor="#A0A0A0"
                className="text-right flex-1 mr-2 text-gray-700"
                textAlign="right"
              />
              <FontAwesome name="lock" size={20} color="#A0A0A0" />
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              className="w-full py-4 mb-4 rounded-xl bg-[#f9b17a] shadow-lg"
            >
              <Text
                style={{ fontFamily: "appFontBold" }}
                className="text-white text-center text-2xl shadow-sm shadow-gray-400"
              >
                إنشاء الحساب
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
