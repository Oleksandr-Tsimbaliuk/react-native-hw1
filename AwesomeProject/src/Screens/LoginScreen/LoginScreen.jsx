import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../LoginScreen/StyledLoginScreen";
import InputRegistration from "../../components/InputRegistration/InputRegistration";
import imageBackground from "../../../assets/images/app_background.png";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmitButton = () => {
    console.log(email, password);
    navigation.navigate("Home");
  };

  const handleTogglePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground
      source={imageBackground}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginFormHeader}>Увійти</Text>

          <View style={styles.loginForm}>
            <InputRegistration
              name={"email"}
              type={"email"}
              value={email}
              placeholder="Адреса електронної пошти"
              onChangeText={setEmail}
            ></InputRegistration>
            <View>
              <InputRegistration
                name={"password"}
                type={"password"}
                value={password}
                placeholder="Пароль"
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              ></InputRegistration>
              <TouchableOpacity
                style={{ position: "absolute", top: 13, right: 13 }}
                onPress={handleTogglePasswordShow}
              >
                <Text>{showPassword ? "Приховати" : "Показати"}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.loginFormSubmitButton}
            onPress={handleFormSubmitButton}
            title="Зареєструватися"
          >
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              Увійти
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "#1B4371",
            }}
            onPress={() => navigation.navigate("Registration")}
          >
            Немає акаунту? Зареєструватися
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;
