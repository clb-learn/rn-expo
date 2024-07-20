

import React from "react";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
   Button,
   
} from "react-native";

import * as c from "./clb-html";

import { Icon } from "./clb-icons";


export function UsersCard( { ...props } ) {

   return( <>
      <View>
         <View style={{
            flexDirection: "row",
            backgroundColor: "#e5e5e5",
            borderRadius: 16,
            padding: 16,
            borderColor: "#7777",
            borderWidth: 1,
         }}>
            <View style={{
               borderRadius: 100,
               width: 70,
               aspectRatio: 1,
               flex: .20,
               // overflow: "hidden",
               backgroundColor: "#27f",
            }}>
               <Image source={ require( "../images/Avatar/default_avatar_masc_ico.webp" ) }
                  style={{
                     resizeMode: "contain",
                     width: "100%",
                     flex: 1,
                     borderRadius: 100,
                     overflow: "hidden",
                  }}
               />
            </View>
         <View style={{
            justifyContent: "center",
            flex: .75,
            width: 70,
            paddingLeft: 8,
            // backgroundColor: "#4565",
         }}>
            <c.H4>Anselmo Sammarco Nunes</c.H4>
            <c.T>(13) 99148-6078</c.T>
         </View>
         <View style={{
            flex: .05,
            justifyContent: "center",
         }}>
            <Icon i="mc" name="dots-vertical" color="#fff"/>
         </View>
         </View>
      </View>
   </> );
}