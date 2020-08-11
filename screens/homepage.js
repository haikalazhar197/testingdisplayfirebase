import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import app from "../screens/firebase"; 
import firebase from 'firebase';
import firestore from '@react-native-firebase/firestore';
//import firebase from '@react-native-firebase/app';

export default function Testingfirebase({navigation}) {
  //const [hasPermission, setHasPermission] = useState(null);
  //const [scanned, setScanned] = useState(false);
  const [id, setID] = useState(0);

  /* 
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const pressHandler = () => {
      console.log('NextPage Pressed');
      navigation.navigate('Display');
  };
  */

  //Bila Dah Di Scan, Function ni yang main peranan utk keluarkan apa.
  {/*
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert('FYP SUBMISSION',`10 DAYS REMAINING`,
    [
      {
        text: 'CHILL                              ',
        onPress:() =>pressHandler(),
      },
      {
        text: ' NO CHILL                              ',
        onPress:() =>console.log('OK PRESSED'),
      },
    ],
    { cancelable: false }
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

   */}

   //FIRESTORE TESTING//
   const getUser =() => {
     (async () => {
       const userDocument = await firestore().collection("users").doc('JVYQSGAyLU5bH6oaXHRf').get()
       console.log(userDocument);
     })();
   };


   
      //useEffect(() => {
        const clickHandler =() => {
          setID(id +1);
        firebase.database().ref('users').on('value', (data) => {
          console.log(data.toJSON());
        })

           //(MANUALLY INSERT DATA INTO REALTIME DATABASE FIREBASE)
        setTimeout (() => {
       firebase.database().ref('item/00'+id).set(
       {
         itemname: 'Milo 1KG Nestle',
         BarcodeNumber: 8609351358,
         Rfid_status: false,
         Price: 10,
       }
     ).then(() => {
       console.log('INSERTED !');
     }).catch((error) => {
       console.log(error);
     });
    }, 3000); 
    }

   

       /* (MANUALLY UPDATE DATA FROM REALTIME DATABASE FIREBASE)

       firebase.database().ref('users/004').update ({
         name: "Ismail Izani",
         age: 23,
       }).then(() => {
         console.log('SUCESSFULLY UPDATE CHOOO');
       });

      */

      /* (MANUALLY DELETING DATA FROM REALTIME DATABASE FIREBASE)
      firebase.database().ref('users/003/name').remove();
      

   };
    */

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      {/*}
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      */}

      <Text> Hallo </Text>
      <Button
        title="Press me"
        onPress={() => getUser()}
      /> 
      <Button
        title="Add User"
        onPress={() => clickHandler()}
        />
    </View>
  );
}
