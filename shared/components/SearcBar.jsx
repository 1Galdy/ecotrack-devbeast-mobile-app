// components/Button.jsx
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../theme/globalStyles";

//Import picker input avec liste déroulante
import PickerInput from "./picker";

//Import d'autres components
import DateInput from "./DateInput";

export default function SearchBar() {

  const [category, setCategory] = useState("");

  const [date, setDate] = useState(null);

  const categories = [
    { label: "Sport", value: "sport" },
    { label: "Musique", value: "music" },
    { label: "Tech", value: "tech" },
  ];

  return (
    <View style={globalStyles.contentPage}>
        <View style={styles.row}>
            <View>
                <Text>Date : {date ? date.toLocaleDateString() : "Aucune"}</Text>
                <DateInput
                    value={date}
                    onChange={setDate}
                    placeholder="Choisir une date"
                />
                {/* <Text>
                    Date sélectionnée :{" "}
                    {date ? date.toLocaleDateString() : "Aucune"}
                </Text> */}
            </View>
            <View>
                <Text>Statut : {category}</Text>
                <PickerInput
                    value={category}
                    onChange={setCategory}
                    items={categories}
                    placeholder="Par statut"
                />
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    row: {
        backgroundColor: "white",
        width: "95%",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,

        // iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        // Android
        elevation: 5,
    },
});