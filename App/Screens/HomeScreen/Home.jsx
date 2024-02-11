import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const healthMotivationThoughts = [
    'Stay hydrated. Drink water to boost your energy levels.',
    'Take breaks. Short breaks can improve focus and productivity.',
    'Get enough sleep. Quality sleep is essential for overall health.',
    // Add more thoughts as needed
  ];

  const [currentThoughtIndex, setCurrentThoughtIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentThoughtIndex((prevIndex) => (prevIndex + 1) % healthMotivationThoughts.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [healthMotivationThoughts.length]);

  return (
    <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg?size=626&ext=jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.thoughtContainer}>
        <Text style={styles.thoughtText}>{healthMotivationThoughts[currentThoughtIndex]}</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#f9ffb5' }]}
          onPress={() => navigateToScreen('DailyTasks')}
        >
          <Text style={styles.cardText}>Daily Tasks</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#b3f5bc' }]}
          onPress={() => navigateToScreen('HealthTracker')}
        >
          <Text style={styles.cardText}>Health Tracker</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#d6f6ff' }]}
          onPress={() => navigateToScreen('Medicines')}
        >
          <Text style={styles.cardText}>Medicines</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#e2cbf7' }]}
          onPress={() => navigateToScreen('Emergency')}
        >
          <Text style={styles.cardText}>Emergency</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  thoughtContainer: {
    backgroundColor: '#C4A484',
    padding: 20,
    margin:10,
    height:200,
    width:350,
    borderRadius:10,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  thoughtText: {
    fontSize: 26,
    color: 'green',
    textAlign: 'center',
  },
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
  card: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderColor: 'grey',
    borderWidth: 2,
  },
  cardText: {
    fontSize: 18,
  },
});

export default Home;
