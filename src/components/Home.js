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
   // const [wind, setWind] = useState(null)
   const [unicornId, setUnicornId] = useState(null)
   const [unicorn, setUnicorn] = useState(null)
   const [allUnicorns, setAllUnicorns]=useState([])
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
      console.log("latitude state:", lat)
      console.log("longitude state:", lon)
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`)
      const json = await res.json()
      setTemp(Math.round(json.main.temp))
      // setWind(Math.round(json.wind.speed))
   }
    // // find all unicorns from DB
    const findAllUnicorns = async () => {
      const res = await UnicornModel.all()
      console.log('in find all unicorns',res.unicorns)
      setUnicorns(res.unicorns)
   }
   // get weather data and populate unicorn array
   useEffect(() => {
      if (lat && lon) {
         getWeather();
         findAllUnicorns()
      }
      console.log('temp state:', temp)
      console.log(unicorns)
   }, [lat, lon])

   // // conditional function to pick unicorn based on temp state 
   // const pickUnicorn = () => {
      
   //    if (temp === 54) { 
   //       setUnicornId(3)
   //    }
   //    else if (temp === 56) {
   //       setUnicornId(22)
   //    }
   //    else if (temp === 57) {
   //       setUnicornId(19)
   //    }
   //    else if (temp === 58) {
   //       setUnicornId(20)
   //    }
   //    else if (temp === 59) {
   //       setUnicornId(27)
   //    }
   //    else if (temp === 63) {
   //       setUnicornId(8)
   //    }
   //    else if (temp === 65) {
   //       setUnicornId(9)
   //    }
   //    else if (temp === 67) {
   //       setUnicornId(10)
   //    }
   //    else if (temp === 69) {
   //       setUnicornId(11)
   //    }
   //    else if (temp === 71) {
   //       setUnicornId(12)
   //    }
   //    else if (temp === 73) {
   //       setUnicornId(13)
   //    }
   //    else if (temp === 75) {
   //       setUnicornId(14)
   //    }
   //    else if (temp === 77) {
   //       setUnicornId(15)
   //    }
   //    else if (temp === 79) {
   //       setUnicornId(16)
   //    }
   //    else if (temp === 81) {
   //       setUnicornId(17)
   //    }
   //    else {
   //       setUnicornId(28)
   //    }
      
   // }
   // // conditional function to set unicornId based on temp state 
   const pickUnicornId = () => {
      
      if (temp === 54) { 
         setUnicornId(3)
      }
      else if (temp === 56) {
         setUnicornId(22)
      }
      else if (temp === 57) {
         setUnicornId(19)
      }
      else if (temp === 58) {
         setUnicornId(20)
      }
      else if (temp === 59) {
         setUnicornId(27)
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
         setUnicornId(28)
      }
      console.log('in pickUnicornId:',unicornId)
   }

   useEffect(() => {
      if (temp) {
         pickUnicornId()
         // pickUnicorn()
      }
      console.log('unicornId:', unicornId)
   }, [temp])

   //find one unicorn from DB
   const findUnicorn = async (unicornId) => {
      const res = await UnicornModel.show(unicornId)
      // console.log("in findUnicorn", res.unicorn)
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
      await navigation.navigate('Unicorn', unicorn, sightings)
   }

   // redirect invoked once unicorn is returned from DB and state is set
   useEffect(() => {
      if (unicorn) {
         goToUnicornScreen()
      }
   }, [unicorn])

   
   // // // find all sightings from DB
   // const findAllSightings = async () => {
   //    const res = await SightingModel.all()
   //    console.log('in find all sightings',res)
   //    console.log('in find all sightings2',res.sightings)
   //    setSightings(res.sightings)
   // }

   // // redirect to sightings screen. also passes sightings as props
   // const goToSightingsScreen = async () => {
   //    if (sightings){
   //       console.log('in goToSightings from home ', sightings[0])
   //       await navigation.navigate('Sightings', sightings)

   //    }
   // }
   
   // // redirect invoked once sightings are returned from DB and state is set
   // useEffect(() => {
   //    if (sightings){
   //       goToSightingsScreen()
   //    }
   // }, [sightings])


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
            // onPress={findAllSightings}
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
