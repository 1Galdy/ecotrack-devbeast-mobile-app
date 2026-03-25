import { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PickerInput({ value, onChange, items = [], placeholder = "Choisir une option" }) {
  const [visible, setVisible] = useState(false);

  const handleSelect = (val) => {
    onChange && onChange(val);
    setVisible(false);
  };

  const displayLabel = items.find((i) => i.value === value)?.label || placeholder;

  return (
    <View>
      <TouchableOpacity style={styles.input} onPress={() => setVisible(true)}>
        <Text style={[styles.text, !value && styles.placeholder]}>{displayLabel}</Text>
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.modal}>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.option} onPress={() => handleSelect(item.value)}>
                  <Text style={styles.text}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 170,
  },
  text: {
    color: "#000",
  },
  placeholder: {
    color: "#999",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    width: 200,
    borderRadius: 10,
    paddingVertical: 8,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});