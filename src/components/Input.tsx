import { FontAwesome } from "@expo/vector-icons";
import { Ref } from "react";
import { KeyboardTypeOptions, TextInput, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

type InputProps = {
  onPressCallback?: (() => void) | undefined;
  ref?: Ref<TextInput> | undefined;
  defaultValue?: string | undefined;
  onChangeTextCallback?: ((text: string) => void) | undefined;
  placeholder?: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  className?: string | undefined;
  textAlign?: "center" | "right" | "left" | undefined;
  iconName: any;
};

export default function Input({
  onPressCallback,
  ref,
  defaultValue,
  onChangeTextCallback,
  placeholder,
  keyboardType,
  className,
  textAlign,
  iconName,
}: InputProps) {
  return (
    <TouchableWithoutFeedback onPress={onPressCallback}>
      <View className="flex-row items-center bg-gray-100 rounded-2xl px-4 py-5 w-full justify-between mb-4 border border-[#2d3250]">
        <TextInput
          ref={ref}
          defaultValue={defaultValue}
          onChangeText={onChangeTextCallback}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor="#A0A0A0"
          className={className}
          textAlign={textAlign}
        />
        <FontAwesome name={iconName} size={20} color="#A0A0A0" />
      </View>
    </TouchableWithoutFeedback>
  );
}
