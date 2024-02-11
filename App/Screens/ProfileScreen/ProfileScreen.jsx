import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const profileData = {
    name: 'John Doe',
    profilePic: { uri: 'https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg?size=626&ext=jpg' },
    medicinesOrders: ['Medicine A', 'Medicine B', 'Medicine C'],
    appointments: ['Appointment 1', 'Appointment 2'],
  };

  const handleSignOut = () => {
   
    navigation.navigate('Login');

    console.log('Signing out...');
  };

  return (
    <View style={styles.container}>
      <Image source={profileData.profilePic} style={styles.profilePic} />
      <Text style={styles.name}>{profileData.name}</Text>

      <Text style={styles.sectionTitle}>Medicines Orders:</Text>
      {profileData.medicinesOrders.map((medicine, index) => (
        <Text key={index} style={styles.infoText}>
          {medicine}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Appointments:</Text>
      {profileData.appointments.map((appointment, index) => (
        <Text key={index} style={styles.infoText}>
          {appointment}
        </Text>
      ))}

      <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  signOutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  signOutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
