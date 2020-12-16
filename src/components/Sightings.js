// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// expo imports
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font'
// file imports
import SightingModel from '../../src/models/sighting'


const SingleSighting = () => {

   return (
      <View style={styles.sightingContainer}>
         <Image
            style={styles.image}
            source={{uri:'https://static.wikia.nocookie.net/mlp/images/d/d2/UUM2_ID_S9E26.png/revision/latest?cb=20191013154637' }}
            // source={{ uri: sighting.unicornImg }}
         />
         <View style={styles.sightingTextContainer}>
            <Text style={styles.sightingName}>
               Lemon Zest
               {/* {sighting.unicornName} */}
            </Text>
            <Text style={styles.sightingDate}>
               12/10/2020
               {/* {sighting.date} */}
            </Text>
         </View>
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
         <ScrollView style={styles.list}>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            <SingleSighting/>
            {/* <SingleSighting/> */}
            {/* {sightings.map(sighting=>{
               return(
                  <SingleSighting
                     key={sighting.id}
                     image={sighting.unicornImg}
                     name={sighting.unicornName}
                     date={sighting.date}
                  />
               )
            })} */}
         </ScrollView>
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
   
   sightingContainer: {
      flex: 1,
      flexDirection:'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      margin: 5,
      marginBottom: 10,
      marginLeft: 15
   },
   sightingTextContainer: {
      flex: 1,
      flexDirection:'column',
      marginLeft: 10,
      alignItems: 'flex-start',
      justifyContent: 'center',
   },
   image: {
      width: 60,
      height: 60,
      // resizeMode: "contain",
      borderRadius: 10
   },
   sightingName: {
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 18,
      fontWeight:"bold",
      paddingTop:5
   },
   sightingDate: {
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 15,
      paddingTop: 5
   },
   container: {
      flex: 1,
      backgroundColor: 'rgb(229,184,244)',
      alignItems: 'center',
      justifyContent: 'center',
   },
   list: {
      width: 320,
      height: 600,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 30,
      borderWidth: 4,
      borderColor: "rgba(129, 90, 159, 1)",
      marginTop: 15
   },
   button: {
      marginTop: 30,
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
