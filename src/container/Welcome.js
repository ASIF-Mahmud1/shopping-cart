import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../helper/component/GradientButton';
export default function Welcome({navigation}) {
  const handleNavigation=()=>{
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Welcome To Bolt</Text>
     
      <Image source={require("../../assets/image/intro.png")} style={styles.image} />
          <GradientButton>
                <TouchableOpacity  onPress={handleNavigation} style={styles.checkOut} >
                    <Text style={styles.text}> Login With Phone </Text>
                 </TouchableOpacity>
          </GradientButton>
         <Text  style={styles.info}>Shop With Us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    alignItems:'center',
    backgroundColor:'white',
    backfaceVisibility:"hidden" ,
   justifyContent:'space-evenly',
  // height:10000
  },
  image:{
    marginTop:30
   
  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor:'#301934',
    width: 300,
  //  marginTop:50,
    color:'red',
   // borderRadius:10
  },
  text :
  {
    color:'white',
   fontSize:20,
   fontWeight:'bold',
   fontStyle:"italic"
  },
  info:{
    fontSize:18,
    fontWeight:'bold',
  },
  linearGradient:{
    borderRadius:6
  }
});