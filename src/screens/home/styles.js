import { StyleSheet } from "react-native";


const styles=StyleSheet.create({
    View:{
        flex:1,
        paddingTop:50,
    },
    
    title:{
        marginTop:50,
        fontSize:27,
        fontWeight:'bold',

    },
    notif:{
        
        width:'12%', 
        height:'7%',
        marginLeft:'85%',
        borderRadius:20,
        backgroundColor:'#3F7D20',
        justifyContent:'center',
        alignItems:'center',
    },
    search:{
        
        width:'70%', 
        height:'7%',
        borderRadius:10,
        backgroundColor:'#F1F4F3',
        justifyContent:'center',
        alignItems:'flex-start',
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
        alignItems:'flex-start',
        marginLeft:'20%',

    },
    othersbttn:{
        width:111,
        height:105,
        borderRadius:10,
        backgroundColor:'#F1F4F3',
        justifyContent:'center',
        alignItems:'flex-start',
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