import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, ImageBackground,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
       
    source={{ uri: 'https://img.freepik.com/free-vector/blur-pink-blue-abstract-gradient-background-vector_53876-174836.jpg?size=626&ext=jpg' }} // Add your background image URI here


      style={styles.backgroundImage}
    >
      
        
      
      <View style={styles.container}>
        <Text style={styles.boldText}>MY BUDDY</Text>

        <Text style={styles.text}>Enter Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />

        <Text style={styles.text}>Enter Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  boldText: {
    fontStyle: 'italic',
    marginBottom: 50,
    fontWeight: 'bold',
    fontSize: 24,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    alignSelf: 'flex-start', 
    marginBottom: 5,
    marginLeft: 40,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Login;
