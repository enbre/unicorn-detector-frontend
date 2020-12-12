// react imports
import React , {useState, useEffect} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import Geocoder from 'react-native-geocoder'
//expo module imports
import {LinearGradient} from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
// import * as Font from 'expo-font'
// import { useFonts, Lakki Reddy, Comic Nue } from @expo-google-fonts/inter
// file imports
import UnicornModel from './src/models/unicorn'
import SightingModel from './src/models/sighting'
import logo from './assets/logo.png'



export default function App() {
  // state:
  const [errorMsg, setErrorMsg] = useState(null)
  const [location, setLocation] = useState({})
  const [unicorn,setUnicorn] = useState(null)
  const [sighting, setSighting]= useState(null)


  // get location coordinates
  const getLocation = async () =>{
    const {status} = await Permissions.askAsync(Permissions.LOCATION)
    
    if (status !== 'granted'){
      console.log('location permission not granted')
      setErrorMsg("Permission not granted")
    }
    const userLocation = await Location.getCurrentPositionAsync()
    console.log(userLocation)
    setLocation(userLocation)
  }

  // convert location coordinates to zipcode
  const coordToZip = ()=>{
    Geocoder.geocodePosition().then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err))
  }



  // find one unicorn. currently hard-coded id#
  const findUnicorn = async () => {
    const res = await UnicornModel.show()
    console.log(res.unicorn)
    setUnicorn(res.unicorn)
  }
  // find all sightings
  const findAllSightings = async () =>{
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
    <View style={styles.container}>
      <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
        <Text style={styles.title}>
          Unicorn Detector
        </Text>
        <TouchableOpacity
          onPress={ getLocation }
          >
          <Image 
            // source={{uri:'https://static.wikia.nocookie.net/mlp/images/d/d2/UUM2_ID_S9E26.png/revision/latest?cb=20191013154637' }}
            source={logo} 
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.instructions}>Short the logo for unicorns!</Text>
        <TouchableOpacity
          // onPress={ findUnicorn }
          // onPress={ findAllSightings }
          onPress={() => alert ('No unicorns yet!')}
          style={styles.button}
        >
        <Text style={styles.buttonText}>Let's pick a photo!</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
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
    marginBottom: 75,
    marginTop: -50
  },
  button:{
    marginTop: 50,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "rgba(129, 90, 159, 1)",
  },
  instructions: {
    marginTop:50,
    color: 'rgba(129, 90, 159, 1)',
    fontSize: 18
  },
  buttonText: {
    color: 'rgba(129, 90, 159, 1)',
    fontSize: 18
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
