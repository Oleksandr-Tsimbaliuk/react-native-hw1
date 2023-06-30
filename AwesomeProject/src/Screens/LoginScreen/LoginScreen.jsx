import React from "react";
import { Button, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <Text>Увійти</Text>

      <View>
        <TextInput placeholder="Логін"></TextInput>
        <TextInput placeholder="Адреса електронної пошти"></TextInput>
        <TextInput placeholder="Пароль"></TextInput>
      </View>
      <Button title="Зареєструватися" />
      <Text>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};

export default LoginScreen;
