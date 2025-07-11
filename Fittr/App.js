import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log("App executed");

  return (
    <SafeAreaView style={styles.testing}>

      <Text style={styles.mainText}>Please log in or sign up</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
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
  }
});
