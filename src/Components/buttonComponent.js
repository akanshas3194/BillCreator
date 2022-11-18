import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { color } from '../Constant/color';

const ButtonComponent=({btnLabel, presshandler})=>{
    return(
        <View style={{height:50,borderRadius:10, marginVertical:20,justifyContent:"center", alignItems:"center", backgroundColor:color.splashbtnColor}}>
            <TouchableOpacity onPress={presshandler}>
                <Text style={{fontSize:24, padding:8, color:"#fff"}}>{btnLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent;