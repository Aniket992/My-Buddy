import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MeButton = () => {
    const navigation = useNavigation();

    const handleMe = () => {
        // Perform authentication logic here if needed
        // For simplicity, let's assume the login is successful
    
        // Navigate to Home screen
        navigation.navigate('ProfileScreen');
      };
  return (
    <TouchableOpacity onPress={handleMe} style={styles.meButton}>
    <Text style={styles.meButtonText}>Login</Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  meButton: {
    marginRight: 15,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#3498db', 
  },
  meButtonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MeButton;
