import { StatusBar } from "expo-status-bar";
import MainStackNavigation from "./src/navigation/stack/MainStackNavigation";
import { colors } from "./src/thems/colors";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.black} />
      <MainStackNavigation />
    </>
  );
}
