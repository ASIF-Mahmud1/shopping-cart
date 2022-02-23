import React,{useState} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, TextInput} from 'react-native';

export default function Login({navigation}) {
  const [input, setInput]= useState('')
  
  const handleNavigation=()=>{
    navigation.navigate('Verify')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login </Text>
      <TextInput keyboardType='numeric' placeholder='Phone' value={input} onChange={(value)=>{setInput(value)}} />
  
      <TouchableOpacity  onPress={handleNavigation} style={styles.checkOut} >
         <Text style={styles.text}> Login  </Text>
         </TouchableOpacity>
        
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
  
  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#301934',
    width: 300,
    marginTop:50,
    color:'red',
    borderRadius:10,
    alignSelf:'center'
  },
  text :
  {
    color:'white',
   fontSize:20,
   fontWeight:'bold',
   fontStyle:"italic"
  },
});