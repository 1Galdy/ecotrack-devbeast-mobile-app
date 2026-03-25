// app/(tabs)/home/resultat.jsx (ou ton chemin actuel)
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../theme/globalStyles";

import HomePage from "../../features/home/screens/homePage";

export default function Resultat() {
  return (
    // ✅ Un seul SafeAreaView, flex: 1 pour prendre tout l'écran
    <SafeAreaView style={styles.container}>
      <View style={[globalStyles.contentPage, styles.content]}>
        <HomePage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // ✅ prend tout l'écran disponible
    // backgroundColor: "pink",  // déplace ta couleur ici si tu en as besoin
  },
  content: {
    flex: 1,                  // ✅ prend tout l'espace du SafeAreaView
    // ❌ plus de height: "110%" — c'était ça qui cassait tout
  },
});