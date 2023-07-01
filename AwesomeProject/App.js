import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./src/assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Inter/static/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.appContainer}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fdd",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
