

import React from "react";

import {
   PageFooter,
   BottomNavigationBar,
} from "../assets/modules/clb-modules";

import * as c from "../assets/modules/clb-html";
import * as ea from "../assets/modules/clb-ea";

import { Icon } from "@/assets/modules/clb-icons";

import {
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
} from "react-native";


export default function Customers( { ...props } ) {


   return( <>
      <c.Section>
         <c.Header>
            <c.H2>Clientes</c.H2>
         </c.Header>
         <c.Section>
            <c.Content>
               <ea.UsersCard></ea.UsersCard>
            </c.Content>
         </c.Section>
      </c.Section>
   </> );
}