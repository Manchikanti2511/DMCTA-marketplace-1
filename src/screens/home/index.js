import React from 'react';
import {View,Text,Pressable,Button} from 'react-native';
import styles from './styles';

const HomeScreen=(props)=>{
    return(
        <View style={styles.View}>
            
            
             <Button
             
              title='Notif'   
            ></Button>
            <Text style={styles.title}>Where would you like to go?</Text>
            {/* Search Bar*/}
            <Text>Categories</Text>
            {/* Tours button*/}
            <Text>Recommendations</Text>
            <Text>Explore</Text>



            
        </View>
    );
};
export default HomeScreen;