// components/Input.jsx
import { StyleSheet, TextInput } from "react-native";

export default function Input({
  value,
  onChangeText,
  placeholder,
  type = "text",
  style,
  ...props
}) {
  const getKeyboardType = () => {
    switch (type) {
      case "email":
        return "email-address";
      case "number":
        return "numeric";
      case "phone":
        return "phone-pad";
      default:
        return "default";
    }
  };

  const isPassword = type === "password";

  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={getKeyboardType()}
      secureTextEntry={isPassword}
      placeholderTextColor="#000"
      autoCapitalize={type === "email" ? "none" : "sentences"}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#747474",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
});