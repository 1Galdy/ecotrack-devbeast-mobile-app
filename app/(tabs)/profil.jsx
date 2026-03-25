import { useRouter } from 'expo-router';
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../../features/profile/screens/profile";
import Button from '../../shared/components/button';
import { globalStyles } from '../../theme/globalStyles';

export default function Profil() {

  const router = useRouter();
      
  const goToSettingsPage = () => {
    router.push("./profil/settings");
  }

  const lougOutPage = () => {
    router.push("../account/login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={globalStyles.contentPage}>
        <Button 
          title="Paramètres" 
          onPress={goToSettingsPage} 
          style={styles.buttonSettings} 
        />
        <Button 
          title="Déconnexion" 
          onPress={lougOutPage} 
          style={[styles.buttonSettings, {backgroundColor: "red", marginTop: 20}]} 
        />
        <Profile />
      </View>
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
    width: "80%"
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});