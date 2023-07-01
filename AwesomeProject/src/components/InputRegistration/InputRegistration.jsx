import React from "react";
import { TextInput } from "react-native";
import { styles } from "./StyledInputRegistration";

const InputRegistration = (props) => {
  return <TextInput style={styles.textInput} {...props} />;
};

export default InputRegistration;
