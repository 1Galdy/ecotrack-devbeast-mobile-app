import { useRouter } from 'expo-router';
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../features/profile/screens/profile";
import Button from '../../shared/components/button';

export default function Profil() {

      const router = useRouter();
      
        const goToSettingsPage = () => {
          router.push("./profil/settings");
        }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button 
          title="Paramètres" 
          onPress={goToSettingsPage} 
          style={styles.buttonSettings} 
        />
      </View>
      <Profile />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonSettings: {
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