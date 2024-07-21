

import React, {
   useState,
} from "react";

import {
   Header,
   PageFooter,
   BottomNavigationBar,
} from "../../assets/modules/clb-modules";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   TextInput,
   Image,
} from "react-native";

import {
   Icon,
} from "../../assets/modules/clb-icons";

import * as c from "../../assets/modules/clb-html";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewCustomer( { ...props } ) {
   const 
      [ name, setName ] = useState( "" )
   ;


   return( <>
      <SafeAreaView>
         <c.Section bg="#f3f3f3">
            <c.Header>
               <c.Content>
                  <c.H3 color="#00559c99">Cadastrar um novo cliente</c.H3>
               </c.Content>
            </c.Header>
            <c.Section bg="#fff" style={{ borderRadius: 24 }}>
               <c.Content gap={ 8 }>

                  <View style={ s.form }>
                     <c.Section style={ s.header }>
                        <c.H4>Cadastro Rápido</c.H4>
                     </c.Section>

                     <c.Section cliente section>
                        <Text style={ s.label }>Nome do Cliente { name }</Text>
                        <TextInput style={ s.input }
                           value={ name }
                           onChangeText={ setName }
                        />
                     </c.Section>

                     <c.Section contato section>
                        <View style={ s.divider }>
                           <Text style={ s.dividerText }>CONTATO</Text>
                        </View>
                        <View style={ s.duo }>
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>Celular</Text>
                              <TextInput style={ s.input }/>
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>WhatsApp</Text>
                              <TextInput style={ s.input }/>
                           </View>
                        </View>
                        
                        <View style={ [ s.duo, {  } ] }>
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>Telefone</Text>
                              <TextInput style={ s.input }/>
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>Telefone 2</Text>
                              <TextInput style={ s.input }/>
                           </View>
                        </View>
                        
                        <Text style={ s.label }>Email</Text>
                        <TextInput style={ s.input }/>
                        
                        <View style={ [ s.duo, {  } ] }>
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>RG/IE</Text>
                              <TextInput style={ s.input }/>
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>CPF</Text>
                              <TextInput style={ s.input }/>
                           </View>
                        </View>
                     </c.Section>

                     <c.Section endereço section>
                        <View style={ s.divider }>
                           <Text style={ s.dividerText }>ENDEREÇO</Text>
                        </View>
                        
                        <View style={ [ s.duo, {  } ] }>
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>CEP</Text>
                              <TextInput style={ s.input }/>
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>UF</Text>
                              <TextInput style={ s.input }/>
                           </View>
                        </View>
                        
                        <Text style={ s.label }>Rua</Text>
                        <TextInput style={ s.input }/>
                        
                        <View style={ [ s.duo, {  } ] }>
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>Número</Text>
                              <TextInput style={ s.input }/>
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>Complemento</Text>
                              <TextInput style={ s.input }/>
                           </View>
                        </View>
                        
                        <Text style={ s.label }>Bairro</Text>
                        <TextInput style={ s.input }/>
                        
                        <Text style={ s.label }>Cidade</Text>
                        <TextInput style={ s.input }/>
                     </c.Section>

                     <c.Section observações section>
                        <View style={ s.divider }>
                           <Text style={ s.dividerText }>OBSERVAÇÕES</Text>
                        </View>
                        <Text style={ s.label }>Observação</Text>
                        <TextInput style={ s.input }/>
                     </c.Section>


                  </View>


                 {/*  <Text style={ styles.label }>First name</Text>
                  <Controller
                  control={ control }
                     render={ ( { field: { onChange, onBlur, value } } ) => (
                        <TextInput
                           style={ styles.input }
                           onBlur={ onBlur }
                           onChangeText={ value => onChange( value ) }
                           value={ value }
                        />
                     )}
                     name="firstName"
                     rules={ { required: true } }
                  />
                  <Text style={ styles.label }>Last name</Text>
                  <Controller
                     control={ control }
                     render={ ( { field: { onChange, onBlur, value } } ) => (
                        <TextInput
                           style={ styles.input }
                           onBlur={ onBlur }
                           onChangeText={ value => onChange( value ) }
                           value={ value }
                        />
                     ) }
                     name="lastName"
                     rules={ { required: true } }
                  />

                  <c.Section gap={ 24 } style={ { marginTop: 24, } }>
                     <Press text="Reset" onPress={ () => reset( { firstName: "Céo", lastName: "Sammarco" } ) }/>
                     <Press text="Submit" onPress={ handleSubmit( onSubmit ) } />
                  </c.Section> */}
                  
               </c.Content>
            </c.Section>
         </c.Section>
      </SafeAreaView>
   </> );
}


const s = StyleSheet.create( {
   root: {
      // paddingTop: StatusBar.currentHeight,
   },
   container: {
      flex: 1,
      justifyContent: 'center',
      padding: 8,
      backgroundColor: '#0e101c',
   },
   form: {
   },
   header: {
      marginTop: 16,
      marginBottom: 24,
   },
   divider: {
      borderBottomColor: "#009ee6",
      borderBottomWidth: 2,
      borderStyle: "dashed",
      marginTop: 16,
      marginBottom: 16,  
   },
   dividerText: {
      fontWeight: "bold",
      marginBottom: 8,
      color: "#00559c",
   },
   duo: {
      flexDirection: "row",
      gap: 8,
   },
   duoBox: {
      flex: .5,
   },
   label: {
      color: "#777",
      fontWeight: "500",
      marginBottom: 8,
      marginLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 16,
      paddingRight: 16,
   },
   input: {
      backgroundColor: "#f3f3f3",
      height: 56,
      marginBottom: 16,
      padding: 16,
      borderRadius: 16,
      borderColor: "#fff2",
      borderWidth: 1,
      borderStyle: "solid",
   },
   button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: '#ec5990',
      borderRadius: 4,
   },
} );



   
