// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// expo imports
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font'


const SingleSighting = ()=>{

   return(
      <View>
         <Image></Image>
      </View>
   )
}

export default function Sightings({navigation, route}) {
   return (
      <View style={styles.container}>
         <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
         <Text style={styles.title}>
            Sightings screen
         </Text>
         <View style={styles.list}>

         </View>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
         >
            <Text style={styles.buttonText}>link to home screen</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Unicorn')}
         >
            <Text style={styles.buttonText}>Link to unicorn screen</Text>
         </TouchableOpacity>
      </View>
   );
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'rgb(229,184,244)',
      alignItems: 'center',
      justifyContent: 'center',
   },
 
   title: {
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 35,
      // fontFamily: 'Chicle',
      marginHorizontal: 15,
      marginBottom: 15,
      // marginTop: -10
   },
   list: {
      width: 300,
      height: 450,
      backgroundColor: "white",
      padding: 15,
      borderRadius: 30,
      borderWidth: 4,
      borderColor: "rgba(129, 90, 159, 1)",
      marginBottom: 15
   },

   button: {
      marginTop: 10,
      backgroundColor: "white",
      padding: 15,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "rgba(129, 90, 159, 1)",
   },
   instructions: {
      marginTop: 50,
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 18,
      // fontFamily: "ComicNeue"
   },
   buttonText: {
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 18,
      // fontFamily: "ComicNeue"
   },
   backgroundGradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 800
   },
   thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain"
   }

});
