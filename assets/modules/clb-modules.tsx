

import HomeScreen from "@/app-example/app/(tabs)";
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


import { BottomNavigation } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import Homepage from "../../app/homepage";
import Customers from "../../app/customers";

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
            // backgroundColor: "#672",
         } }
      >
         <Text style={ { color: "#fff", } }>oi</Text>
      </View>
   </> );
} 

export function AppBarRight( { ...props } ) {


   return( <>
      <View 
         style={ {
            // height: "100%",
            // backgroundColor: "#454",
         } }
      >
         <Text style={ { color: "#fff", } }>oi</Text>
      </View>
   </> );
} 



/* == [ BottomNavigation ]
== == == == == == == == == */
const 
   HomeRoute = () => <Text>Home</Text>
   ,
   CustomersRoute = () => (
      <Homepage page={ <Customers /> } />
   )
   ,
   RecentsRoute = () => <Text>Recents</Text>
   ,
   NotificationsRoute = () => <Text>Notifications</Text>
;

export function BottomNavigationBar() {
   const 
      [ index, setIndex ] = React.useState( 0 )
      ,
      [ routes ] = React.useState( [
         { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
         { key: 'customers', title: 'Customers', focusedIcon: 'album' },
         { key: 'recents', title: 'Recents', focusedIcon: 'history', backgroundColor: "#fc0" },
         { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
      ] )
   ;

   const renderScene = BottomNavigation.SceneMap( {
      home: HomeRoute,
      customers: CustomersRoute,
      recents: RecentsRoute,
      notifications: NotificationsRoute,
   } );

   return( <>
      <BottomNavigation
         navigationState={ { index, routes } }
         onIndexChange={ setIndex }
         renderScene={ renderScene }
         // sceneAnimationType={ "shifting" || "opacity" }
         sceneAnimationType={ "opacity" }
         shifting={ true }
         labeled={ true }
         compact={ true }
         activeColor={ "#fff" }
         inactiveColor={ "#00559C" }
         keyboardHidesNavigationBar={ true }
         barStyle={ { backgroundColor: "#16181C" } }
      />
   </> );
};


/* == [ Page-Footer ]
== == == == == == == == == */
export function PageFooter( { ...props } ) {
   const 
      s = StyleSheet.create( {
         section: {
            
         },
         h3: {
            color: "#fff", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: "bold",
            textAlign: "center",
         },
         p: {
            color: "#fff", alignItems: "center", justifyContent: "center",
            textAlign: "center",
         },
         taCenter: { textAlign: "center", },
         b: {
            fontWeight: "bold",
         },
         pd: { padding: 6, },
         picture: {
            // backgroundColor: "#27f",
            width: "100%",
            aspectRatio: "1 / .5",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 36,
            marginBottom: 36,
         },
      } ) 
   ;

   return( <>
      <View style={ { 
         backgroundColor: "#000", 
         width: "100%",
         height: 400,   
         alignItems: "center",
         // justifyContent: "center",
      } }>
         <View style={ [s.picture, ] }>
            <Image 
               source={ require( "../images/EA/EA-logo-footer.png" ) }
               style={ {
                  resizeMode: "contain",
                  width: "90%",
               } }
            />
         </View>
         <View style={ s.pd }>
            <Text style={ s.h3 }>CNPJ 32.858.892/0001-52 - IM 67358/0001</Text>
         </View>
         <View>
            <Text style={ s.p }>Rua José Alves Maciel, 40 - Aviação</Text>
         </View>
         <View>
            <Text style={ s.p }>Praia Grande - São Paulo - SP - Cep 11702-440</Text>
         </View>
         <View style={ s.pd }>
            <View>
               <Text style={ [ s.p, s.b, ] }>( 13 ) 99768-5853 </Text>
            </View>
            <View>
               <Text style={ [ s.p, s.b, ] }>( 13 ) 99768-5853 </Text>
         </View>
         </View>
         <View>
            <Text style={ [ s.p, s.b, ] }>eletrica.art.ltda@gmail.com</Text>
         </View>
      </View>
   </> );
}