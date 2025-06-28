import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "react-native";
import StackNavigation from "./src/routes/StackNavigation";
import "./global.css";

// prevent hiding before loading the font
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    appFont: require("./assets/fonts/static/IBMPlexSansArabic-Regular.ttf"),
    appFontBold: require("./assets/fonts/static/IBMPlexSansArabic-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <StackNavigation />
    </>
  );
}
