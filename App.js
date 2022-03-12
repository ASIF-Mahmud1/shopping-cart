import React,{useEffect} from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Home from './src/container/Home';
import Checkout from './src/container/Checkout'
import SingleCategory from './src/component/home/SingleCategory';
import MyBills from './src/container/MyBills';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import Welcome from './src/container/Welcome'
import Login from './src/component/welcome/Login';
import Verify from './src/component/welcome/Verify';

import Icon from 'react-native-vector-icons/MaterialIcons';


import { NavigationContainer } from '@react-navigation/native';
console.disableYellowBox = true;


const Stack = createNativeStackNavigator();
export default function Authorised(){

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const LeftButton = ({navigation}) => {
    return  <Icon name="format-align-left" style={{ color: 'black',paddingTop:10 }} size={25} />
  }

    return(
      <NavigationContainer>
              <Stack.Navigator screenOptions={{  title:""}} >  
              <Stack.Screen name='Welcome' component={Welcome}  options={{headerShown:false}} />
              <Stack.Screen name='Login' component={Login}   />
              <Stack.Screen name='Verify' component={Verify} />
              <Stack.Screen name='Home' component={Home} options={() => (  {headerLeft:() =>  <LeftButton/>}  )   }  />
              <Stack.Screen name='Checkout' component={Checkout} /> 
              <Stack.Screen name='SingleCategory' component={SingleCategory} /> 
              <Stack.Screen name='MyBills' component={MyBills}  options={() => ({headerRight: null})} /> 
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
  rightBtn:{
    borderColor:'pink',
    fontWeight:'bold', 
    borderRadius:10,
    padding:5, 
    borderWidth:2
  },
  rightBtnText:{
    color: 'black', fontWeight:'600'
  }
});