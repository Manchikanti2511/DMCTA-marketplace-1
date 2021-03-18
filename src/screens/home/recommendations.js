import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Recommendations extends Component {
    render() {
        return (
            
            <View style={{ height: 300, width: 180, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
               
               <Image source={this.props.imageUri} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}/>
               </View>
               
            );
        }
    }
    export default Recommendations;