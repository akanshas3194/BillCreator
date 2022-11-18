import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import ButtonComponent from '../Components/buttonComponent';
import PickerComponent from '../Components/pickerComponent';
import TextInputComponent from '../Components/textInputComponent';
// import dateFormat from 'dateformat';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import {PdfCode} from "../Components/pdfConverter";

const Home=()=>{

    const[billdetails, setBilldetails] =useState({name:'',phone:'',prodQty:'',prodPrice:'',invoiceNumber:0,adress:'',pincode:''})
    const[pickervalue, setPickerValue]=useState({prodName:'', paymentType:''})
    const now=new Date();

    const onPressHandler=(text, key)=>{
     setBilldetails(billdetails=>({...billdetails, [key]:text, ...pickervalue} ))

    }

    const chnageHandler=(value,key)=>{
        setPickerValue(pickervalue=>({...pickervalue,[key]:value}))
    }

    const onHandlerPress=async()=>{
         let html = PdfCode(billdetails.name, billdetails.adress,pickervalue.prodName, billdetails.phone, billdetails.prodPrice, billdetails.prodQty
          ,billdetails.invoiceNumber,billdetails.pincode,pickervalue.paymentType, )

         try{
          const { uri } = await Print.printToFileAsync({
            html
          });
          console.log('File has been saved to:', uri);
          await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });

          setBilldetails({name:'',phone:'',prodQty:'',prodPrice:'',invoiceNumber:0,adress:'',pincode:''})
    }catch(err){
      Alert.alert("Make shure You have Internet Connection or contact @+91 8530730017");
  }

  }

    return(
        <ScrollView style={{flex:1, padding:5}} showsVerticalScrollIndicator={false}>
            <View style={{height:140, justifyContent: "center",alignItems: "center"}}>
            <Text style={{fontSize:28, fontWeight:"bold"}}>Fill the required details to create the Bill</Text></View>

            <TextInputComponent
             value={billdetails.name}
             keyName={'name'}
             textplaceholder="Enter customer name"
             label="Customer Name"
             pressHandler={onPressHandler}/>

           <TextInputComponent
             value={billdetails.phone}
             keyName={'phone'}
             textplaceholder="Enter customer's phone number"
             label="Phone number"
             pressHandler={onPressHandler}/>

            <PickerComponent 
             pickervalue={pickervalue.prodName} 
             onchangeHandler={chnageHandler}
             keyName1={'prodName'} 
              />

            <TextInputComponent
             value={billdetails.prodQty}
             keyName={'prodQty'}
             textplaceholder="Enter product quantity"
             label="Product Quantity"
             pressHandler={onPressHandler}/> 

           <TextInputComponent
             value={billdetails.prodPrice}
             keyName={'prodPrice'}
             textplaceholder="Enter product price"
             label="Product Price"
             pressHandler={onPressHandler}/>
            
           <TextInputComponent
             value={billdetails.adress}
             keyName={'adress'}
             textplaceholder="Enter customer's adress"
             label="Adress"
             pressHandler={onPressHandler}/>

           <TextInputComponent
             value={billdetails.pincode}
             keyName={'pincode'}
             textplaceholder="Enter customer's pincode"
             label="Pin Code"
             pressHandler={onPressHandler}/>

           <TextInputComponent
             value={billdetails.invoiceNumber}
             keyName={'invoiceNumber'}
             textplaceholder="Invoice number"
             keyboardType="numeric"
             label="Invoice Number"
             pressHandler={onPressHandler}/>

            <PickerComponent 
             pickervalue={pickervalue.paymentType} 
             onchangeHandler={chnageHandler}
             keyName1={'paymentType'}
            />
        
            <ButtonComponent 
             btnLabel="Create Bill" 
             presshandler={()=>onHandlerPress()}
             />
       
        </ScrollView>
    )
}

export default Home;