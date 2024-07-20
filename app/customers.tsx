

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
            <c.Content gap={ 16 }>
               <ea.UsersCard 
                  name="Noely Oliveira Gangello"
               />
               <ea.UsersCard 
                  name="Bernardo Sammarco Gangello"
               />
               <ea.UsersCard 
                  name="Débora Maria Cruz Sammarco"
               />
               <ea.UsersCard 
                  name="Anselmo Sammarco Nunes"
               />
               <ea.UsersCard 
                  name="Rafael Ângelo Sammarco"
               />
               <ea.UsersCard 
                  name="Gabriel Sammarco Nunes"
               />
               <ea.UsersCard 
                  name="Beatriz Michelle Sammarco dos Santos Lima"
               />
               <ea.UsersCard 
                  name="Felipe Gabriel Sammarco dos Santos Lima"
               />
               <ea.UsersCard 
                  name="Miguel Eduardo Sammarco dos Santos Lima"
               />
               <ea.UsersCard 
                  name="Leonardo Sammarco dos Santos Lima"
               />
            </c.Content>
         </c.Section>
      </c.Section>
   </> );
}