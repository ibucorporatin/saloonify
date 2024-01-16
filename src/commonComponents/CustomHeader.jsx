import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import React from "react";
import { colors } from "../thems/colors";

const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Saloonify</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: colors.black,
    justifyContent: "center",
    paddingHorizontal:18,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    color: colors.white,
    fontSize:20
  },
});

export default CustomHeader;
