import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from './Screens/HomeScreen'
import ISSLocationScreen from './Screens/ISSLocationScreen'
import MeteorScreen from './Screens/MeteorScreen'
import UpdatesScreen from './Screens/UpdatesScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator initialRootName='Home' screenOptions={{
       headerShown:false
     }}>
       <Stack.Screen name='Home' component={HomeScreen}/>
       <Stack.Screen name='ISSLocation' component={ISSLocationScreen}/>
       <Stack.Screen name='Meteors' component={MeteorScreen}/>
       <Stack.Screen name='Updates' component={UpdatesScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}


