

import React from "react";

import {
   PageFooter,
} from "../assets/modules/clb-modules";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
} from "react-native";

export default function Index() {


   return( <>
      <ScrollView>
         <View style={ { flex: 1, } }></View>
         <PageFooter />
      </ScrollView>
   </> );
}