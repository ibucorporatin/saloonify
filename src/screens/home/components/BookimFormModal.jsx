import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import CustomModal from "../../../commonComponents/CustomModal";
import { colors } from "../../../thems/colors";

const BookimFormModal = ({
  visible = false,
  onClose,
  currentStlot = {},
  onAppointmentSubmit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Extracting values from the current slot
  const { id = "", timeSlot = "", date = "" } = currentStlot;

  // Function to reset state
  const resetState = () => {
    setFormData({
      name: "",
      email: "",
    });
    setErrors({
      name: "",
      email: "",
    });
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const { name, email } = formData;
    const newErrors = {};

    // name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    } else {
      newErrors.name = "";
    }

    // email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    } else {
      newErrors.email = "";
    }

    // If there are errors, set them and prevent form submission
    if (newErrors.name || newErrors.email) {
      setErrors(newErrors);
      return;
    }

    resetState();
    // to update slot availability
    onAppointmentSubmit?.(id);
  };

  return (
    <CustomModal
      visible={visible}
      onClose={() => {
        resetState();
        onClose();
      }}
      title="Book Appointment"
    >
      <View style={styles.container}>
        {/* slot details */}
        <Text style={styles.slotDetailText}>
          Slot Details :<Text>{` (${timeSlot})  ${date}`}</Text>
        </Text>

        {/* name */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Name :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
        </View>
        {/*name error  */}
        {errors.name ? (
          <Text style={styles.errorText}>{errors.name}</Text>
        ) : null}

        {/* email */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
        </View>
        {/*email error  */}
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

        {/* submit button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Appointment</Text>
        </TouchableOpacity>
      </View>
    </CustomModal>
  );
};
const styles = StyleSheet.create({
  slotDetailText: {
    fontSize: 13,
    color: colors.gray,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  inputText: {
    fontSize: 15,
    fontWeight: "500",
    width: "20%",
  },
  input: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: "60%",
  },
  submitButton: {
    backgroundColor: colors.black,
    padding: 12,
    borderRadius: 15,
    width: "60%",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  submitText: {
    color: colors.white,
  },
  errorText: {
    fontSize: 12,
    alignSelf: "center",
    color: colors.red,
  },
});
export default BookimFormModal;
