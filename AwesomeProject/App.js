import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import Home from "./src/Screens/Home/Home";

import imageBackground from "./assets/app_background.png";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Roboto-Medium": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
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
    </NavigationContainer>
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
