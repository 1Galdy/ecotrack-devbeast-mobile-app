import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function DateInput({
  value,
  onChange,
  placeholder = "Choisir une date",
}) {
  const [show, setShow] = React.useState(false);

  const handleChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      onChange && onChange(selectedDate);
    }
  };

  const formatDate = (date) => {
    if (!date) return placeholder;
    return date.toLocaleDateString();
  };

  return (
    <View>
      {/* Input */}
      <Pressable style={styles.input} onPress={() => setShow(true)}>
        <Text>{formatDate(value)}</Text>
      </Pressable>

      {/* Picker */}
      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    width: 180,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },
});