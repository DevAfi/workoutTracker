import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ForgotPassScreen from './src/screens/ForgotPassScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  testing: {
    flex: 1,
    backgroundColor: '#102542',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  mainText:{
    fontSize: 50,
    color: '#f87060',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'flex-start',
  },

  ButtonContainer: {

    height: '100%',
    width: '100%',
    backgroundColor: '#102542',
  }
});
