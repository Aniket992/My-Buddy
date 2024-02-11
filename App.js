
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/Screens/LoginScreen/Login';
import Home from './App/Screens/HomeScreen/Home';
import MedicineReminder from './App/Screens/Reminders/MedicineReminder';
import Emergency from './App/Screens/Emergency/Emergency';
import HealthTracker from './App/Screens/HealthTracker/HealthTracker';
import DailyTasks from './App/Screens/DailyTasks/DailyTasks';
import ProfileScreen from './App/Screens/ProfileScreen/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  const MeButton = () => {
    const navigation = useNavigation();
    const route = useRoute();

   
    if (route.name === 'Login') {
      return null; 
    }

    const handleMe = () => {
      navigation.navigate('ProfileScreen');
    };

    return (
      <TouchableOpacity onPress={handleMe} style={styles.meButton}>
        <Text style={styles.meButtonText}>ME</Text>
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer  >
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerRight: () => <MeButton />,
          headerStyle: {
            backgroundColor: '#FFC0CB', // Set your desired background color for the header
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Medicines" component={MedicineReminder} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="HealthTracker" component={HealthTracker} />
        <Stack.Screen name="DailyTasks" component={DailyTasks} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
