import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Home from './src/container/Home';
import Checkout from './src/container/Checkout'
import SingleCategory from './src/component/home/SingleCategory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
console.disableYellowBox = true;


const Stack = createNativeStackNavigator();
export default function Authorised(){
    return(
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='Home' component={Home}/>
              <Stack.Screen name='Checkout' component={Checkout} /> 
              <Stack.Screen name='SingleCategory' component={SingleCategory} /> 
          </Stack.Navigator>
        </NavigationContainer>
    )
}

//  options={{headerShown:false}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});