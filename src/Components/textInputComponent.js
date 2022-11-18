import React from 'react';
import { Text, TextInput, View } from 'react-native';

const TextInputComponent=({textplaceholder, value, label, pressHandler, keyName  })=>{
    return(
        <View style={{marginTop:12}}>
            <Text>{label}</Text>
            <TextInput placeholder={textplaceholder} 
             placeholderTextColor={'#d3d3d3'} 
             value={value} onChangeText={(text)=>pressHandler(text,keyName)} style={{borderColor:"#c0c0c0", borderWidth:1, borderRadius:5, padding:5}}/>
        </View>
    )
}

export default TextInputComponent;