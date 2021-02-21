import React from 'react';
import {View,Text,Pressable,Button,StyleSheet} from 'react-native';
import styles from './styles';





const HomeScreen=(props)=>{
    return(
        <View >
            
            {/* Notifications button */}
             <Pressable
             style={styles.notif}
             
               
            ><Text>Notif</Text></Pressable>
            <Text style={styles.title}>Where would you like to go?</Text>
            {/* Search Bar*/}
            <Pressable
             style={styles.search}  
            >   
            <Text style={styles.searchtext}>Search</Text>
            
           
            </Pressable>
            
            <Text style={styles.subtitles}>Categories</Text>

            {/* Tours button*/}
            <View style={styles.categoriesstyle}>
            <Pressable
             style={styles.toursbttn}  
            >   
            <Text style={styles.catext}>Tours</Text>
            </Pressable>
            <Pressable
             style={styles.othersbttn}  
            >   
            <Text style={styles.searchtext}>Others</Text>          
            </Pressable>
            </View>
            
            

            <Text style={styles.subtitles}>Recommendations</Text>
            {/*<ScrollView horizontal={true}>
         <Image source={require('./assets/images/poster1.jpg')}/>
         <Image source={require('./assets/images/poster2.jpg')}/>
         
         <Image source={require('./assets/images/poster4.jpg')}/>
         <Image source={require('./assets/images/poster5.jpg')}/>
         <Image source={require('./assets/images/poster6.jpg')}/>
         

    </ScrollView>*/}
            


            <Text style={styles.subtitles}>Explore</Text>



            
        </View>
    );
};
export default HomeScreen;