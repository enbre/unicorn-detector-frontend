// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// expo imports
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font'





export default function Unicorn({ navigation, route, unicorn, createSighting}) {


   return (
      <View style={styles.container}>
         <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
         <Text style={styles.title}>
            {/* Unicorn Screen */}
            {unicorn.name}
         </Text>

            <Image
               source={{uri: unicorn.image}}
               // source={{uri:'https://static.wikia.nocookie.net/mlp/images/d/d2/UUM2_ID_S9E26.png/revision/latest?cb=20191013154637' }}
               style={styles.image}
            />

         <Text style={styles.description}>

            {/* {unicorn.description} */}
         </Text>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
         >
            <Text style={styles.buttonText}>Search again!</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Sightings')}
         >
            <Text style={styles.buttonText}>See recent sightings!</Text>
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
      marginTop: -50
   },
   imageBox: {
      // resizeMode: "contain",
      // marginTop: 10,
      // width: 300,
      // height: 300,
      // backgroundColor: "white",
      // padding: 15,
      borderRadius: 30,
      borderWidth: 4,
      borderColor: "rgba(129, 90, 159, 1)",
      marginBottom:15,

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
      marginBottom:15,

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
