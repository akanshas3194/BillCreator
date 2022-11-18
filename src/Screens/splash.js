import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { color } from '../Constant/color';

const Splash=()=>{
    return(
        <View>
           <View style={styles.headingContainer}><Text style={styles.heading}>BillCreator</Text></View> 
          <Image source={require('../Image/logo.png')} style={{borderRadius:40}}/>
          <TouchableOpacity style={styles.container}>
            <Text style={styles.textStyle}>Create Bill here ~</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headingContainer:{
        justifyContent:"center",
        alignItems:"center",
        height:100, bottom:80
    },
    heading:{
        fontSize:48,
        fontWeight:"bold"
    },
    container:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:15,
        backgroundColor:color.splashbtnColor,
        borderRadius:20
    },
    textStyle:{
        fontSize:22,
        padding:4
       
    }
})

export default Splash;