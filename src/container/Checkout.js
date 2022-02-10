import React,{useState,useEffect} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,ScrollView} from 'react-native';
import CartList from '../component/checkout/CartList'
import UserDetails from '../component/checkout/UserDetails'
import Bill from '../component/checkout/Bill'



export default function Checkout({navigation}) {
  const userDetails={
    name:'Asif',
    address:"House#4, Dhaka, Bangladesh"
  }
  return (
    <View style={styles.container}>
       <ScrollView style={{ margin: 20 }}>
          <CartList cartList={[]} />
          <UserDetails details= {userDetails} />
          <Bill />
      </ScrollView>
      <TouchableOpacity  onPress={()=>{alert('Clicked')}} style={styles.checkOut} >
         <Text style={styles.text}> Confirm </Text>
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
    backgroundColor:'red',
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