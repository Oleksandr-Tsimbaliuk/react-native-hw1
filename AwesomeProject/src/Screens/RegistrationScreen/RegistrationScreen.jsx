import React, { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";

import { styles } from "./StyledRegistrationScreen";

const RegistrationScreen = () => {
  const [userImage, setUserImage] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(null);

  const handleAddUserImage = {};
  const handleRemoveUserImage = () => {
    setUserImage(null);
  };
  const handleFormSubmitButton = () => {
    console.log(login, email, password);
  };
  return (
    <View style={styles.registrationContainer}>
      <View>
        {/* <Image source={{ uri: "" }}></Image> */}
        <Button onPress={handleAddUserImage} title="Add photo" />
        <Button onPress={handleRemoveUserImage} title="Remove photo" />
      </View>

      <Text>Реєстрація</Text>

      <View>
        <TextInput placeholder="Логін"></TextInput>
        <TextInput placeholder="Адреса електронної пошти"></TextInput>
        <TextInput placeholder="Пароль"></TextInput>
      </View>
      <Text onPress={handleFormSubmitButton} title="Зареєструватися" />
      <Text>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};

export default RegistrationScreen;
