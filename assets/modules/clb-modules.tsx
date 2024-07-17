

import React from "react";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
   Button,
   TouchableOpacity,
} from "react-native";


/* == [ AppBar ]
== == == == == == == == == */
export function AppBar( { ...props } ) {


   return( <>
      <View 
         style={ {
            backgroundColor: "#00559C",
            elevation: 10,
            shadowColor: "#000",
            shadowRadius: 10,
         } }
      >
         <Image 
            source={ require( "../images/react-logo.png" ) }
         ></Image>
      </View>
   </> );
} 


/* == [ Page-Footer ]
== == == == == == == == == */