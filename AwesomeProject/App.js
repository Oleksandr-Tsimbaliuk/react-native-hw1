import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import imageBackground from "./src/assets/images/app_background.png";

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
      <ImageBackground
        source={imageBackground}
        resizeMode="cover"
        style={styles.imageBackground}
      ></ImageBackground>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#ffd",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
  },
});
