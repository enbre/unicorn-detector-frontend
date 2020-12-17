// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// expo imports
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { LinearGradient } from 'expo-linear-gradient'

// file imports
import logo from '../../assets/logo.png'
import UnicornModel from '../../src/models/unicorn'
import SightingModel from '../../src/models/sighting'
import { API_KEY } from '../../utils/weatherKey'

export default function Home({ navigation, route }) {
   // state:
   const [errorMsg, setErrorMsg] = useState(null)
   const [lat, setLat] = useState(null)
   const [lon, setLon] = useState(null)
   const [temp, setTemp] = useState(null)
   const [unicornId, setUnicornId] = useState(null)
   const [unicorn, setUnicorn] = useState(null)
   const [sightings, setSightings] = useState(null)

   // get location coordinates
   const getLocation = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION)
      if (status !== 'granted') {
         console.log('location permission not granted')
         setErrorMsg("Permission not granted")
      }
      // use device's location and store lat and long to state of 'location'
      const userLocation = await Location.getCurrentPositionAsync()
      setLat(userLocation.coords.latitude)
      setLon(userLocation.coords.longitude)
   }
   
   // get weather data
   const getWeather = async () => {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`)
      const json = await res.json()
      setTemp(Math.round(json.main.temp))
   }

   // get weather data and populate unicorn array
   useEffect(() => {
      if (lat && lon) {
         getWeather();
      }
   }, [lat, lon])

   // conditional function to set unicornId based on temp state 
   const pickUnicornId = () => {
      if (temp === 54) { 
         setUnicornId(49)
      }
      else if (temp === 56) {
         setUnicornId(50)
      }
      else if (temp === 58) {
         setUnicornId(51)
      }
      else if (temp === 60) {
         setUnicornId(52)
      }
      else if (temp === 62) {
         setUnicornId(53)
      }
      else if (temp === 64) {
         setUnicornId(54)
      }
      else if (temp === 66) {
         setUnicornId(55)
      }
      else if (temp === 68) {
         setUnicornId(56)
      }
      else if (temp === 70) {
         setUnicornId(57)
      }
      else if (temp === 72) {
         setUnicornId(58)
      }
      else if (temp === 74) {
         setUnicornId(59)
      }
      else if (temp === 76) {
         setUnicornId(60)
      }
      else if (temp === 78) {
         setUnicornId(61)
      }
      else if (temp === 81) {
         setUnicornId(62)
      }
      else if (temp === 85) {
         setUnicornId(63)
      }
      else {
         setUnicornId(64)
      }
   }

   useEffect(() => {
      if (temp) {
         pickUnicornId()
      }
   }, [temp])

   //find one unicorn from DB
   const findUnicorn = async (unicornId) => {
      const res = await UnicornModel.show(unicornId)
      setUnicorn(res.unicorn)
   }

   useEffect(() => {
      if (unicornId) {
         findUnicorn(unicornId)
      }
   }, [unicornId])

   // redirect to unicorn screen
   const goToUnicornScreen = async () => {
      await navigation.navigate('Unicorn', unicorn)
   }

   // redirect invoked once unicorn is returned from DB and state is set
   useEffect(() => {
      if (unicorn) {
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
         <Text style={styles.instructions}>
            Press the logo to search for Unicorns!
         </Text>
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
   logo: {
      width: 275,
      height: 275,
      marginBottom: 10
   },
   title: {
      color: 'rgba(129, 90, 159, 1)',
      fontSize: 35,
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
   }
});
