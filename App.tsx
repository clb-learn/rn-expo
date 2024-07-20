

import "react-native-gesture-handler";
import {
   View,
   Text,
} from "react-native";
import { Icon } from "./assets/modules/clb-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";

// import UserPic 

import Routes from "./app/pages";

const 
   Drawer = createDrawerNavigator()
;

export default function App() {

   return( <>
      <NavigationContainer>
         <Drawer.Navigator 
            drawerContent={
               props => {
                  return( <SafeAreaView>
                     <View></View>
                     <DrawerItemList { ...props }/>
                  </SafeAreaView> );
               }
            }
            screenOptions={ {
               drawerStyle: {
                  backgroundColor: "#212329",
                  width: 250,
               },
               headerStyle: {
                  backgroundColor: "#16181C",
               },
               headerTintColor: "#fc0fc0",
               headerTitleStyle: {
                  fontWeight: "bold",
               },               
               drawerActiveTintColor: "#fc0",
               drawerLabelStyle: {
                  color: "#FFF",
               },
            } }
         >
            <Drawer.Screen 
               name="Home"
               options={ {
                  drawerLabel: "Home",
                  title: "Home",
                  drawerIcon: () => <Icon i="mc" name="home" color="#fff"/>
               } }
               component={ Routes.Home }
            />
         </Drawer.Navigator>
      </NavigationContainer>
   </> );
}