import { StyleSheet } from "react-native";
import { StatusBar } from 'react-native';



const styles=StyleSheet.create({
    SafeAreaView:{
        
        backgroundColor:'#FFF',
        marginTop: StatusBar.currentHeight,
    },
    
    title:{
        marginTop:50,
        fontSize:27,
        fontWeight:'bold',

    },
    notif:{
        
        width:50, 
        height:50,
        marginLeft:'85%',
        borderRadius:20, 
        backgroundColor:'#7BE6BB',
        justifyContent:'center',
        alignItems:'center',
    },
    search:{
        
        width:300, 
        height:50,
        borderRadius:30,
        backgroundColor:'#F1F4F3',
        padding:10,
        
        
        marginTop:'4%',
        marginLeft:'10%',
        marginBottom:'4%',
        flexDirection:'row',
    },
    searchtext:{
        fontStyle:'normal',
        padding:'2%',
        margin:'2%',

    },
    toursbttn:{
        width:111,
        height:105,
        borderRadius:10,
        backgroundColor:'#F1F4F3',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'20%',

    },
    othersbttn:{
        width:111,
        height:105,
        borderRadius:10,
        backgroundColor:'#F1F4F3',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'5%',


    },
    categoriesstyle:{
        flexDirection:'row',
    },
    subtitles:{
        fontSize:20,
        fontWeight:'bold',

    },
    

});

export default styles;