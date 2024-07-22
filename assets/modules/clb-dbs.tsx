

// https://react-native-async-storage.github.io/async-storage/docs/install/
// npx expo install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

/* Storing string value
 */
export async function StoreData( value: string, dbs_name: string ) {
   try {
      await AsyncStorage.setItem( dbs_name, value );
   } catch( err ) {
     // saving error
   }
}


 /* Storing object value
  */
export async function StoreObjData( dbs_name: string, value: string ) {
   try {
      const jsonValue = JSON.stringify( value );
      await AsyncStorage.setItem( dbs_name, jsonValue );
   } catch( err ) {
     // saving error
   }
};


 /* Reading string value
  */
 export async function GetData( dbs_name: string ) {
   try {
      const value = await AsyncStorage.getItem( dbs_name );
      if( value !== null ) {
         // value previously stored
      }
   } catch( err ) {
   // error reading value
   }
};


 /* Reading object value
  */
export async function GetObjData( dbs_name: string ) {
   try {
      const jsonValue = await AsyncStorage.getItem( dbs_name );
      return jsonValue != null ? JSON.parse( jsonValue ) : null;
   } catch( err ) {
   // error reading value
   }
};


