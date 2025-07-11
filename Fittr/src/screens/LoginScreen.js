import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import api from '../api/api'; 

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
  try {
    const response = await api.post('/auth/login', { email, password });
    console.log(response.data);  // log backend response
    if (response.data.message === 'Login successful') {
      setError('');
      navigation.navigate('Home');
    } else {
      setError('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    setError('Something went wrong');
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in below</Text>
      <TextInput
        placeholder="test@example.com"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} style={styles.button} />
      <Button title="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    flexDirection: 'column',
    backgroundColor: '#102542',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
    color: '#f87060',
    fontWeight: 'bold',
    alignItems: 'flex-start',
    marginBottom: 42,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,

    color: '#f87060',
    fontSize: 18,

  },
  error: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center'
  },
    button: {
        backgroundColor: '#f87060',
        color: '#f87060',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
});
