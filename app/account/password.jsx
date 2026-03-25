import { useRouter } from 'expo-router';
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../../shared/components/button';
import Input from '../../shared/components/input';
import { globalStyles } from '../../theme/globalStyles';

export default function Password() {

  const router = useRouter();

  const [form, setForm] = useState({
    email: ""
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
    router.push("./login"); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} // Ajuste selon ton header
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingVertical: 20 }}
          keyboardShouldPersistTaps="handled" // permet de fermer le clavier quand on appuie ailleurs
        >
          <View style={globalStyles.contentPage}>
            {/* <Text style={globalStyles.accountTitle}>Mot de passe oublié</Text> */}
            <View style={styles.contentParagraphe}>
              <View style={styles.circle}>
                <Text style={styles.slogan}>BEAST</Text>
              </View>
              <Text style={styles.title}>Mot de passe oublié</Text>
              <Text style={styles.paragraphe}>Renseignez votre adresse email pour recevoir un lien de réinitialisation</Text>
            </View>
            <View style={styles.formulaire}>
              <Input
                placeholder="Email"
                type='email'
                value={form.email}
                onChangeText={(text) => handleChange("email", text)}
              />
              <Button
                title="Se connecter"
                onPress={connexion}
                style={styles.button}
              />
            </View>
            <View style={styles.moreOption}>
              <Text 
                style={styles.texteLink} 
                onPress={() => router.push("./signIn")}
              >
                Créer un compte
              </Text>
              <Text 
                style={styles.texteLink} 
                onPress={() => router.push("./login")}
              >
                Connectez-vous
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentParagraphe: {
    marginTop: 100,
    width: "95%",
    flexDirection: "column",
    gap: 50,
    flexDirection: "column",
    alignItems: "center"
  },
  circle: {
    backgroundColor: "#24D26D",
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  slogan: {
    fontWeight: "900",
    fontSize: 20,
    color: "white"
  },
  title: {
    fontSize: 15,
    fontWeight: "900",
    marginEnd: "auto"
  },
  paragraphe: {
    color: "#9b9b9b",
    marginTop: -40
  },
  formulaire: {
    width: "100%",
    marginTop: 20,
    gap: 30,
    width: "95%",
    marginTop: 60
  },
  moreOption: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 150,
    marginTop: 20
  },
  texteLink: {
    fontSize: 10,
    color: "gray"
  }
});