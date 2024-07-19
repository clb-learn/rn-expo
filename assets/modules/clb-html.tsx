

import React from "react";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
   Button,

} from "react-native";


/* == [ texts ]
== == == == == == == == == */
export function H1( { ...props } ) {
   const 
      text = props.children
      ,
      color = props.color || "#333"
   ;
   return( <>
     <Text style={ {
         fontSize: 2*16,
         fontWeight: "bold",
         color: color,
      } }> { text } </Text>
   </> );
}

export function H2( { ...props } ) {
   const 
      text = props.children
      ,
      color = props.color || "#333"
   ;
   return( <>
     <Text style={ {
         fontSize: 1.5*16,
         fontWeight: "bold",
         color: color,
      } }> { text } </Text>
   </> );
}

export function H3( { ...props } ) {
   const 
      text = props.children
      ,
      color = props.color || "#333"
   ;
   return( <>
     <Text style={ {
         fontSize: 1.3*16,
         fontWeight: "bold",
         color: color,
      } }> { text } </Text>
   </> );
}

export function H4( { ...props } ) {
   const 
      text = props.children
      ,
      color = props.color || "#333"
   ;
   return( <>
     <Text style={ {
         fontSize: 18,
         fontWeight: "bold",
         color: color,
      } }> { text } </Text>
   </> );
}

export function H5( { ...props } ) {
   const 
      text = props.children
      ,
      color = props.color || "#333"
   ;
   return( <>
     <Text style={ {
         fontSize: .9*16,
         fontWeight: "bold",
         color: color,
      } }> { text } </Text>
   </> );
}

export function H6( { ...props } ) {
   const 
      text = props.children
      ,
      color = props.color || "#333"
   ;
   return( <>
     <Text style={ {
         fontSize: .8*16,
         fontWeight: "bold",
         color: color,
      } }> { text } </Text>
   </> );
}

export function P( { ...props } ) {
   const 
      text = props.children
      ,
      color = props.color || "#333"
   ;
   return( <>
     <Text style={ {
         fontSize: 1*16,
         fontWeight: "regular",
         color: color,
      } }> { text } </Text>
   </> );
}

export function T( { ...props } ) {
   const 
      text = props.children
      ,
      color = props.color || "#333"
   ;
   return( <>
     <Text style={ {
         fontSize: 1*16,
         fontWeight: "normal",
         color: color,
      } }> { text } </Text>
   </> );
}


/* == [ box ]
== == == == == == == == == */
export const Section = ( { ...props } ) => {
   const 
      child = props.children
      ,
      s = StyleSheet.create( {
         view: {}
      } )
      ,
      bg = props.bg || "transparent"
   ;

   return( <>
      <View style={ 
         [ 
            s.view
            ,
            {
               backgroundColor: bg
            }
         ]
      }>
         { child }
      </View>
   </> );
}

export const Content = ( { ...props } ) => {
   const 
      child = props.children
      ,
      s = StyleSheet.create( {
         view: {
            padding: 16,
         }
      } )
      ,
      bg = props.bg || "transparent"
   ;

   return( <>
      <View style={ [ 
         s.view, 
         {
            backgroundColor: bg
         } 
      ] }>
         { child }
      </View>
   </> );
}