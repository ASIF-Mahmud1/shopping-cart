import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Button } from 'react-native';
import CartItem from './CartItem'

export default function CartList({ cartList, handleRemoveFromCart, handleQuantity }) {

  return (
    <View style={styles.container}>
      {
        cartList.map((item) => {
          return <CartItem details={item} handleAddToCart={handleRemoveFromCart} >
            <View style={styles.card}>
              <TouchableOpacity disabled={item.qty === 1} onPress={() => { handleQuantity(item.id, -1) }}  >
                <Text style={styles.text}> {'-  '}</Text>
              </TouchableOpacity>
              <Text style={styles.text, { fontSize: 16 }}>{item.qty} </Text>
              <TouchableOpacity onPress={() => { handleQuantity(item.id, 1) }}  >
                <Text style={styles.text}> {'  +'}</Text>
              </TouchableOpacity>
            </View>


          </CartItem>

        })
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },

  text:
  {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 10
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 0,
    backgroundColor: '#F6F6F6',
    marginTop: 12,
    width:114,
    height:36

  },
});