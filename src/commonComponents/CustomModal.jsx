import React from "react";
import { View, Modal, TouchableOpacity, StyleSheet, Text } from "react-native";
import { colors } from "../thems/colors";

const CustomModal = ({ visible, onClose, children, title = "" }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.close}>close</Text>
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    width: "80%",
    color: colors.black,
  },
  closeButton: {
    width: "20%",
    alignItems: "flex-end",
  },
  close: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.black,
  },
});

export default CustomModal;
