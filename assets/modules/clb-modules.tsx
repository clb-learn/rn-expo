

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

import { Icon } from "../modules/clb-icons";

import { BottomNavigation } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";

import Routes from "@/app/pages";
import Homepage from "../../app/homepage";
import Customers from "../../app/customers";
import Index from "@/app";
import Receipts from "@/app/receipts";

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
         <View style={ {
            backgroundColor: "#00559C",
            height: 80,
         } }>
            {/* <Image 
               source={ require( "../images/EA/EA-appbar-logo.png" ) }
               style={ {
                  resizeMode: "contain",
                  width: 100,
               } }
            >
            </Image> */}
         </View>
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
         <Text style={ { color: "#fff", } }>🔲</Text>
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
         <Text style={ { color: "#fff", } }>🔲</Text>
      </View>
   </> );
} 




/* == [ Header ]
== == == == == == == == == */
export function Header( { ...props } ) {
   const 
      child = props.children
   ;

   return( <>
      <View style={ { backgroundColor: "#00338C", 
         paddingTop: 24, paddingBottom: 24, 
         paddingLeft: 16, paddingRight: 16,
      } }>
         <Text style={ { 
            fontSize: 18, color: "#fff",
            fontWeight: "bold",
         } }>
            { props.title }
            { child }
         </Text>
      </View>
   </> );
}




/* == [ EA Card ]
== == == == == == == == == */
export function EACard( { ...props } ) {
   const 
      child = props.children
   ;

   return( <>
      <View style={ { backgroundColor: "#00338C", 
         paddingTop: 24, paddingBottom: 24, 
         paddingLeft: 16, paddingRight: 16,
      } }>
         <Text style={ { 
            fontSize: 18, color: "#fff",
            fontWeight: "bold",
         } }>
            { props.title }
            { child }
         </Text>
      </View>
   </> );
}



/* == [ BottomNavigation ]
== == == == == == == == == */
const 
   HomeRoute = () => (
      <Homepage page={ <Routes.Home /> } />
   )
   ,
   CustomersRoute = () => (
      <Homepage page={ <Routes.Customers /> } />
   )
   ,
   ReceiptsRoute = () => (
      <Homepage page={ <Routes.Receipts /> } />
   )
   ,
   BudgetsRoute = () => (
      <Homepage page={ <Routes.Budgets /> } />
   )
   ,
   DevRoute = () => (
      <Homepage page={ <Routes.Dev /> } />
   )
;

export function BottomNavigationBar() {
   const 
      [ index, setIndex ] = React.useState( 0 )
      ,
      [ routes ] = React.useState( [
         { 
            key: 'home', title: 'Home', 
            focusedIcon: () => ( <Icon i="mc" name="electron-framework" color="#fc0"/> ), 
            unfocusedIcon: () => ( <Icon i="mi" name="electrical-services" color="#27f"/> ),
         },
         { 
            key: 'customers', title: 'Clientes', 
            focusedIcon: () => ( <Icon i="f" name="people-group" color="#27f"/> ),  
            unfocusedIcon: () => ( <Icon i="f" name="people-group" color="#fff"/> ),  
         },
         { 
            key: 'receipts', title: 'Recibos', 
            focusedIcon: () => ( <Icon i="mc" name="receipt" color="#27f"/> ), 
            unfocusedIcon: () => ( <Icon i="mc" name="receipt" color="#fff"/> ), 
         },
         { 
            key: 'budgets', title: 'Orçamentos', 
            focusedIcon: () => ( <Icon i="f" name="file-invoice-dollar" color="#27f"/> ), 
            unfocusedIcon: () => ( <Icon i="f" name="file-invoice-dollar" color="#fff"/> ), 
         },
         { 
            key: 'dev', title: 'Dev', 
            focusedIcon: () => ( <Icon i="mi" name="devices" color="#f55"/> ), 
            unfocusedIcon: () => ( <Icon i="mi" name="devices" color="#ffab00"/> ),
         },
      ] )
   ;

   const renderScene = BottomNavigation.SceneMap( {
      home: HomeRoute,
      customers: CustomersRoute,
      receipts: ReceiptsRoute,
      budgets: BudgetsRoute,
      dev: DevRoute,
   } );

   return( <>
      <BottomNavigation
      theme={{colors: {secondaryContainer: "#212329"}}}
         navigationState={ { index, routes } }
         onIndexChange={ setIndex }
         renderScene={ renderScene }
         /* renderIcon={ 
            () => ( <>
               <Text>icon</Text>
            </> )
         } */
         /* renderTouchable={ () => ( <>
            <View style={{
               backgroundColor: "#212329",
               flex: 1,
               height: 50,
               padding: 8,
               borderColor: "#fc0fc0",
            }} />
         </> ) } */
         /* barStyle={{
            backgroundColor: "#fc0",
         }} */
         // sceneAnimationType={ "shifting" || "opacity" }
         sceneAnimationType={ "opacity" }
         shifting={ true }
         labeled={ true }
         compact={ true }
         activeColor={ "#00559C" }
         inactiveColor={ "#fff" }
         keyboardHidesNavigationBar={ true }
         barStyle={ { backgroundColor: "#16181C", } }
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
         contact: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
         }
      } ) 
   ;

   return( <>
      <View style={ { 
         backgroundColor: "#000", 
         width: "100%",
         // height: 400,   
         alignItems: "center",
         // justifyContent: "center",
         gap: 3,
         paddingBottom: 36,
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
         <View style={ [ s.pd, { gap: 3, } ] }>
            <View style={ s.contact }>
               <Icon i="mc" name="phone" color="#27f"/>
               <Text style={ [ s.p, s.b, ] }>( 13 ) 99768-5853 </Text>
            </View>
            <View style={ s.contact }>
               <Icon i="mc" name="whatsapp" color="#0a0"/>
               <Text style={ [ s.p, s.b, ] }>( 13 ) 99768-5853 </Text>
            </View>
         </View>
         <View style={ s.contact }>
            <Icon i="mc" name="email-seal-outline" color="#f55"/>
            <Text style={ [ s.p, s.b, ] }>rafa.julia.forever@gmail.com</Text>
         </View>
      </View>
   </> );
}