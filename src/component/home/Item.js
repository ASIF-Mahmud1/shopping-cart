import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';

export default function Item({details}) {
 const {imageUrl, category, name, price} =details
  return (
    <View style={styles.container}>
       <TouchableOpacity>
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