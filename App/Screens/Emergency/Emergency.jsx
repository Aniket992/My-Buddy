import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';

const Emergency = () => {
  const emergencyContacts = [
    { type: 'Ambulance', number: '112' },
    { type: 'Fire Department', number: '112' },
    { type: 'Police', number: '112' },
    { type: 'Non-Emergency Medical Assistance', number: '112' },
    { type: 'Hospital Emergency Room', number: '112' },
  ];

  const handleCall = (number) => {
    const phoneNumber = `tel:${number}`;
    Linking.canOpenURL(phoneNumber)
      .then((supported) => {
        if (!supported) {
          console.log(`Phone number ${phoneNumber} is not supported`);
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch((error) => console.log(`Error opening phone number: ${error}`));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>

      <FlatList
        data={emergencyContacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleCall(item.number)}
          >
            <View style={styles.contactContent}>
              <Text style={styles.contactType}>{item.type}</Text>
              <Text style={styles.contactNumber}>{item.number}</Text>
            </View>
            <Image     source={{ uri: 'data:image/png;base64,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' }} // Add your background image URI here
 
            style={styles.dialerIcon} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'wheat',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    marginTop:25,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf:'center',
  },
  contactItem: {
    backgroundColor: 'lightblue',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 50,
    alignSelf:'center',
  },
  contactContent: {
    flex: 1,
  },
  contactType: {
    fontWeight: 'bold',
  },
  contactNumber: {
    fontWeight: 'bold',
    color: 'darkgreen',
  },
  dialerIcon: {
    width: 24,
    height: 24,
  },
});

export default Emergency;
