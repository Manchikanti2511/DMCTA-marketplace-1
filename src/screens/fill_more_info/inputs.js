import React, { Component } from 'react'
import { render } from 'react-dom'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


class Inputs extends Component{
    state={
        email:'',
        phno:'',
        full_name:'',
        details:''


    }
    handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlephno = (text) => {
        this.setState({ phno: text })
     }
     handlefull_name = (text) => {
        this.setState({ full_name: text })
     }
     handledetails = (text) => {
        this.setState({details: text })
     }

     submit = (email,phno,full_name) => {
        alert('email: ' + email + ' phone number: ' + phno + 'Full Name:'+ full_name)
     }
     render(){
         return(
             <View >
                <Text>Email:*</Text>
                 <TextInput style = {styles_info.input}
               underlineColorAndroid = "transparent"
               
        
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            <Text>Phone number with country code:*</Text>
            <TextInput style = {styles_info.input}
               underlineColorAndroid = "transparent"
               
               
               autoCapitalize = "none"
               onChangeText = {this.handlephno}/>
               <Text>Full Name:*</Text>
               <TextInput style = {styles_info.input}
               underlineColorAndroid = "transparent"
               
               
               autoCapitalize = "none"
               onChangeText = {this.handlefull_name}/>
               <Text>Details about products/packages you are looking for:*</Text>
               <TextInput style = {styles_info.input}
               underlineColorAndroid = "transparent"
               
               
               autoCapitalize = "none"
               onChangeText = {this.handledetails}/>
            
            <TouchableOpacity style = {styles_info.submitButton}
               
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles_info.submitButtonText} > Submit </Text>
            </TouchableOpacity>
            <Text>Our Tour Product & Service team member will get in touch with you shortly
                (within 24 hours) to understand your requirements. Please leave your contact 
                details for us to get in touch with you.
            </Text>



             </View>
         );
     };

};
export default Inputs
const styles_info=StyleSheet.create({
   container: {
       paddingTop: 23,
       margin:'10%'
    },
    input: {
       margin: 15,
       height: 40,
       borderColor:'#7D7D7D',
       
       borderRadius:50,
       borderWidth: 1,
       
       alignItems:'center',

    },
    submitButton: {
       backgroundColor: '#7BE6BB',
       padding: 10,
       margin: 15,
       height: 35,
       width:89,
       alignItems:'center',
       justifyContent:'center',
       marginLeft:'40%',
    },
    submitButtonText:{
       color: 'white'
    },
   });
