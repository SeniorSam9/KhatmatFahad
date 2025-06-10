import { StatusBar } from "react-native";
import StackNavigation from "./src/routes/StackNavigation";
import "./global.css";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <StackNavigation />
    </>
  );
}
