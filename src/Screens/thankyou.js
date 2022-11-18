import React from 'react';
import { View, Text } from 'react-native';

const Thankyou=()=>{
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:25, fontWeight:"bold", color:"navyblue"}}>Thank you for choosing us !</Text>
        <Image source={require('../Image/right-tick.png')} style={{}}/></View>
        
    )
}

export default Thankyou;