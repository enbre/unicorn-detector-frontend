// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
// expo imports
import { LinearGradient } from 'expo-linear-gradient'
// file imports
import SightingModel from '../../src/models/sighting'


const SingleSighting = (props) => {

   return (

      <View style={styles.sightingContainer}>
         <Image
            style={styles.image}
            source={{ uri: props.image }}
         />
         <View style={styles.sightingTextContainer}>
            <Text style={styles.sightingName}>
               {props.name}
            </Text>
            <Text style={styles.sightingDate}>
               was seen on {props.date}
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
      console.log('in find all sightings, line 39', res.sightings)
      setSightings(res.sightings)
   }

   useEffect(()=>{
      findAllSightings()
      console.log('sightings useEffect, line 45:',sightings)
   },[])

   console.log('sightings in component, line 47:',sightings)
   return (
      <View style={styles.container}>
         <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
         <View style={styles.list}>
            <ScrollView style={styles.listContainer}>
               {!sightings ? <Text>""</Text>: sightings.map(sighting=>{
                  return(
                     <SingleSighting
                        key={sighting.id}
                        image={sighting.unicornImg}
                        name={sighting.unicornName}
                        date={sighting.createdAt.substr(5,5)+"-"+sighting.createdAt.substr(0,2)}
                     />
                  )
               })}
            </ScrollView>
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
      marginTop: 15,
      justifyContent: 'center',
      alignItems:"center"
   },
   listContainer: {
      width: 300,
      height: 60,
      backgroundColor: "white",
      padding: 10,
      borderRadius: 30,
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
   },
   backgroundGradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 800
   },
});
