// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// expo imports
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font'
// file imports
import SightingModel from '../../src/models/sighting'


const SingleSighting = () => {

   return (
      <View>
         <Image></Image>
      </View>
   )
}

export default function Sightings({ navigation, route }) {
   const [sightings, setSightings] = useState(null)

   // // find all sightings from DB
   const findAllSightings = async () => {
      const res = await SightingModel.all()
      console.log(res.sightings)
      setSightings(res.sightings)
   }

   return (
      <View style={styles.container}>
         <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
         {/* <Text style={styles.title}>
            Sightings screen
         </Text> */}
         <View style={styles.list}>

         </View>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
         >
            <Text style={styles.buttonText}>Search again!</Text>
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
      width: 320,
      height: 550,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 30,
      borderWidth: 4,
      borderColor: "rgba(129, 90, 159, 1)",
      marginBottom: 15
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
