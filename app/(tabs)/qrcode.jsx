import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Qrcode() {
  const [showScanner, setShowScanner] = useState(false);

  if (showScanner) {
    return <ScanneQr onClose={() => setShowScanner(false)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.divAlert}>
          <Feather name="alert-circle" size={50} color="green" />
        </View>

        <View style={styles.texte}>
          <Text style={styles.title}>Nouveau Signalement</Text>
          <Text style={styles.info}>
            Décrivez le problème que vous souhaitez signaler
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.divCode,
            { opacity: pressed ? 0.5 : 1 }
          ]}
          onPress={() => setShowScanner(true)}
        >
          <MaterialCommunityIcons name="qrcode-scan" size={50} color="black" />
          <Text style={styles.qrText}>
            Signaler grâce au QR Code
          </Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

function ScanneQr({ onClose }) {
  const router = useRouter();
  const [scanned, setScanned] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View style={{ flex: 1, backgroundColor: "#000" }} />;
  }

  // 📌 ÉCRAN PERMISSION PERSONNALISÉ
  if (!permission.granted) {
    return (
      <View style={permissionStyles.container}>
        <View style={permissionStyles.card}>
          <Text style={permissionStyles.title}>Autoriser la caméra</Text>

          <Text style={permissionStyles.description}>
            Nous avons besoin d'accéder à votre caméra pour scanner le QR Code.
          </Text>

          <Pressable
            style={({ pressed }) => [
              permissionStyles.primaryButton,
              { opacity: pressed ? 0.7 : 1 }
            ]}
            onPress={requestPermission}
          >
            <Text style={permissionStyles.primaryText}>Autoriser</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              permissionStyles.secondaryButton,
              { opacity: pressed ? 0.5 : 1 }
            ]}
            onPress={onClose}
          >
            <Text style={permissionStyles.secondaryText}>Retour</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    
    router.push({
    pathname: "/signaler/formulaire",
    params: { qrData: data },
  });
  };

  return (
    <>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      />

      {/* Bouton fermer stylé */}
      <Pressable
        onPress={onClose}
        style={({ pressed }) => [
          closeStyles.button,
          { transform: [{ scale: pressed ? 0.95 : 1 }] }
        ]}
      >
        <Text style={closeStyles.text}>✕</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 200
  },
  texte: {
    alignItems: "center"
  },
  divAlert: {
    backgroundColor: "#74EC8D",
    padding: 25,
    borderRadius: 60
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  },
  info: {
    fontSize: 10
  },
  button: {
    backgroundColor: "#74EC8D"
  },
  divCode: {
    backgroundColor: "#74EC8D",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 54,
    flexDirection: "row",
    alignItems: "center", 
    gap: 15,
    marginTop: 100
  },
  qrText: {
    fontSize: 14,
    fontWeight: "600"
  }
});

const permissionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 20,
    padding: 30,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
  },
  primaryButton: {
    backgroundColor: "#74EC8D",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  primaryText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryButton: {
    alignItems: "center",
    paddingVertical: 10,
  },
  secondaryText: {
    color: "#888",
    fontSize: 14,
  },
});

const closeStyles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 60,
    right: 25,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});