// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// expo imports
import { LinearGradient } from 'expo-linear-gradient'
// file imports
// import UnicornModel from '../../src/models/unicorn'
import SightingModel from '../../src/models/sighting'





export default function Unicorn({ navigation, route }) {
   const [unicorn, setUnicorn] = useState(route.params)
   const [sightings, setSightings] = useState(null)

   // create new sighting
   const createSighting = async (unicorn) => {
      const newSighting = {
         unicornId: route.params.id,
         unicornImg: route.params.image,
         unicornName: route.params.name,
      }
      console.log('new sighting',newSighting)
      await SightingModel.create(newSighting)
      await navigation.navigate('Sightings', sightings)

   }



   return (
      <View style={styles.container}>
         <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
         <Image
            source={{ uri: unicorn.image }}
            style={styles.image}
         />
         <View style={styles.descriptionContainer}>
            <Text style={styles.title}>
               {unicorn.name} was seen nearby!
            </Text>
            <Text style={styles.description}>
            He loves to eat eggplant and go squaredancing. He is quite shy, but you might find him hiding in the shadows of a tall tree.
            {/* {unicorn.description} */}
            </Text>
         </View>
         <TouchableOpacity
            style={styles.button}
            onPress={createSighting}
         >
            <Text style={styles.buttonText}>Record your sighting!</Text>
         </TouchableOpacity>
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
   descriptionContainer: {
      // flex: 1,
      width: 325,
      alignItems: 'center',
      justifyContent: 'center',
   },
   title: {
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 24,
      // fontFamily: 'Chicle',
      marginHorizontal: 15,
      marginBottom: 25,
      marginTop: 0
   },
   description: {
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 20,
      // fontFamily: 'Chicle',
      marginHorizontal: 15,
      marginBottom: 25,
      marginTop: 0
   },
   image: {
      // resizeMode: "contain",
      // marginTop: 10,
      width: 300,
      height: 300,
      backgroundColor: "white",
      padding: 15,
      borderRadius: 30,
      borderWidth: 4,
      borderColor: "rgba(129, 90, 159, 1)",
      marginBottom: 15,

   },
   button: {
      marginTop: 20,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 30,
      borderWidth: 2,
      borderColor: "rgba(129, 90, 159, 1)",
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


});
