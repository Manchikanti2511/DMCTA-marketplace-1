import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Top_bar_myacc from './top_bar_myacc.js'
import Signed_in from './signed_in.js'
import styles from '../fill_more_info/styles_info.js'
import Signed_out from './signed_out.js'

class My_account extends Component {
    render() {
        return (
            <View style={styles_my_account.container}>
                <Top_bar_myacc></Top_bar_myacc>
                {/*<Signed_in></Signed_in>*/}
                <Signed_out></Signed_out>
                
                
            </View>
        )
    }
}
export default My_account
const styles_my_account=StyleSheet.create({
    
    container: {
        

     },
    
    });
