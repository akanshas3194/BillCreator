import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { color } from '../Constant/color';

const ButtonComponent=({btnLabel, presshandler})=>{
    return(
        <View style={{height:50,marginTop:20, borderRadius:10, justifyContent:"center", alignItems:"center", backgroundColor:color.splashbtnColor}}>
            <TouchableOpacity onPress={presshandler}>
                <Text style={{fontSize:18, fontWeight:"bold", padding:8, color:"#000080"}}>{btnLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent;