import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, Button,ScrollView} from 'react-native';
import Category from '../component/home/Category'
import Featured from '../component/home/Featured'
import BestSale from '../component/home/BestSale'



export default function Home({navigation}) {
  const handleNavigation=()=>{
    navigation.navigate('Checkout')
  }
  return (
    <View style={styles.container}>
        <ScrollView style={{ margin: 20 }}>
          <Category/>
          <Featured/>
          <BestSale/>
       </ScrollView>
       <TouchableOpacity  onPress={handleNavigation} style={styles.checkOut} >
         <Text style={styles.text}> Checkout </Text>
         </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#301934',
    width: 300,
    marginBottom:20,
    color:'red',
    borderRadius:10
  },
  text :
  {
    color:'white',
   fontSize:20,
   fontWeight:'bold',
   fontStyle:"italic"
  }

});