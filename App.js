import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import * as Location from 'expo-location'
// import * as Font from 'expo-font'
// import { useFonts, Lakki Reddy, Comic Nue } from @expo-google-fonts/inter
// import { HOST_WITH_PORT } from './environment'
import UnicornModel from './src/models/unicorn'
import SightingModel from './src/models/sighting'
import logo from './assets/logo.png'

export default function App() {
  // const [location, setLocation] = useState(null)
  const [unicorn,setUnicorn] = useState(null)
  const [sighting, setSighting]= useState(null)

  const findUnicorn = async () => {
    const res = await UnicornModel.show()
    console.log(res.unicorn)
    setUnicorn(res.unicorn)
  }
  
  const findAllSightings = async () =>{
    const res = await SightingModel.all()
    console.log(res.sightings)
    setSighting(res.sightings)
  }

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
          onPress={() => alert ('No unicorns yet!')}
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
          onPress={ createSighting }
          style={styles.button}
        >
        {/* <Button title="help"/> */}
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
