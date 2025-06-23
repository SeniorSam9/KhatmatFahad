import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import AppLogoSVG from "../../components/AppLogoSVG";
import { TextInput } from "react-native-paper";

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
          className="flex-[0.3] flex flex-col justify-end items-center"
        >
          <AppLogoSVG width={200} height={100} />
          <Text
            className="text-3xl text-[#f9b17a]"
            style={{ fontFamily: "appFont" }}
          >
            ختمة فهد
          </Text>
        </View>
        <View
          id="register-section"
          className="flex-[0.7] flex flex-col justify-center items-center"
        >
          <Text className="text-2xl text-[#f9b17a]">تسجيل حساب</Text>
          <View className="w-[90%]">
            <TextInput
              value={email}
              onChangeText={setEmail}
              label="Email"
              keyboardType="email-address"
              mode="outlined"
              //className="w-full p-4 mb-4 bg-white border border-gray-300 rounded-2xl shadow-gray-300 shadow-xl placeholder:text-gray-500"
              autoCapitalize="none"
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
