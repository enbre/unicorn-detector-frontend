// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//expo module imports
import { LinearGradient } from 'expo-linear-gradient'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import * as Font from 'expo-font'
// file imports
import Home from './src/components/Home'
import Unicorn from './src/components/Unicorn'
import Sightings from './src/components/Sightings'
import UnicornModel from './src/models/unicorn'
import SightingModel from './src/models/sighting'
import { API_KEY } from './utils/weatherKey'
// import logo from './assets/logo.png'


const Stack = createStackNavigator()

export default function App() {
  // state:
  const [errorMsg, setErrorMsg] = useState(null)
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [temp, setTemp] = useState(null)
  const [wind, setWind] = useState(null)
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
      setUnicornId(2)
    }
  }

  useEffect(() => {
    // if (wind && temp){
    if (temp){
      pickUnicornId()
    }
    console.log('unicornId:', unicornId)
  // }, [wind, temp])
  }, [ temp])


  //find one unicorn. currently hard-coded id to 15
  const findUnicorn = async (unicornId) => {
    const res = await UnicornModel.show(unicornId)
    console.log("in findUnicorn",res.unicorn)
    setUnicorn(res.unicorn)
  }

  useEffect(() => {
    if (unicornId){
      findUnicorn()
    }
  }, [unicornId])

  // // find all sightings
  const findAllSightings = async () => {
    const res = await SightingModel.all()
    console.log(res.sightings)
    setSightings(res.sightings)
  }

  // create new sighting. unicorn id & image not working since unicorn state hasn't been established
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

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home">
          {props => <Home 
            {...props} 
            getLocation={getLocation} 
          />}
        </Stack.Screen>
        <Stack.Screen name="Unicorn">
          {props => <Unicorn 
            {...props} 
            unicorn={unicorn}
            createSighting={createSighting}

          />}
        </Stack.Screen> 
        <Stack.Screen name="Sightings">
          {props => <Sightings 
            {...props} 
            sightings={sightings}  
            />}
        </Stack.Screen> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
