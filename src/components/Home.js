// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// expo imports
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font'

// file imports
import logo from '../../assets/logo.png'



export default function Home({ navigation, route, getLocation, unicorn }) {
  
   // // redirect to Unicorn screen
   const goToUnicornScreen = async () => {
      console.log('in goToUnicornScreen', unicorn)

      await navigation.navigate('Unicorn')
   }

   useEffect(() => {
      if (unicorn){
         goToUnicornScreen()
      }
   }, [unicorn])

   return (
      <View style={styles.container}>
         <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
         <Text style={styles.title}>
            Unicorn Detector
         </Text>
         <TouchableOpacity
            onPress={getLocation}
         >
            <Image
               source={logo}
               style={styles.logo}
            />
         </TouchableOpacity>
         {/* <Text style={styles.instructions}>Press the logo to search for unicorns!</Text>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Unicorn')}
         >
            <Text style={styles.buttonText}>link to unicorn screen</Text>
         </TouchableOpacity> */}
         <TouchableOpacity
            style={styles.button}
            // onPress={setTimeout(() => {()=>navigation.navigate('Sightings')},10000)}
            onPress={() => navigation.navigate('Sightings')}
         >
            <Text style={styles.buttonText}>See recent sightings!</Text>
         </TouchableOpacity>
         {/* <StatusBar style="auto" /> */}
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
   logo: {
      width: 275,
      height: 275,
      marginBottom: 10
   },
   title: {
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 35,
      // fontFamily: 'Chicle',
      marginHorizontal: 15,
      marginBottom: 30,
      marginTop: -50
   },
   button: {
      marginTop: 30,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "rgba(129, 90, 159, 1)",
   },
   instructions: {
      marginTop: 20,
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
