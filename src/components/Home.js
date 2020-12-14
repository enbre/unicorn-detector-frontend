// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// expo imports
import { LinearGradient } from 'expo-linear-gradient'
import * as Font from 'expo-font'

// file imports
import logo from '../../assets/logo.png'



export default function Home({navigation}){


   return (
      <View style={styles.container}>
        <LinearGradient colors={['transparent', 'white']} style={styles.backgroundGradient} />
        <Text style={styles.title}>
          Unicorn Detector
          </Text>
        <TouchableOpacity
  
         //  onPress={getLocation}
        >
          <Image
            // source={{uri:'https://static.wikia.nocookie.net/mlp/images/d/d2/UUM2_ID_S9E26.png/revision/latest?cb=20191013154637' }}
            source={logo}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.instructions}>Short press the logo to search for unicorns!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate ('Unicorn')}
        >
          <Text style={styles.buttonText}>link to unicorn screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> navigation.navigate ('Sightings')}
        >
          <Text style={styles.buttonText}>Link to sightings screen</Text>
        </TouchableOpacity>
        {/* <StatusBar style="auto" /> */}
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
    marginBottom: 75,
    marginTop: -50
  },
  button: {
    marginTop: 50,
    backgroundColor: "white",
    padding: 15,
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
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }

});
