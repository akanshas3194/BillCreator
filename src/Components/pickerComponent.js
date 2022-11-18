import React from 'react';
import {Picker} from '@react-native-picker/picker'
import { View, Text } from 'react-native';

const PickerComponent=({pickervalue, onchangeHandler, keyName1})=>{
    
  
    return(
        <View style={{marginTop:12, }}>
            <Text>Select the Product</Text>
        <View style={{borderWidth:1, borderColor:"#c0c0c0", height:40, borderRadius:5, justifyContent:"center"}}>

           <Picker onValueChange={(value)=>onchangeHandler(value, keyName1)} selectedValue={pickervalue}>
                <Picker.Item label='Select the Product' value={0} color={"#d3d3d3"}/>
                <Picker.Item label='Product1' value={'Product1'}/>
                <Picker.Item label='Product2' value={'Product2'}/>
                <Picker.Item label='Product3' value={'Product3'}/>
                <Picker.Item label='Product4' value={'Product4'}/>
            </Picker>
        </View>
        </View>
    )
}

export default PickerComponent;