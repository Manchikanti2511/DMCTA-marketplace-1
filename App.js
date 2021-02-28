import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import HomeScreen from './src/screens/home';
import Inputs from './src/screens/fill_more_info'
import My_account from './src/screens/my_account/index.js'
import Top_bar_myacc from './src/screens/my_account/top_bar_myacc.js'
import fill_more_info from './src/screens/fill_more_info';
import Signed_in from './src/screens/my_account/signed_in'



export default function App() {
  return (
    <SafeAreaView>
      
      <My_account></My_account>
      
    </SafeAreaView>
    
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
