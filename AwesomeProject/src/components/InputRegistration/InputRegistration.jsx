import React, { useState } from "react";
import { TextInput } from "react-native";
import { styles } from "./StyledInputRegistration";

const InputRegistration = (props) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  return (
    <TextInput
      style={[styles.input, isInputFocused && styles.focusedInput]}
      onFocus={() => setIsInputFocused(true)}
      onBlur={() => setIsInputFocused(false)}
      {...props}
    />
  );
};

export default InputRegistration;
