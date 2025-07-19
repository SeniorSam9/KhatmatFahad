import { View } from "react-native";
import AppLogoSVG from "./AppLogoSVG";

export default function Appheader() {
  return (
    <View
      id="app-logo"
      className="flex-[0.3] flex flex-col justify-center items-center bg-[#2d3250] rounded-b-[15%]"
    >
      <AppLogoSVG width={200} height={100} />
    </View>
  );
}
