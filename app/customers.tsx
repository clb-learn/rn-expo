

import React, { useState, useEffect, Component } from "react";

import {
   PageFooter,
   BottomNavigationBar,
   Fab,
} from "@/assets/modules/clb-modules";

import * as c from "@/assets/modules/clb-html";
import * as ea from "@/assets/modules/clb-ea";

import { Icon } from "@/assets/modules/clb-icons";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


/* == [ properties ]
== == == == == == == == == */
async function InsertDBs() {
   await AsyncStorage.setItem( "customer_dbs", JSON.stringify( [
      {
         name: "Débora", gender: "feminino"
      },
      {
         name: "Noely", gender: "feminino"
      },
      {
         name: "Bernardo", gender: "masculino"
      },
      {
         name: "Anselmo", gender: "masculino"
      },
   ] ) );
}
// InsertDBs();


/* == [ exports ]
== == == == == == == == == */
export default function Customers( { ...props } ) {
   const 
      [ Customers, setCustomers ] = useState( [] )
   ;

   useEffect( () => {
      const fetchData = async () => {
        const data = await AsyncStorage.getItem( "customer_dbs" );
        const json = await JSON.parse( data );
         console.log( "json: \n\n\n", json );
        setCustomers( json );
      }
    
      fetchData()
        .catch( console.error );
    }, [] );
   

   return( <>
      <c.Section bg="#f5f5f5" style={{ flex: 1, }}>
         <c.Header>
            <c.Content>
               <c.H2>Clientes</c.H2>
            </c.Content>
         </c.Header>
         <c.Section>
            <c.Content gap={ 8 }>

               { Customers.map( customer => {
                  if( customer != null ) {
                     return( <>
                        <ea.UsersCard 
                           name={ customer.name }
                        />
                     </> );
                  } /* else {
                     return( <>
                        <ea.UsersCard 
                           name={ "oi" }
                        />
                     </> );
                  } */
               } ) }
            </c.Content>
         </c.Section>
      </c.Section>
   </> );
}