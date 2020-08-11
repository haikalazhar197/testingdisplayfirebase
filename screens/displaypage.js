import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert} from 'react-native';
//import app from "./screens/firebase"; 


export default function Display ({navigation}) {

    const backHandler =() => {
        navigation.navigate('Home')
    };

return(
 
    <View style = {StyleSheet.container}>
        <Text>DISPLAY PAGE</Text>
        <Button title="Back Page" onPress={backHandler} />

    </View>
);
};

const style = StyleSheet.create({
    constainer: {
        flex:1,
        backgroundColor: '#fff',
        alignSelf:'center',
    },
})