

import React from "react";

import {
   PageFooter,
   BottomNavigationBar,
} from "../assets/modules/clb-modules";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
} from "react-native";


export default function Customers( { ...props } ) {


   return( <>
      <View style={ { flex: 1, backgroundColor: "#212329", } }>
         <Text style={ { flex: 1, color: "#fc0", } }>Clientes</Text>
         {/* <PageFooter /> */}
      </View>
   </> );
}