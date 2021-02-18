import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/home';

export default function App() {
  return (
    <HomeScreen>

    </HomeScreen>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
