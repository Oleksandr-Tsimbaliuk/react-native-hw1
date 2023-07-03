import React, { useState } from "react";
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./StyledRegistrationScreen";
import InputRegistration from "../../components/InputRegistration/InputRegistration";
import imageBackground from "../../../assets/images/app_background.png";

const RegistrationScreen = () => {
  const navigation = useNavigation();

  const [userImage, setUserImage] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleAddUserImage = {};
  const handleRemoveUserImage = () => {
    setUserImage(null);
  };

  const handleTogglePasswordShow = () => {
    setShowPassword(!showPassword);
  };
  const handleFormSubmitButton = () => {
    console.log(login, email, password);
    navigation.navigate("Home");
  };
  return (
    <ImageBackground
      source={imageBackground}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.registrationContainer}>
          <View style={styles.userImageContainer}>
            {/* <Image source={{ uri: "" }}></Image> */}
            <Button onPress={handleAddUserImage} title="Add photo" />
            <Button onPress={handleRemoveUserImage} title="Remove photo" />
          </View>

          <Text style={styles.registrationFormHeader}> Реєстрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            // style={styles.container}
            // keyboardVerticalOffset={-255}
          >
            <View style={styles.registrationForm}>
              <InputRegistration
                name={"login"}
                type={"text"}
                value={login}
                placeholder="Логін"
                onChangeText={setLogin}
              ></InputRegistration>
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
                  style={{ position: "absolute", right: 13, top: 13 }}
                  onPress={handleTogglePasswordShow}
                >
                  <Text>{showPassword ? "Приховати" : "Показати"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
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
            onPress={() => navigation.navigate("Login")}
          >
            Вже є акаунт? Увійти
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegistrationScreen;
