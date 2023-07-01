import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./StyledRegistrationScreen";
import InputRegistration from "../../components/InputRegistration/InputRegistration";

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
      <View style={styles.userImageContainer}>
        {/* <Image source={{ uri: "" }}></Image> */}
        <Button onPress={handleAddUserImage} title="Add photo" />
        <Button onPress={handleRemoveUserImage} title="Remove photo" />
      </View>

      <View style={styles.registrationForm}>
        <Text style={styles.registrationFormHeader}> Реєстрація</Text>
        <InputRegistration
          name={"login"}
          type={"text"}
          value={login}
          placeholder="Логін"
        ></InputRegistration>
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
        style={styles.registrationFormSubmitButton}
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
          Зареєструватися
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "#1B4371",
        }}
      >
        Вже є акаунт? Увійти
      </Text>
    </View>
  );
};

export default RegistrationScreen;
