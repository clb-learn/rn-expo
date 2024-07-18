

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
      <ScrollView style={ { flex: 1, minHeight: "100%", backgroundColor: "#1b1d22", } }>
         <View style={{ flex: 1, minHeight: "130%", }}>
            { props.page }
         </View>
         <PageFooter />
      </ScrollView>
   </> );
}