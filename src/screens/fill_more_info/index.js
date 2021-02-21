import React from 'react';
import {View,Text,Pressable,Button,StyleSheet} from 'react-native';
import styles from './styles_info';
import Inputs from './inputs.js'
const fill_more_info = () => {
    return (
        <View style={styles_index_info.container}>
        <Text style={styles_index_info.title}>More Details</Text>
       <Inputs />
       </View>
    )
 }
 export default fill_more_info
 
 const styles_index_info=StyleSheet.create({
    container: {
        paddingTop: 23,
        margin:'10%',
        alignItems:'center',
        justifyContent:'center',
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius:10,
     },
     submitButton: {
        backgroundColor: '#3F7D20',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     },
     title:{
         justifyContent:'center',
         alignItems:'center',
         fontWeight:'bold',
         fontSize:20,
         padding:20,
         

     }
    });
