import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';

export default function Item({details, handleAddToCart}) {
  const {imageUrl, category, name, price,added ,id} =details
 
  const pressOnCart=()=>{
    handleAddToCart(id)
  }
  
  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={pressOnCart}>
         <Text>Add to Cart {added.toString()}</Text>
        <Image source={{ uri: imageUrl }} style={{ width: 305, height: 300 ,borderRadius:10}} />
        <Text>Category {category}</Text>
        <Text>Name: {name}</Text>
        <Text>Price: {price}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});