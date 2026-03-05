// components/Image.jsx
import { Image as RNImage, StyleSheet } from "react-native";

export default function MyImage({ source, style }) {
  return (
    <RNImage
        source={source}
        style={[styles.logo, style]}
        resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200
  }
});