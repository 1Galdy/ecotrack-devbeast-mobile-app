import { ScrollView, StyleSheet, Text, View } from "react-native";

// Proportion flex par défaut pour les colonnes (modifiable via props)
const DEFAULT_COL_FLEX = { id: 2.5, signalement: 3.6, statut: 3, date: 2.6 };

// Composant Row pour afficher chaque ligne
function Row({ values, colFlex, isHeader }) {
  return (
    <View style={[styles.row, isHeader && styles.rowHeader]}>
      {values.map((val, i) => (
        <Text
          key={i}
          style={[
            styles.cell,
            { flex: colFlex[i] || 1, flexWrap: isHeader ? "nowrap" : "wrap" },
            isHeader && styles.cellHeader,
          ]}
          numberOfLines={isHeader ? 1 : undefined}
          ellipsizeMode="tail"
        >
          {val}
        </Text>
      ))}
    </View>
  );
}

/**
 * UserDataTable
 * @param {Array} headers - Tableau des titres de colonnes
 * @param {Array} data - Tableau d'objets représentant les lignes
 * @param {Array} colFlex - Flex pour chaque colonne (optionnel)
 * @param {Number} scrollHeight - Hauteur max de la zone scrollable (optionnel)
 */
export default function UserDataSignalements({ headers = [], data = [], colFlex = DEFAULT_COL_FLEX, scrollHeight = 220 }) {
  // Convertir colFlex objet en tableau pour Row
  const colFlexArray = headers.map((h, i) => Object.values(colFlex)[i] || 1);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>

        {/* Header */}
        <Row values={headers} colFlex={colFlexArray} isHeader />

        {/* Séparateur */}
        <View style={styles.separator} />

        {/* Données scrollables */}
        <ScrollView showsVerticalScrollIndicator={false} style={[styles.scrollArea, { maxHeight: scrollHeight }]}>
          {data.map((item, index) => (
            <Row
              key={index}
              values={Object.values(item)}
              colFlex={colFlexArray}
              isHeader={false}
            />
          ))}
        </ScrollView>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },
  container: {
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  rowHeader: {
    paddingVertical: 6,
  },
  cell: {
    fontSize: 13,
    color: "#374151",
    paddingHorizontal: 4,
  },
  cellHeader: {
    fontSize: 13,
    fontWeight: "800",
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginBottom: 4,
  },
  scrollArea: {
    width: "100%",
  },
});