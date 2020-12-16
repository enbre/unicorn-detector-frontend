// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// expo imports
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font'

// file imports
import logo from '../../assets/logo.png'
import UnicornModel from '../../src/models/unicorn'
import { API_KEY } from '../../utils/weatherKey'

export default function Home({ navigation, route }) {
   // state:
   const [errorMsg, setErrorMsg] = useState(null)
   const [lat, setLat] = useState(null)
   const [lon, setLon] = useState(null)
   const [temp, setTemp] = useState(null)
   const [wind, setWind] = useState(null)
   const [unicornId, setUnicornId] = useState(null)
   const [unicorn, setUnicorn] = useState(null)

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
      console.log("latitude state:", lat)
      console.log("longitude state:", lon)
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`)
      const json = await res.json()
      setTemp(Math.round(json.main.temp))
      // setWind(Math.round(json.wind.speed))
   }

   useEffect(() => {
      if (lat && lon) {
         getWeather();
      }
      // console.log('wind state:', wind)
      console.log('temp state:', temp)
   }, [lat, lon])

   // // conditional function to set unicornId based on temp state 
   const pickUnicornId = () => {
      if (temp === 53) {
         setUnicornId(3)
      }
      else if (temp === 55) {
         setUnicornId(4)
      }
      else if (temp === 57) {
         setUnicornId(5)
      }
      else if (temp === 59) {
         setUnicornId(6)
      }
      else if (temp === 61) {
         setUnicornId(7)
      }
      else if (temp === 63) {
         setUnicornId(8)
      }
      else if (temp === 65) {
         setUnicornId(9)
      }
      else if (temp === 67) {
         setUnicornId(10)
      }
      else if (temp === 69) {
         setUnicornId(11)
      }
      else if (temp === 71) {
         setUnicornId(12)
      }
      else if (temp === 73) {
         setUnicornId(13)
      }
      else if (temp === 75) {
         setUnicornId(14)
      }
      else if (temp === 77) {
         setUnicornId(15)
      }
      else if (temp === 79) {
         setUnicornId(16)
      }
      else if (temp === 81) {
         setUnicornId(17)
      }
      else {
         setUnicornId(17)
      }
   }

   useEffect(() => {
      // if (wind && temp){
      if (temp) {
         pickUnicornId()
      }
      console.log('unicornId:', unicornId)
      // }, [wind, temp])
   }, [temp])

   //find one unicorn from DB
   const findUnicorn = async (unicornId) => {
      const res = await UnicornModel.show(unicornId)
      console.log("in findUnicorn", res.unicorn)
      setUnicorn(res.unicorn)
   }

   useEffect(() => {
      console.log('in findUnicorn useEffect outer')
      if (unicornId) {
         console.log('in findUnicorn useEffect inner')
         findUnicorn(unicornId)
      }
   }, [unicornId])

   // redirect to unicorn screen
   const goToUnicornScreen = async () => {
      console.log('in goToUnicornScreen', unicorn)
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
