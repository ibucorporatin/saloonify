import React from "react";
import CustomHeader from "./CustomHeader";
import { SafeAreaView, StyleSheet } from "react-native";

const SafeWrapper = ({ showHeader = false, children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {showHeader ? <CustomHeader /> : null}
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SafeWrapper;
