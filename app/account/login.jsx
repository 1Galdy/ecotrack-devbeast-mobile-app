import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../shared/components/button";
import MyImage from "../../shared/components/Image";
import Input from "../../shared/components/input";

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const connexion = () => {
    console.log(form);

    // Exemple de redirection après connexion
    router.push("/home"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <MyImage
          source={require("../../assets/images/Logo-Ecotrack2.png")}
          style={styles.image}
        />

        <View style={styles.formulaire}>

          <Input
            placeholder="Nom"
            type="text"
            value={form.name}
            onChangeText={(text) => handleChange("name", text)}
          />

          <Input
            placeholder="Mot de passe"
            type="password"
            value={form.password}
            onChangeText={(text) => handleChange("password", text)}
          />

          <Button
            title="Se connecter"
            onPress={connexion}
            style={styles.button}
          />

          <View style={styles.moreOption}>
            <Text 
              style={styles.texteLink} 
              onPress={() => router.push("./password")}
            >
              Mot de passe oublié ?
            </Text>
            <Text 
              style={styles.texteLink} 
              onPress={() => router.push("./signIn")}
            >
              Créer un compte
            </Text>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  formulaire: {
    width: "100%",
    marginTop: 20,
    gap: 10
  },
  image: {
    width: 250,
    height: 150,
  },
  button: {
    marginTop: 10,
  },
  moreOption: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 30,
    marginTop: 10
  },
  texteLink: {
    fontSize: 10,
    color: "gray"
  }
});