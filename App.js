// react imports
import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// file imports
import Home from './src/components/Home'
import Unicorn from './src/components/Unicorn'
import Sightings from './src/components/Sightings'

const Stack = createStackNavigator()

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Unicorn" component={Unicorn}/>
        <Stack.Screen name="Sightings" component={Sightings}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
