import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';



export default function SignUpPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  return (
    <View style={styles.TopContainer}>
        <Text style={styles.TopText}>Sign Up</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  TopText: {
    color: '#f87060',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'flex-start',
    margin: 20,
  },
    TopContainer: {
        flex: 1,
        backgroundColor: '#102542',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20 0',
    },
    activityBox: {},
});

