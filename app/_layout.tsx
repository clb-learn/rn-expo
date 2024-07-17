

import { Stack } from "expo-router";
import {
   View,
   Image,
} from "react-native";

export default function RootLayout() {
   return <Stack 
      screenOptions={
         {
            headerBackground: () => ( <>
               <View 
                  style={ {
                     backgroundColor: "#00559C",
                     elevation: 10,
                     shadowColor: "#000",
                     shadowRadius: 10,
                  } }
               >
                  <Image 
                     source={ require( "../assets/images/react-logo.png" ) }
                  ></Image>
               </View>
            </> ),
         }
      }
   />;
}
