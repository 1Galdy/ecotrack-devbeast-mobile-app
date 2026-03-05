import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {

  return (
    <SafeAreaView>
        <View>
            <Text style={styles.text}>Welcome to my profile page</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
text: {
    color: "black",
    fontWeight: "bold",
  },
});