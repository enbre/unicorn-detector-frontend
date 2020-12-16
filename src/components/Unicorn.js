// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// expo imports
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font'
// file imports
import UnicornModel from '../../src/models/unicorn'





export default function Unicorn({ navigation, route }) {
   const [unicorn, setUnicorn] = useState(route.params)

   // create new sighting
   const createSighting = async (unicorn) => {
      const newSighting = {
         unicornId: unicorn.id,
         unicornImg: unicorn.image,
         location: "Four blocks away!",
         date: "12-11-2020"
      }
      console.log(newSighting)
      await SightingModel.create(newSighting)
      findAllSighting()
   }

   return (
      <View style={styles.container}>
         <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
         <Image
            source={{ uri: unicorn.image }}
            // source={{uri:'https://static.wikia.nocookie.net/mlp/images/d/d2/UUM2_ID_S9E26.png/revision/latest?cb=20191013154637' }}
            style={styles.image}
         />
         <Text style={styles.title}>
            {/* Unicorn Screen */}
            {unicorn.name}
            {/* {unicorn}? {unicorn.name}: Loading... */}
         </Text>


         <Text style={styles.description}>

            {/* {unicorn.description} */}
         </Text>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Sightings')}
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
   title: {
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 35,
      // fontFamily: 'Chicle',
      marginHorizontal: 15,
      marginBottom: 75,
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


});
