import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../thems/colors";

const TimeSlot = ({ item, onPress }) => {
  const { timeSlot, date, available } = item;

  return (
    <TouchableOpacity
      disabled={!available}
      activeOpacity={0.3}
      style={[
        styles.container,
        { borderColor: available ? colors.black : colors.gray },
      ]}
      onPress={() => onPress?.(item)}
    >
      <Text
        style={[
          styles.dataAndTimeText,
          { color: available ? colors.black : colors.gray },
        ]}
      >{`${timeSlot}      ${date}`}</Text>

      <Text
        style={[
          styles.statusText,
          { color: available ? colors.black : colors.gray },
        ]}
      >{`(${available ? "Available" : "Booked"})`}</Text>
    </TouchableOpacity>
  );
};

export default TimeSlot;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  dataAndTimeText: {
    fontSize: 15,
    fontWeight: "400",
  },
  statusText: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
