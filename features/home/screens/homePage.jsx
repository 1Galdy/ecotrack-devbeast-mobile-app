// features/home/screens/homePage.jsx
import { ScrollView, StyleSheet, Text } from "react-native";

import CardSignalements from "../../../shared/components/cardSignalements";
import SearchBar from "../../../shared/components/SearcBar";
import UserDataSignalements from "../../../shared/components/userDataSignalements";

export default function HomePage() {

  const headers = ["ID", "Sujet", "Statut", "Date"];

  const data = [
    { id: "#S001", signalement: "Déchets non collectés", statut: "En cours", date: "15 Jan 2025" },
    { id: "#S002", signalement: "Graffiti sur mur", statut: "Résolu", date: "12 Jan 2025" },
    { id: "#S003", signalement: "Nid de poule", statut: "En attente", date: "10 Jan 2025" },
  ];

  return (
    // ✅ Pas de SafeAreaView ici — le parent s'en occupe déjà
    // ✅ style={{ flex: 1 }} sur ScrollView pour qu'il prenne tout l'espace
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.h1}>Gestion de mes signalements</Text>

      <CardSignalements />

      <Text style={styles.p}>Filtres</Text>

      <SearchBar />

      <UserDataSignalements headers={headers} data={data}  />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,                    // ✅ le ScrollView lui-même prend tout l'espace
    // backgroundColor: "brown",   // couleur sur le scroll, pas juste le contenu
  },
  container: {
    flexGrow: 1,                // ✅ le contenu peut grandir autant que nécessaire
    gap: 15,
    paddingBottom: 100,
    // ❌ backgroundColor retiré d'ici — maintenant sur styles.scroll
  },
  h1: {
    fontSize: 20,
    width: 220,
    paddingBottom: 15
  },
  p: {
    fontSize: 20,
  },
});