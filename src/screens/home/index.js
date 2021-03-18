import React from 'react';
import {View,Text,Pressable,Button,StyleSheet, SafeAreaView,ScrollView,Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Recommendations from './recommendations'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';






const HomeScreen=({navigation})=>{
    return(
        <SafeAreaView style={styles.SafeAreaView}>
            <ScrollView>
            
            {/* Notifications button */}
             <Pressable
             style={styles.notif}
             onPress={()=>navigation.navigate('Notifications')}
             
               
            ><Icon name="notifications" size={30} color="#FFF" /></Pressable>
            <Text style={styles.title}>Where would you like to go?</Text>
            {/* Search Bar*/}
            <Pressable
             style={styles.search}  
            >   
            <Icon name="search" size={27} color="#7BE6BB" />
            
            
           
            </Pressable>
            
            <Text style={styles.subtitles}>Categories</Text>

            {/* Tours button*/}
            <View style={styles.categoriesstyle}>
            <Pressable
             style={styles.toursbttn}  
            >   
            <Icons name="weather-sunset" size={50} color="#000" />
            <Text>Tours</Text>
            </Pressable>
            <Pressable
             style={styles.othersbttn}  
            >   
            <Icon name="ios-paper-plane" size={50} color="#000" /> 
            <Text>Other</Text>        
            </Pressable>
            </View>
            
            

            <Text style={styles.subtitles}>Recommendations</Text>
           
           <ScrollView horizontal={true}>
           <View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
               <Recommendations imageUri={require('C:/Users/SANIKA/dmctanew/assets/images/poster1.jpg')}/>
              
               </View>
               <View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
               
               <Recommendations imageUri={require('C:/Users/SANIKA/dmctanew/assets/images/poster2.jpg')}/>
               </View><View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
               
               <Recommendations imageUri={require('C:/Users/SANIKA/dmctanew/assets/images/poster4.jpg')}/>
               </View><View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
               
               <Recommendations imageUri={require('C:/Users/SANIKA/dmctanew/assets/images/poster5.jpg')}/>
               </View><View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
               
               <Recommendations imageUri={require('C:/Users/SANIKA/dmctanew/assets/images/poster6.jpg')}/>
               </View>


                   
               
           </ScrollView>
            


            <Text style={styles.subtitles}>Explore</Text>
            <ScrollView horizontal={true}>
           <View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
           
               
               <Recommendations imageUri={require('C:/Users/SANIKA/dmctanew/assets/images/explore1.jpg')}/>
              
               </View>
               <View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
               
               <Recommendations imageUri={require('C:/Users/SANIKA/dmctanew/assets/images/explore2.jpg')}/>
               </View><View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
               
               <Recommendations imageUri={require('C:/Users/SANIKA/dmctanew/assets/images/explore3.jpg')}/>
               </View><View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
               
               <Recommendations imageUri={require('C:/Users/SANIKA/dmctanew/assets/images/explore4.jpg')}/>
               </View>


                   
               
           </ScrollView>


           </ScrollView>
            
        </SafeAreaView>
    );
};
export default HomeScreen;