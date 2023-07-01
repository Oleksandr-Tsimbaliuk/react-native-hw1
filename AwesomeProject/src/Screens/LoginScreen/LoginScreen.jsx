import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "../LoginScreen/StyledLoginScreen";
import InputRegistration from "../../components/InputRegistration/InputRegistration";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  const handleFormSubmitButton = () => {
    console.log(login, email, password);
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginFormHeader}>Увійти</Text>
      <View style={styles.loginForm}>
        <InputRegistration
          name={"email"}
          type={"email"}
          value={email}
          placeholder="Адреса електронної пошти"
        ></InputRegistration>
        <InputRegistration
          name={"password"}
          type={"password"}
          value={password}
          placeholder="Пароль"
        ></InputRegistration>
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
      >
        Немає акаунту? Зареєструватися
      </Text>
    </View>
  );
};

export default LoginScreen;
