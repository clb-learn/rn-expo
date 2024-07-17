

import { Stack } from "expo-router";
import {
   View,
   Image,
} from "react-native";

import {
   AppBar,
} from "../assets/modules/clb-modules";

export default function RootLayout() {
   return <Stack 
      screenOptions={
         {
            headerBackground: () => ( <>
               <AppBar />
            </> ),
         }
      }
   />;
}
