

import React, {
   useState,
} from "react";

import {
   Header,
   PageFooter,
   BottomNavigationBar,
   Press,
   Touch,
} from "../assets/modules/clb-modules";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   TextInput,
   Image,
   TouchableOpacity,
   Keyboard,
} from "react-native";

import * as Form from "../assets/modules/clb-form";
import * as CStore from "../assets/modules/clb-dbs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
   Icon,
} from "../assets/modules/clb-icons";

import * as c from "../assets/modules/clb-html";

export default function NewCustomer( { ...props } ) {
   const 
      [ Name, setName ] = useState( "" )
      ,
      [ Cellphone, setCellphone ] = useState( "" )
      ,
      [ Whatsapp, setWhatsapp ] = useState( "" )
      ,
      [ Phone, setPhone ] = useState( "" )
      ,
      [ Phone2, setPhone2 ] = useState( "" )
      ,
      [ Email, setEmail ] = useState( "" )
      ,
      [ Rg, setRg ] = useState( "" )
      ,
      [ Cpf, setCpf ] = useState( "" )
      ,
      [ Cep, setCep ] = useState( "" )
      ,
      [ Estate, setEstate ] = useState( "" )
      ,
      [ Street, setStreet ] = useState( "" )
      ,
      [ Number, setNumber ] = useState( "" )
      ,
      [ Complemento, setComplemento ] = useState( "" )
      ,
      [ District, setDistrict ] = useState( "" )
      ,
      [ City, setCity ] = useState( "" )
      ,
      [ Note, setNote ] = useState( "" )
      ,
      [ DBS, setDBS ] = useState( [] )
   ;

   const 
      inputs = [
         setName,
         setCellphone,
         setWhatsapp,
         setPhone,
         setPhone2,
         setEmail,
         setRg,
         setCpf,
         setCep,
         setEstate,
         setStreet,
         setNumber,
         setComplemento,
         setDistrict,
         setCity,
         setNote
      ]
   ;

   /* async function GetNSaveData( dbs_name ) {
      let customers = [];
      try {
         if( await AsyncStorage.getItem( dbs_name ) ) {
         const 
            data = {
               Name: Name,
               Cellphone: Cellphone,
               Whatsapp: Whatsapp,
               Phone: Phone,
               Phone2: Phone2,
               Email: Email,
               Rg: Rg,
               Cpf: Cpf,
               Cep: Cep,
               Estate: Estate,
               Street: Street,
               Number: Number,
               Complemento: Complemento,
               District: District,
               City: City,
               Note: Note 
            }
            ,
            jsonValue = await AsyncStorage.getItem( dbs_name )
            ,
            dataList = jsonValue != null ? JSON.parse( jsonValue ) : null
            ,
            tempDBs = [
               ...await dataList
            ]
         ;

         tempDBs.push( data );
         
            console.log( "if( await AsyncStorage.getItem( dbs_name ) ) { data: ", data );
         }

         await AsyncStorage.setItem( dbs_name, JSON.stringify( tempDBs ) );
      } catch( err ) {
         console.log( "GetNSaveData error: ", err );
      }
   } */

   async function GetNSaveData( dbs_name ) {
      let customers = [];
      let data = {
         Name: Name,
         Cellphone: Cellphone,
         Whatsapp: Whatsapp,
         Phone: Phone,
         Phone2: Phone2,
         Email: Email,
         Rg: Rg,
         Cpf: Cpf,
         Cep: Cep,
         Estate: Estate,
         Street: Street,
         Number: Number,
         Complemento: Complemento,
         District: District,
         City: City,
         Note: Note 
      };

      if( AsyncStorage.getItem( dbs_name ) ) {
         let json = AsyncStorage.getItem( dbs_name );
         customers = [ 
            json
         ];
         customers.push( data );
      } else {
         customers.push( data );
      }
      // if( customer ) {
      //    customers.push( customer );
      //    localStorage.setItem( "ea.customers", JSON.stringify( customers ) );
      // }
      AsyncStorage.setItem( dbs_name, JSON.stringify( customers ) );

      // try {
      //    if( await AsyncStorage.getItem( dbs_name ) ) {
      //    const 
      //       data = {
      //          Name: Name,
      //          Cellphone: Cellphone,
      //          Whatsapp: Whatsapp,
      //          Phone: Phone,
      //          Phone2: Phone2,
      //          Email: Email,
      //          Rg: Rg,
      //          Cpf: Cpf,
      //          Cep: Cep,
      //          Estate: Estate,
      //          Street: Street,
      //          Number: Number,
      //          Complemento: Complemento,
      //          District: District,
      //          City: City,
      //          Note: Note 
      //       }
      //       ,
      //       jsonValue = await AsyncStorage.getItem( dbs_name )
      //       ,
      //       dataList = jsonValue != null ? JSON.parse( jsonValue ) : null
      //       ,
      //       tempDBs = [
      //          ...await dataList
      //       ]
      //    ;

      //    tempDBs.push( data );
         
      //       console.log( "if( await AsyncStorage.getItem( dbs_name ) ) { data: ", data );
      //    }

      //    await AsyncStorage.setItem( dbs_name, JSON.stringify( tempDBs ) );
      // } catch( err ) {
      //    console.log( "GetNSaveData error: ", err );
      // }
   }

   async function GetData( dbs_name ) {
      try {
         const 
            data = await AsyncStorage.getItem( dbs_name );
         ;
         
         if( data !== undefined ) {
            console.log( "Congrats! here is your prize: ", data );
            // setDBS( JSON.stringify( data ) );
            setDBS( ["data"] );
         }
      } catch( err ) {
         console.log( "GetData err: ", err );
      }
   }
   
   return( <>
         <c.Section bg="#f3f3f3">
            <c.Header>
               <c.Content>
                  <c.H3 color="#00559c99">Cadastrar cliente</c.H3>
               </c.Content>
            </c.Header>
            <c.Section bg="#fff" style={{ borderRadius: 24 }}>
               <c.Content gap={ 8 }>

                  <View style={ s.form }>
                     <c.Section style={ s.header }>
                        <c.H4>Cadastro Rápido</c.H4>
                     </c.Section>

                     <c.Section cliente section>
                        <Text style={ s.label }>Nome do Cliente { Name }</Text>
                        <TextInput style={ s.input }
                           value={ Name }
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
                              <TextInput style={ s.input }
                           value={ Cellphone }
                           onChangeText={ setCellphone }
                        />
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>WhatsApp</Text>
                              <TextInput style={ s.input }
                           value={ Whatsapp }
                           onChangeText={ setWhatsapp }
                        />
                           </View>
                        </View>
                        
                        <View style={ [ s.duo, {  } ] }>
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>Telefone</Text>
                              <TextInput style={ s.input }
                           value={ Phone }
                           onChangeText={ setPhone }
                        />
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>Telefone 2</Text>
                              <TextInput style={ s.input }
                           value={ Phone2 }
                           onChangeText={ setPhone2 }
                        />
                           </View>
                        </View>
                        
                        <Text style={ s.label }>Email</Text>
                        <TextInput style={ s.input }
                           value={ Email }
                           onChangeText={ setEmail }
                        />
                        
                        <View style={ [ s.duo, {  } ] }>
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>RG/IE</Text>
                              <TextInput style={ s.input }
                           value={ Rg }
                           onChangeText={ setRg }
                        />
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>CPF</Text>
                              <TextInput style={ s.input }
                           value={ Cpf }
                           onChangeText={ setCpf }
                        />
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
                              <TextInput style={ s.input }
                           value={ Cep }
                           onChangeText={ setCep }
                        />
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>UF</Text>
                              <TextInput style={ s.input }
                           value={ Estate }
                           onChangeText={ setEstate }
                        />
                           </View>
                        </View>
                        
                        <Text style={ s.label }>Rua</Text>
                        <TextInput style={ s.input }
                           value={ Street }
                           onChangeText={ setStreet }
                        />
                        
                        <View style={ [ s.duo, {  } ] }>
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>Número</Text>
                              <TextInput style={ s.input }
                           value={ Number }
                           onChangeText={ setNumber }
                        />
                           </View>
                           
                           <View style={ s.duoBox }>
                              <Text style={ s.label }>Complemento</Text>
                              <TextInput style={ s.input }
                                 value={ Complemento }
                                 onChangeText={ setComplemento }
                              />
                           </View>
                        </View>
                        
                        <Text style={ s.label }>Bairro</Text>
                        <TextInput style={ s.input }
                           value={ District }
                           onChangeText={ setDistrict }
                        />
                        
                        <Text style={ s.label }>Cidade</Text>
                        <TextInput style={ s.input }
                           value={ City }
                           onChangeText={ setCity }
                        />
                     </c.Section>

                     <c.Section observações section>
                        <View style={ s.divider }>
                           <Text style={ s.dividerText }>OBSERVAÇÕES</Text>
                        </View>
                        <Text style={ s.label }>Observação</Text>
                        <TextInput style={ s.input }
                           value={ Note }
                           onChangeText={ setNote }
                        />
                     </c.Section>
                     <c.Section style={ {
                        gap: 16,
                        marginTop: 24,
                        marginBottom: 66,
                     } }>

                        <Touch 
                           txt="apagar tudo"
                           onPressIn={ () => { Keyboard.dismiss() } }
                           onPressOut={ () => { Form.ClearInputs( inputs ) } }
                        />
                        <Touch 
                           touchSty={{
                              backgroundColor: "#00559C",
                           }}
                           txtSty={{
                              color: "#fff",
                           }}
                           txt="cadastrar"
                           onPress={ () => { GetNSaveData( "customer_dbs" ) } }
                        />

                     </c.Section>
                     <Touch 
                        touchSty={{
                           backgroundColor: "#00559C",
                        }}
                        txtSty={{
                           color: "#fff",
                        }}
                        txt="getDbs"
                        onPress={ () => { GetData( "customer_dbs" ) }}
                     />

                     <c.Section bg="#1b1d22" style={ {
                        padding: 16,

                     } }>
                        
                        <c.H2 id="target" color="#fc0">oi{ DBS }</c.H2>
                     </c.Section>
                     
                  </View>
               </c.Content>
            </c.Section>
         </c.Section>
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



   
