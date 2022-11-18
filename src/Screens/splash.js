import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { color } from '../Constant/color';

const Splash=({navigation})=>{
    return(
        <View style={{flex:1, backgroundColor:"#fff", justifyContent:"center", alignItems:"center"}}>
           <View style={styles.headingContainer}><Text style={styles.heading}>BillCreator</Text></View> 
          <Image source={require('../Image/logo.png')} style={{borderRadius:40, marginVertical:10}}/>
          <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Home')}>
            <Text style={styles.textStyle}>Create Bill here</Text></TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    headingContainer:{
        height:150, bottom:10,

    },
    heading:{
        fontSize:68,
        fontWeight:"bold"
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:25,
        backgroundColor:color.splashbtnColor,
        borderRadius:8,
        padding:5
    },
    textStyle:{
        fontSize:22,
        padding:4,
        color:"#fff"
       
    }
})

export default Splash;