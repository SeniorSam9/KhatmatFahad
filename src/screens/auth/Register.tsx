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
      <View id="container" className="flex-1 bg-gray-200">
        <View
          id="upper-section"
          className="h-[30%] w-full bg-[#48426d] rounded-b-[40px] flex"
        >
          <Image
            source={require("../../../assets/AppLogo.png")}
            style={{ width: 200, height: 200 }}
            className="translate-y-11 ml-6"
          />
          <Text className="text-right text-4xl text-white mr-6">ختمة فهد</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

{
  /* <Text className="text-2xl font-bold mb-6">Register</Text> */
}

{
  /* Email Field */
}
// <TextInput
//   value={email}
//   onChangeText={setEmail}
//   placeholder="Email"
//   keyboardType="email-address"
//   className="w-full p-4 mb-4 bg-white border border-gray-300 rounded-md"
// />

{
  /* Name Field */
}
// <TextInput
//   value={name}
//   onChangeText={setName}
//   placeholder="Full Name"
//   className="w-full p-4 mb-4 bg-white border border-gray-300 rounded-md"
// />

{
  /* Password Field */
}
// <TextInput
//   value={password}
//   onChangeText={setPassword}
//   placeholder="Password"
//   secureTextEntry
//   className="w-full p-4 mb-4 bg-white border border-gray-300 rounded-md"
// />

{
  /* Confirm Password Field */
}
// <TextInput
//   value={confirmPassword}
//   onChangeText={setConfirmPassword}
//   placeholder="Confirm Password"
//   secureTextEntry
//   className="w-full p-4 mb-6 bg-white border border-gray-300 rounded-md"
// />

{
  /* Submit Button */
}
// <TouchableOpacity
//   onPress={handleSubmit}
//   className="w-full py-4 mb-4 rounded-md bg-green-500 shadow-lg"
// >
//   <Text className="text-white text-center text-lg">Register</Text>
// </TouchableOpacity>
