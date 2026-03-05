import { useRouter } from 'expo-router';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const router = useRouter();

  const changePage = () => {
    router.push("/account/login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.greenCard}></View>
      {/* Image flottante au-dessus du demi-cercle */}
      <Image
        source={require("../assets/images/Logo-Home-Ecotrack.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.informations}>
        <Text style={styles.title}>Félicitations !</Text>
        <Text style={styles.paragraphe}>
          Participez au processus et favorisez la collecte ponctuelle des déchets, le tout pour une zone propre. Chaque geste compte pour protéger notre environnement et laisser un espace sain pour les générations futures.
        </Text>
        <Text style={styles.slogan}>Merci d'avoir contribuer à la sauvegarde de notre planète !</Text>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.5 : 1 }
          ]}
          onPress={changePage}
        >
          <Text style={styles.buttonText}>
            Continuer !
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

  const { width, height } = Dimensions.get("window");
  const GREEN_CIRCLE_HEIGHT = 200; // hauteur du demi-cercle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  greenCard: {
    backgroundColor: "#24D26D",
    width: width * 1.3,        // 200% de la largeur de l'écran
    height: 200,             // rayon du cercle
    borderBottomLeftRadius: 600,
    borderBottomRightRadius: 600,
    position: "absolute",
    top: 0,
    padding: 130,
    left: -width / 6.8,        // pour centrer le cercle
    marginTop: -40
  },
  logo: {
    position: "absolute",
    width: width * 0.95,                   // presque toute la largeur de l'écran
    height: width * 0.6,                   // proportionnel à la largeur
    top: GREEN_CIRCLE_HEIGHT - (width * 0.37), // juste au-dessus du demi-cercle
    left: width * 0.040,                   // centré horizontalement
    zIndex: 10,
  },
  informations: {
    marginTop: 300,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    gap: 10
  },
  title: {
    color: "#606060",
    fontSize: 20
  },
  paragraphe: {
    color: "gray",
    fontSize: 10,
    marginTop: 30,
    // backgroundColor: "red",
    width: "96%",
    textAlign: "center",
    fontWeight: "bold"
  },
  slogan: {
    color: "#9FCDA8",
    fontSize: 10,
    marginTop: 70
  },
  button: {
    backgroundColor: "#24D26D",
    borderRadius: 50,
    padding: 20,
    width: 200,
    alignItems: "center",
    marginTop: 20
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  }
});