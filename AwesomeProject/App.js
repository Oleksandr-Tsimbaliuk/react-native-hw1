import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import "react-native-gesture-handler";

import RegistrationScreen from "./src/Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import Home from "./src/Screens/Home/Home";
import PostsScreen from "./src/Screens/PostsScreen/PostsScreen";

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

  const MainStack = createStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        {/* <MainStack.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Press me"
              />
            ),
          }}
        /> */}
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // appContainer: {
  //   flex: 1,
  //   backgroundColor: "#ffd",
  // },
});
