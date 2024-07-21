

import React from "react";

import {
   PageFooter,
   BottomNavigationBar,
} from "../../assets/modules/clb-modules";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
} from "react-native";

import {
   TextInput,
} from "react-native-paper";


export default function Budgets( { ...props } ) {

   const [ text, setText ] = React.useState( "" );

   return( <>
         
         <TextInput style={{ flex: 1, backgroundColor: "#212329", margin: 24,  }}
            label="Email"
            // value={ text }
            // onChangeText={ text => setText( text ) }
         />
   </> );
}