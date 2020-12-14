// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
//expo module imports
import { LinearGradient } from 'expo-linear-gradient'
// import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import * as Font from 'expo-font'
// import { loadAsync } from 'expo-font';
// import { useFonts, Lakki Reddy, Comic Nue } from @expo-google-fonts/inter
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
  const [count, setCount] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [weather, setWeather] = useState(null)
  const [temp, setTemp] = useState(null)
  const [wind, setWind] = useState(null)
  const [unicornId, setUnicornId] = useState(null)
  const [unicorn, setUnicorn] = useState(null)
  const [sighting, setSighting] = useState(null)
  // const [fontsLoaded, setFontsLoaded] = useState(false)

  // const [loaded] = Font.useFonts ({
  //   Chicle: require ('./assets/fonts/Chicle-Regular.ttf'),
  //   ComicNeue: require('./assets/fonts/ComicNeue-Regular.ttf')
  // })

  // if (!loaded){
  //   return null
  // }
  // const fonts = {
  //   Chicle: require ('./assets/fonts/Chicle-Regular.ttf'),
  //   ComicNeue: require('./assets/fonts/ComicNeue-Regular.ttf')
  // }

  // async function _loadFontsAsync (){
  // // const loadFontsAsync = async()=>{
  //   await Font.loadAsync(fonts)
  //   setFontsLoaded(true)
  // }

  const testFunction = ()=>{
    console.log('testing!')
    setCount( count+1)
    console.log('count:', count)
  }

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
    console.log('lat state:', lat)
  }

  // useEffect(() => {
  //   // console.log("latitude state:", lat)
  //   // console.log("longitude state:", lon)
  //   // console.log("-----------")
  //   fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`)
  //     .then(res => res.json())
  //     .then(json => {
  //       setWeather(json)
  //     });
  //   if (weather) {
  //     // redundant api request to address asynchronous attempts to set state
  //     fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`)
  //       .then(res => res.json())
  //       .then(json => {
  //         // console.log('all weather data:', json);
  //         setTemp(Math.round(json.main.temp))
  //         setWind(Math.round(json.wind.speed))
  //       });
  //   }
  //   // console.log('wind state:', wind);
  //   // console.log('temp state:', temp);
  //   // console.log("-----------")
  // }, [lat, lon])

  // // alternate get weather function
  // useEffect(() => {
  //   const getWeather = async () =>{
  //     try{
  //       let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`)
  //       let json = await response.json()
  //       .then(json => {
  //         console.log('all weather data:', json);
  //         setTemp(json.main.temp)
  //         setWind(json.wind.speed)
  //       });
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   console.log('wind state:', wind);
  //   console.log('temp state:', temp);
  //   console.log("-----------")
  // }, [lat, lon])

  // useEffect(() => {
  //   console.log('wind state:', wind);
  //   console.log('temp state:', temp);
  //   console.log("-----------")
  //   const pickUnicornId = async () => {
  //     if (temp === 53) {
  //       setUnicornId(3)
  //     }
  //     else if (temp === 53) {
  //       setUnicornId(4)
  //     }
  //     else if (temp === 57) {
  //       setUnicornId(5)
  //     }
  //     else if (temp === 59) {
  //       setUnicornId(6)
  //     }
  //     else if (temp === 61) {
  //       setUnicornId(7)
  //     }
  //     else if (temp === 63) {
  //       setUnicornId(8)
  //     }
  //     else if (temp === 65) {
  //       setUnicornId(9)
  //     }
  //     else if (temp === 67) {
  //       setUnicornId(10)
  //     }
  //     else if (temp === 69) {
  //       setUnicornId(11)
  //     }
  //     else if (temp === 71) {
  //       setUnicornId(12)
  //     }
  //     else if (temp === 73) {
  //       setUnicornId(13)
  //     }
  //     else if (temp === 75) {
  //       setUnicornId(14)
  //     }
  //     else if (temp === 77) {
  //       setUnicornId(15)
  //     }
  //     else if (temp === 79) {
  //       setUnicornId(16)
  //     }
  //     else if (temp === 81) {
  //       setUnicornId(17)
  //     }
  //     else {
  //       setUnicornId(2)
  //     }
  //   }
  // }, [temp])


  // find one unicorn. currently hard-coded id#
  const findUnicorn = async () => {
    const res = await UnicornModel.show(unicornId)
    console.log(res.unicorn)
    setUnicorn(res.unicorn)
  }

  // find all sightings
  const findAllSightings = async () => {
    const res = await SightingModel.all()
    console.log(res.sightings)
    setSighting(res.sightings)
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
        <Stack.Screen name="Home" component={Home} initialParams={{count, testFunction}}/>
        {/* <Stack.Screen name="Home" component={Home} params={{count, testFunction}}/> */}
        <Stack.Screen name="Unicorn" component={Unicorn} />
        <Stack.Screen name="Sightings" component={Sightings} />
      </Stack.Navigator> 
    </NavigationContainer>
  
  






    // <View style={styles.container}>
    //   <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
    //   <Text style={styles.title}>
    //     Unicorn Detector
    //     </Text>
    //   <TouchableOpacity

    //     onPress={getLocation}
    //   >
    //     <Image
    //       // source={{uri:'https://static.wikia.nocookie.net/mlp/images/d/d2/UUM2_ID_S9E26.png/revision/latest?cb=20191013154637' }}
    //       source={logo}
    //       style={styles.logo}
    //     />
    //   </TouchableOpacity>
    //   <Text style={styles.instructions}>Short press the logo to search for unicorns!</Text>
    //   <TouchableOpacity
    //     style={styles.button}
    //   >
    //     <Text style={styles.buttonText}>Let's do something</Text>
    //   </TouchableOpacity>
    //   {/* <StatusBar style="auto" /> */}
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(229,184,244)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 275,
//     height: 275,
//     marginBottom: 10
//   },
//   title: {
//     color: 'rgba(129, 90, 159, 1)',
//     fontSize: 35,
//     // fontFamily: 'Chicle',
//     marginHorizontal: 15,
//     marginBottom: 75,
//     marginTop: -50
//   },
//   button: {
//     marginTop: 50,
//     backgroundColor: "white",
//     padding: 15,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: "rgba(129, 90, 159, 1)",
//   },
//   instructions: {
//     marginTop: 50,
//     color: 'rgba(129, 90, 159, 1)',
//     fontSize: 18,
//     // fontFamily: "ComicNeue"
//   },
//   buttonText: {
//     color: 'rgba(129, 90, 159, 1)',
//     fontSize: 18,
//     // fontFamily: "ComicNeue"
//   },
//   backgroundGradient: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     height: 800
//   },
//   thumbnail: {
//     width: 300,
//     height: 300,
//     resizeMode: "contain"
//   }

// });
