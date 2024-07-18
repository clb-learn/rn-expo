

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


export default function Homepage( { ...props } ) {


   return( <>
      <View style={ { flex: 1, backgroundColor: "#16181C", } }>
         { props.page }
      </View>
   </> );
}