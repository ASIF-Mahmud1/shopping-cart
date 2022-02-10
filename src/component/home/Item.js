import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';

export default function Item({details, handleAddToCart}) {
  const {imageUrl, category, name, price,added ,id} =details
 
  const pressOnCart=()=>{
    handleAddToCart(id)
  }
  
  return (
    <View style={[styles.container,added && styles.cart]}>
       <TouchableOpacity onPress={pressOnCart}>
         <Text>Add to Cart {added.toString()}</Text>
        <Image source={{ uri: imageUrl }} style={{ width: 300, height: 250 ,borderRadius:10}} />
        <Text>Category {category}</Text>
        <Text>Name: {name}</Text>
        <Text>Price: {price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    borderRadius:10
  },
  cart: {
    backgroundColor:'#50C878',
    opacity:0.8

  }
});