// MedicineReminder.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const MedicineReminder = () => {
  const [medicines, setMedicines] = useState([]);
  const [medicineName, setMedicineName] = useState('');
  const [timeOfDose, setTimeOfDose] = useState('');

  const handleAddMedicine = () => {
    if (medicineName.trim() === '' || timeOfDose.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    const newMedicine = {
      medicineName,
      timeOfDose,
    };

    setMedicines((prevMedicines) => [...prevMedicines, newMedicine]);

    // Clear input fields
    setMedicineName('');
    setTimeOfDose('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicine Reminder</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Medicine Name"
          value={medicineName}
          onChangeText={(text) => setMedicineName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Time of Dose (e.g., 08:00 AM)"
          value={timeOfDose}
          onChangeText={(text) => setTimeOfDose(text)}
        />
        <Button title="Add Medicine" onPress={handleAddMedicine} />
      </View>

      <Text style={styles.subtitle}>Medicine List</Text>
      <FlatList
        data={medicines}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.medicineItem}>
            <Text>{`Medicine: ${item.medicineName}`}</Text>
            <Text>{`Time of Dose: ${item.timeOfDose}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  medicineItem: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
});

export default MedicineReminder;
