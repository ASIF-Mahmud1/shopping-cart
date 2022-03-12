import React,{useState} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, TextInput} from 'react-native';
import GradientButton from '../../helper/component/GradientButton';
import { showToast } from '../../helper/component/Indcator';

export default function Login({navigation}) {
  const [input, setInput]= useState('')
  
  const handleNavigation=()=>{
    if(input==="")
    {
      showToast("Please Enter OTP")
    }
    else 
    { 
      navigation.navigate('Home')
    }
  
  }
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Verify </Text>

      <Text style ={styles.label}>OTP </Text>

      <TextInput style={styles.input} keyboardType='numeric' placeholder='OTP' value={input} onChange={(value)=>{setInput(value)}} />
      <GradientButton>
          <TouchableOpacity  onPress={handleNavigation} style={styles.checkOut} >
              <Text style={styles.text}> Verify  </Text>
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
  
  },
  label:{
    paddingTop:10,
    paddingLeft:4,
    fontSize:12,
    fontWeight:"300"
  }
});