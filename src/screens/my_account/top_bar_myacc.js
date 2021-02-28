import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class Top_bar_myacc extends React.Component {
  render() {
    return (
      <SafeAreaView>
      <SafeAreaView style={styles.container}>
        <Icon name="arrow-back" size={20} color="#000000"></Icon>
        
        <Text style={styles.heading_text}>My Account</Text>
      </SafeAreaView>
      
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#7BE6BB',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: StatusBar.currentHeight,
    
    
    
    
  },
  heading_text:{
    fontWeight:'bold',
    marginRight:270,
  }
});

export default Top_bar_myacc;