import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';




export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome Back!</Text>

      <View style={styles.activityBox}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    color: '#f87060',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'flex-start',
    margin: 20,
  },
    container: {
        flex: 1,
        backgroundColor: '#102542',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20 0',
    },
    activityBox: {},
});

