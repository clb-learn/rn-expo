

import React, { useState} from "react";

import {
   Header,
   PageFooter,
   BottomNavigationBar,
   Press,
   Drawer,
} from "@/assets/modules/clb-modules";


import * as c from "@/assets/modules/clb-html";

import {
   StatusBar,
   StyleSheet,
   ScrollView,
   View,
   Text,
   Image,
   Modal,
   Pressable,
   Button,
   ActivityIndicator,
   Alert,
} from "react-native";

import {
   Icon,
} from "@/assets/modules/clb-icons";


export default function Dev( { ...props } ) {
   const 
      [ ModalVisibility, setModalVisibility ] = useState( false )
   ;

   {/* modal */}
   return( <>
      <c.Section bg="#245" style={{
         flex: 1,
         // minHeight: 750,
      }}>
         <c.Header>
            <c.Content>
            <c.H2 color="#fff">Modal: RN</c.H2>
            </c.Content>
         </c.Header>
         <c.Content>
            <Pressable 
               onPress={ () => { setModalVisibility( !ModalVisibility ) } }
            >
               <View style={{
                  borderRadius: 24,
                  backgroundColor: "#29f",
                  padding: 16,
               }}>
                  <Text style={{
                     color: "#fff",
                     textAlign: "center",
                     fontWeight: "bold",
                     textTransform: "uppercase",
                  }}>
                     open modal
                     </Text>
               </View>
            </Pressable>


            {/*  == [ Modal ]
            == == == == == == == == ==  */}
            <Modal visible={ ModalVisibility } 
               onRequestClose={ () => { setModalVisibility( false ) } }
               animationType="slide"
               presentationStyle="formSheet"
               style={{
                  backgroundColor: "#212329",
                  width: "80%",
               }}
            >
               <View style={{ backgroundColor: "#f5f5f5", padding: 18, 
                  borderRadius: 24,
               }}>
                  <Text style={{ color: "#27f", }}>Modal Screen</Text>
               </View>
               <View>
                  <c.Content>
                     <Pressable 
                        onPress={ () => { setModalVisibility( !ModalVisibility ) } }
                     >
                        <View style={{
                           borderRadius: 24,
                           backgroundColor: "#29f",
                           padding: 16,
                        }}>
                           <Text style={{
                              color: "#fff",
                              textAlign: "center",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                           }}>
                              close modal
                              </Text>
                        </View>
                     </Pressable>
                  </c.Content>

                  <c.Content style={{ backgroundColor: "#fff5" }}>
                     {/* npx expo install axios */}
                     
                  </c.Content>

               </View>
            </Modal>

         </c.Content>
      </c.Section>
   </> );
}