

import React from "react";

import {
   Header,
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


export default function Home( { ...props } ) {


   return( <>
      <Header title="Céo"/>
      <Text style={ { flex: 1, color: "#fc0", } }>Home</Text>
   </> );
}

