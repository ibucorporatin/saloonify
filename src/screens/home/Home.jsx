import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ToastAndroid,
  Platform,
} from "react-native";
import SafeWrapper from "../../commonComponents/SafeWrapper";
import TimeSlot from "./components/TimeSlot";
import BookimFormModal from "./components/BookimFormModal";

const Home = () => {
  const [timeSlots, setTimeSlots] = useState([
    { id: 1, timeSlot: "9:30 - 10:00", date: "2024-01-15", available: true },
    { id: 2, timeSlot: "10:00 - 10:30", date: "2024-01-15", available: true },
    { id: 3, timeSlot: "10:30 - 11:00", date: "2024-01-15", available: true },
    { id: 4, timeSlot: "11:00 - 11:30", date: "2024-01-15", available: true },
    { id: 5, timeSlot: "11:30 - 12:00", date: "2024-01-15", available: true },
    { id: 6, timeSlot: "12:00 - 12:30", date: "2024-01-15", available: true },
    { id: 7, timeSlot: "12:30 - 1:30", date: "2024-01-15", available: true },
    { id: 10, timeSlot: "2:30 - 3:00", date: "2024-01-15", available: true },
    { id: 11, timeSlot: "3:00 - 3:30", date: "2024-01-15", available: true },
  ]);

  const [showBookingForm, setShowBookingForm] = useState(false);

  const [currentStlot, setCurrentStlot] = useState({});

  // Function to handle time slot press
  const onTimeSlotPress = (item) => {
    setCurrentStlot(item);
    setShowBookingForm(true);
  };

  // Function to handle appointment submission
  const onAppointmentSubmit = (id) => {
    setTimeSlots((prevSlots) =>
      prevSlots.map((slot) =>
        slot.id === id ? { ...slot, available: false } : slot
      )
    );
    if (Platform.OS === "android") {
      ToastAndroid.show("Booking successful!", ToastAndroid.SHORT);
    }
    setShowBookingForm(false);
  };

  return (
    <SafeWrapper showHeader={true}>
      {/* Title */}
      <Text style={styles.titleText}>Schedule Your Appointment</Text>
      {/* Slot list */}
      <View style={styles.container}>
        <FlatList
          data={timeSlots}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TimeSlot item={item} onPress={onTimeSlotPress} />
          )}
        />
      </View>
      <BookimFormModal
        visible={showBookingForm}
        onClose={() => {
          setShowBookingForm(false);
        }}
        currentStlot={currentStlot}
        onAppointmentSubmit={onAppointmentSubmit}
      />
    </SafeWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  titleText: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default Home;
