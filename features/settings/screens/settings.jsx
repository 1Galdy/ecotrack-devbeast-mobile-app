import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsPage() {
  return (
    <SafeAreaView>
        <View>
            <Text style={styles.text}>Welcome to my Settings page</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonSubmit: {
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