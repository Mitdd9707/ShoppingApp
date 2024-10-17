import React from "react";
import { Text, TextInput as RNTextinput, TextInputProps } from "react-native";
import { styles } from "./TextInput.styles";

export interface CustomTextInputProps extends TextInputProps {
  label?: string;
}

const TextInput: React.FC<CustomTextInputProps> = ({ label, ...props }) => {
  return (
    <>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <RNTextinput
        placeholderTextColor={"#000000"}
        returnKeyLabel="done"
        returnKeyType="next"
        autoCapitalize="none"
        {...props}
      />
    </>
  );
};
export default TextInput;
