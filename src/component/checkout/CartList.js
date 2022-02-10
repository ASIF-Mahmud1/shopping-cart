import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, Button} from 'react-native';
import Item   from '../home/Item'
export default function CartList({cartList,handleRemoveFromCart}) {

  return (
    <View style={styles.container}>
      <Text>CartList Component</Text>
      {
          cartList.map((item)=>{
              return <Item details={item} handleAddToCart={handleRemoveFromCart} ><Button title='sda'/></Item>
          })
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});