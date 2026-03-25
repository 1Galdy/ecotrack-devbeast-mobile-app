// components/Button.jsx
import { StyleSheet, Text, View } from "react-native";

//Icons
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CardSignalements({ title, onPress, style }) {
  return (
        <View style={styles.containerCard}>
            <View style={styles.card}>
                <View style={[styles.bgColor, styles.bgBlue]}>
                    <Feather name="alert-circle" size={35} color="rgb(40, 101, 235)" />
                </View>
                <Text style={styles.values}>156</Text>
                <Text style={styles.Texte}>Total signalements</Text>
            </View>
            <View style={styles.card}>
                <View style={[styles.bgColor, styles.bgOrange]}>
                    <Ionicons name="time-outline" size={35} color="rgb(202, 138, 4)" />
                </View>
                <Text style={styles.values}>42</Text>
                <Text style={styles.Texte}>En attente</Text>
            </View>
            <View style={styles.card}>
                <View style={[styles.bgColor, styles.bgRed]}>
                    <Feather name="loader" size={35} color="rgb(238, 114, 48)" />
                </View>
                <Text style={styles.values}>47</Text>
                <Text style={styles.Texte}>En cours</Text>
            </View>
            <View style={styles.card}>
                <View style={[styles.bgColor, styles.bgGreen]}>
                    <Feather name="check-circle" size={35} color="rgb(22, 163, 74)" />
                </View>
                <Text style={styles.values}>67</Text>
                <Text style={styles.Texte}>Résolus</Text>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    // backgroundColor: "blue",
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 2,
    paddingBottom: 2
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    flexDirection: "column",
    gap: 10,
    borderRadius: 10,
    width: "47%",
    boxShadow: "1px 1px 1px black solid",

    // iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    // Android
    elevation: 5,
  },
  bgColor: {
    backgroundColor: "red",
    width: "35%",
    padding: 10,
    borderRadius: 8
  },
  bgBlue: {
    backgroundColor: "rgb(219, 234, 254)",
  },
  bgOrange: {
    backgroundColor: "rgb(254, 249, 195)"
  },
  bgRed: {
    backgroundColor: "rgb(255, 237, 213)"
  },
  bgGreen: {
    backgroundColor: "rgb(220, 252, 231)"
  },
  values: {
    fontWeight: "bold",
    fontSize: 20
  },
  Texte: {
    color: "rgb(92, 104, 114)",
    // backgroundColor: "red",
    width: 185
  }
});