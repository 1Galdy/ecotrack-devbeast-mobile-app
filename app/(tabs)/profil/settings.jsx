import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsPage from "../../../features/settings/screens/settings";
export default function Settings() {

  return (
    <SafeAreaView style={styles.container}>
      <SettingsPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});