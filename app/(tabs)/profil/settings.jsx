import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsPage from "../../../features/settings/screens/settings";
import { globalStyles } from "../../../theme/globalStyles";

export default function Settings() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.contentPage}>
        <SettingsPage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});