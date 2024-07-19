


import React from "react";
import { Stack } from "expo-router";
import {
   View,
   Text,
   Image,
} from "react-native";

import {
   AppBar,
   AppBarLeft,
   AppBarRight,
   BottomNavigationBar,
   PageFooter,
   
} from "../assets/modules/clb-modules";


export default function RootLayout() {
   return( <>
      <Stack 
         screenOptions={
            {
               headerBackground: () => ( <>
                  <AppBar />
               </> )
               ,
               headerLeft: () => (
                  <>
                     <AppBarLeft />
                  </>
               )
               ,
               headerRight: () => ( <>
                  <AppBarRight />
               </> )
               ,
               headerTitleAlign: "center"
               ,
               headerTintColor: "#e5e5e5"
               ,
               headerTitleStyle: {
                  fontFamily: "GodOfThunder",
                  fontWeight: "bold",
                  color: "#fff",
               }
               ,
               headerStyle: {
               backgroundColor: "#00559C" 
               }
               ,
               statusBarColor: "#00559C"
               ,
               title: "Eletrica & Art"
            }
         }
      >
         {/* <Stack.Screen
            options={{
               headerTitle: props => <LogoTitle {...props} />,
               headerRight: () => (
                  <Button onPress={() => setCount(c => c + 1)} title="Update count" />
               ),
            }}
         /> */}
         <Stack.Screen
            name="index"
            options={{
               // headerTitle: "Eletrica & Art",
               headerTitle: () => ( <>
                  <Image source={ require( "../assets/images/EA/EA-logo-appbar-2.png" ) }
                     style={ {
                        resizeMode: "contain",
                        width: 140,
                        height: 56,
                        alignSelf: "center",
                        
                     } }
                  />
               </> ),
               headerRight: () => (
                  <Text style={ { color: "#fff", } }>🔲</Text>
                  // <Button onPress={() => setCount(c => c + 1)} title="Update count" />
               ),
            }}
         />
         {/* <PageFooter /> */}
         {/* <BottomNavigationBar /> */}
      </Stack>
   </> );
}
