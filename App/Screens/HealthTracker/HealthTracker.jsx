// HealthTracker.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HealthTracker = () => {
  const [pulse, setPulse] = useState('');
  const [systolicBloodPressure, setSystolicBloodPressure] = useState('');
  const [diastolicBloodPressure, setDiastolicBloodPressure] = useState('');
  const [healthStatus, setHealthStatus] = useState('');

  const checkHealthStatus = () => {
    const pulseValue = parseInt(pulse);
    const systolicBPValue = parseInt(systolicBloodPressure);
    const diastolicBPValue = parseInt(diastolicBloodPressure);

    if (pulseValue >= 65 && pulseValue <= 100 && systolicBPValue >= 90 && systolicBPValue <= 120 && diastolicBPValue >= 60 && diastolicBPValue <= 80) {
      setHealthStatus('Normal');
    } else if (systolicBPValue < 90 || diastolicBPValue < 60) {
      setHealthStatus('Low Blood Pressure');
    } else {
      setHealthStatus('High Blood Pressure');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Tracker</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Pulse Rate"
        keyboardType="numeric"
        value={pulse}
        onChangeText={(text) => setPulse(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Systolic Blood Pressure"
        keyboardType="numeric"
        value={systolicBloodPressure}
        onChangeText={(text) => setSystolicBloodPressure(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Diastolic Blood Pressure"
        keyboardType="numeric"
        value={diastolicBloodPressure}
        onChangeText={(text) => setDiastolicBloodPressure(text)}
      />

      <Button title="Check Health Status" onPress={checkHealthStatus} />

      {healthStatus !== '' && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Health Status:</Text>
          <Text style={styles.resultText}>{healthStatus}</Text>
        </View>
      )}
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
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
  },
});

export default HealthTracker;
