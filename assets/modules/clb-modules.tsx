

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
            height: "100%",
            backgroundColor: "#00559C",
            elevation: 10,
            shadowColor: "#000",
            shadowRadius: 10,
            shadowOpacity: 1,
            
            borderBottomColor: "#0005",
            
         } }
      >
         {/* <View style={ {
            backgroundColor: "#00559C",
            height: 80,
         } }>
            <Image 
               source={ require( "../images/EA/EA-appbar-logo.png" ) }
               style={ {
                  resizeMode: "contain",
                  width: 100,
               } }
            >
            </Image>
         </View> */}
      </View>
   </> );
} 

export function AppBarLeft( { ...props } ) {


   return( <>
      <View 
         style={ {
            // height: "100%",
            backgroundColor: "#672",
         } }
      >
         <Text>oi</Text>
      </View>
   </> );
} 

export function AppBarRight( { ...props } ) {


   return( <>
      <View 
         style={ {
            // height: "100%",
            backgroundColor: "#454",
         } }
      >
         <Text>oi</Text>
      </View>
   </> );
} 


/* == [ Page-Footer ]
== == == == == == == == == */
export function PageFooter( { ...props } ) {

   return( <>
      <View style={ { 
         backgroundColor: "#16181c", 
         flex: .5,   
         alignItems: "center",
         justifyContent: "center",
      } }>
         <Image 
            source={ require( "../images/EA/EA-appbar-logo.png" ) }
            style={ {
               resizeMode: "contain",
               width: "70%",
            } }
         />
      </View>
   </> );
}