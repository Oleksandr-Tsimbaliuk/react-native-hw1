import React from "react";
import { TextInput } from "react-native";
import { styles } from "./StyledInputRegistration";

const InputRegistration = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

export default InputRegistration;
