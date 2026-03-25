import { useRouter } from 'expo-router';
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from '../../shared/components/button';
import Input from '../../shared/components/input';
import { globalStyles } from "../../theme/globalStyles";

export default function SignIn() {

  const router = useRouter();
  
  const [form, setForm] = useState({
    firstname: "",
    name: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: ""
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
            <Text style={globalStyles.accountTitle}>Page d'inscription</Text>
            <View style={styles.formulaire}>
            
              <Input
                placeholder="Prénom"
                value={form.firstname}
                onChangeText={(text) => handleChange("firstname", text)}
              />

              <Input
                placeholder="Nom"
                value={form.name}
                onChangeText={(text) => handleChange("name", text)}
              />

              <Input
                placeholder="Email"
                type='email'
                value={form.email}
                onChangeText={(text) => handleChange("email", text)}
              />

              <Input
                placeholder="adresse"
                type='text'
                value={form.address}
                onChangeText={(text) => handleChange("address", text)}
              />
            
              <Input
                placeholder="Mot de passe"
                type="password"
                value={form.password}
                onChangeText={(text) => handleChange("password", text)}
              />

              <Input
                placeholder="Confirmer le mot de passe"
                type="password"
                value={form.confirmPassword}
                onChangeText={(text) => handleChange("confirmPassword", text)}
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
                onPress={() => router.push("./password")}
              >
                Mot de passe oublié ?
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
    moreOption: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 130,
    marginTop: 20
  },
  texteLink: {
    fontSize: 10,
    color: "gray"
  },
  formulaire: {
    width: "100%",
    marginTop: 20,
    gap: 15,
    width: "95%",
    marginTop: 50
  },
});