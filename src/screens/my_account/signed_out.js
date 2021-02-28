import React from 'react';
import {View, SafeAreaView, StyleSheet,Text,Button,Alert} from 'react-native';
import { Avatar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';


const Signed_out = () => {

  

  return (
      <View>
          <View style={styles_signedout.Avatar}>
          <Avatar
            
            rounded
            size='xlarge'
            source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoLW7umRbe6laBqjwmGS6O0BpuiEC43WUew&usqp=CAU',
             }}
             />
             <Text style={styles_signedout.title}>Guest</Text>
       </View>
       <View style={[{alignItems:'center'}]}>
       
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedout.button}
        title="About Us"
        color="#808080"
        
        onPress={() => Alert.alert('About Us pressed')}
      />



       </View>
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedout.button}
        title="Terms and Conditions"
        color="#808080"
        
        onPress={() => Alert.alert('Terms and Conditions pressed')}
      />



       </View>
       
 

       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedout.button}
        title="Sign Up as business"
        color="#808080"
        
        onPress={() => Alert.alert('Sign Up as business pressed')}
      />



       </View>
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedout.button}
        title="Sign Up as a business"
        color="#808080"
        
        onPress={() => Alert.alert('Sign Up as business pressed')}
      />



       </View>
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedout.button}
        title="Sign Up as a customer"
        color="#808080"
        
        onPress={() => Alert.alert('Sign Up as customer pressed')}
      />



       </View>
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedout.button}
        title="Signin"
        color="#808080"
        
        onPress={() => Alert.alert('signin pressed')}
      />



       </View>
       </View>
      </View>
    
  );
};

export default Signed_out;

const styles_signedout = StyleSheet.create({
    Avatar:{
        alignItems:'center',
        padding:10,

    },
    title:{
        fontWeight:'bold',
        fontSize:20,
    },
    button:{
        height:30,
        width:'50%',
        
    }
  
 
});