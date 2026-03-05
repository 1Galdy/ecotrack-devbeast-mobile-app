// components/Button.jsx
import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ title, onPress, style }) {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#24D26D",
    borderRadius: 50,
    padding: 20,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});