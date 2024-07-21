import { Controller } from "react-hook-form";
import { View, TextInput } from "react-native";
import { Press } from "./clb-modules";

<View style={ [ {
                     backgroundColor: "#e5e5e5",
                     padding: 16,
                  } ] } >
                     <Controller
                        control={ control } 
                        render={ ( { field } ) => (
                           <TextInput
                              { ...field } 
                              style={ [ {
                                 backgroundColor: "#fff",
                                 padding: 8,
                              } ] } 
                              placeholder="Your Name"
                           />
                        ) } 
                        name="name"
                        rules={ { required: "You must enter your name" } } 
                     />
                     { 
                        errors.name 
                        && 
                        <Text style={ [] } >
                           {/* { errors.name.message } */}
                        </Text> 
                     } 

                     <Controller
                        control={ control } 
                        render={ ( { field } ) => (
                           <TextInput
                              { ...field }
                              style={ [ {
                                 backgroundColor: "#fff",
                                 padding: 8,
                              } ] }
                              placeholder="Email"
                           />
                        ) } 
                        name="email"
                        rules={ { required: "You must enter your email", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" } } } 
                     />
                     { 
                        errors.email 
                        && 
                        <Text style={ [] } >
                           {/* { errors.email.message } */}
                        </Text>
                     } 

                     <Press title="Submit" onPress={ handleSubmit( onSubmit ) } />

                     { submittedData && (
                        <View style={ [] } >
                           <Text style={ [] } >Submitted Data:</Text>
                           <Text>Name: { submittedData.name } </Text>
                           <Text>Email: { submittedData.email } </Text>
                        </View>
                     ) } 
                  </View>