import React from 'react';
import {View, SafeAreaView, StyleSheet,Text,Button,Alert} from 'react-native';
import { Avatar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';


const Signed_in = () => {

  

  return (
      <View>
          <View style={styles_signedin.Avatar}>
          <Avatar
            
            rounded
            size='xlarge'
            source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoLW7umRbe6laBqjwmGS6O0BpuiEC43WUew&usqp=CAU',
             }}
             />
             <Text style={styles_signedin.title}>John Doe</Text>
       </View>
       <View style={[{alignItems:'center'}]}>
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedin.button}
        title="Change Password"
        color="#808080"
        
        onPress={() => Alert.alert('Change Password pressed')}
      />



       </View>
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedin.button}
        title="Saved Cards"
        color="#808080"
        
        onPress={() => Alert.alert('Saved Cards pressed')}
      />



       </View>
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedin.button}
        title="Terms and Conditions"
        color="#808080"
        
        onPress={() => Alert.alert('Terms and Conditions pressed')}
      />



       </View>
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedin.button}
        title="About Us"
        color="#808080"
        
        onPress={() => Alert.alert('About Us pressed')}
      />



       </View>
       <View style={[{ width: "50%", margin: 10, height:20,margin:20}]}>
       <Button style={styles_signedin.button}
        title="Logout"
        color="#808080"
        
        onPress={() => Alert.alert('Logout pressed')}
      />



       </View>
       </View>
      </View>
    
  );
};

export default Signed_in;

const styles_signedin = StyleSheet.create({
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