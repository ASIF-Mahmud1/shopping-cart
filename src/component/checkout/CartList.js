import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from 'react-native';
import CartItem from './CartItem';
export default function CartList({cartList}) {
  const cartList= cartList ? cartList:[]
  return (
    <View style={styles.container}>
      <Text>CartList Component</Text>
      {
          cartList.map((item)=>{
              return <CartItem details={item}  />
          })
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});