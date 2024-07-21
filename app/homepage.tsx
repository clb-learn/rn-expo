

import React from "react";

import {
   PageFooter,
   BottomNavigationBar,
   Fab,
} from "../assets/modules/clb-modules";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
} from "react-native";


export default function Homepage( { ...props } ) {


//    return( <>
//       <ScrollView style={{ flex: 1,  }}>
//          { props.page }
//          <PageFooter />
//       </ScrollView>
// </> );


   return( <>
         <ScrollView style={{ flex: 1,  }} >
         <ScrollView style={{ flex: 1,  }}>
            { props.page }
         </ScrollView>
            {/* <PageFooter /> */}
         </ScrollView>
         <Fab />
   </> );
}