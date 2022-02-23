import React,{useState} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, TextInput} from 'react-native';
import GradientButton from '../../helper/component/GradientButton';

export default function Login({navigation}) {
  const [input, setInput]= useState('')
  
  const handleNavigation=()=>{
    navigation.navigate('Verify')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login </Text>

      <Text style ={styles.label}>Phone </Text>

      <TextInput style={styles.input} keyboardType='numeric' placeholder='Phone' value={input} onChange={(value)=>{setInput(value)}} />
      <GradientButton>
          <TouchableOpacity  onPress={handleNavigation} style={styles.checkOut} >
              <Text style={styles.text}> Login  </Text>
          </TouchableOpacity>
      </GradientButton>
     
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    
    backgroundColor:'white',
    paddingLeft:20
  },
  login:{
    fontSize:30,
    marginBottom:20
  
  },
  input:{
    marginBottom:20
  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  
  },
  text :
  {
    color:'white',
   fontSize:20,
   fontWeight:'bold',
   fontStyle:"italic"
  },
  label:{
    paddingTop:10,
    paddingLeft:4,
    fontSize:12,
    fontWeight:"300"
  }
});