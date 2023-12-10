import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as firebase from 'firebase/app';

// Replace these values with your actual Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCjCn3OPkNfd3sNW7dj5MVA4kU39Dbp1aI',
  authDomain: 'chingchan-2c59b.firebaseapp.com',
  projectId: 'chingchan-2c59b',
  storageBucket: 'chingchan-2c59b.appspot.com',
  messagingSenderId: '391834755057',
  appId: '1:391834755057:web:f280d966f8327370f62e50',
  measurementId: 'G-QECL5WKY8H',
};
// Initialize Firebase with the configuration
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      // If login is successful, navigate to the MainTab screen
      navigation.navigate('MainTab');
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login error (e.g., display an error message to the user)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
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
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});

export default LoginScreen;
