

import React , { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";

   
export function Form( { ...props } ) { 
   const 
      {  control, 
         handleSubmit, 
         formState: { errors } } = useForm()
      ,
      [ submittedData, setSubmittedData ] = useState( null )
      ,
      onSubmit = data => { 
         console.log( "Submitted Data:", data );
         setSubmittedData( data );
       } 
   ;

   return( <>
      <SafeAreaView>
         <View style={ [] } >
            <Controller
               control={ control } 
               render={ ( { field } ) => (
                  <TextInput
                     { ...field } 
                     style={ [] } 
                     placeholder="Your Name"
                  />
               ) } 
               name="name"
               rules={ { required: "You must enter your name" } } 
            />
            { errors.name && <Text style={ [] } >{ errors.name.message } </Text> } 

            <Controller
               control={ control } 
               render={ ( { field } ) => (
                  <TextInput
                     { ...field } 
                     style={ [] } 
                     placeholder="Email"
                  />
               ) } 
               name="email"
               rules={ { required: "You must enter your email", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" } } } 
            />
            { errors.email && <Text style={ [] } >{ errors.email.message } </Text> } 

            <Button title="Submit" onPress={ handleSubmit(onSubmit) } />

            { submittedData && (
               <View style={ [] } >
                  <Text style={ [] } >Submitted Data:</Text>
                  <Text>Name: { submittedData.name } </Text>
                  <Text>Email: { submittedData.email } </Text>
               </View>
            ) } 
         </View>
      </SafeAreaView>
   </> );
 } 