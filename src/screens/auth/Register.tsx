import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import AppLogoSVG from "../../components/AppLogoSVG";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
      <View id="container" className="flex-1 bg-[#2d3250]">
        <View
          id="app-logo"
          className="h-[20%] flex flex-col items-center gap-y-4 mt-auto"
        >
          <AppLogoSVG width={200} height={100} />
          <Text
            className="text-3xl text-[#f9b17a]"
            style={{ fontFamily: "appFont" }}
          >
            ختمة فهد
          </Text>
        </View>
        <View id="register-section" className="flex flex-col items-center">
          <Text className="text-2xl mb-auto text-[#f9b17a]">تسجيل حساب</Text>
          <View className="w-[90%]">
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
              className="w-full p-4 mb-4 bg-white border border-gray-300 rounded-2xl shadow-gray-300 shadow-xl placeholder:text-gray-500"
            />
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Full Name"
              className="w-full p-4 mb-4 bg-white border border-gray-300 rounded-2xl"
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
              className="w-full p-4 mb-4 bg-white border border-gray-300 rounded-2xl"
            />
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry
              className="w-full p-4 mb-6 bg-white border border-gray-300 rounded-2xl"
            />
            <TouchableOpacity
              onPress={handleSubmit}
              className="w-full py-4 mb-4 rounded-md bg-[#f9b17a] shadow-lg"
            >
              <Text className="text-white text-center text-2xl shadow-lg shadow-[#f9b17a]">
                تسجيل
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
