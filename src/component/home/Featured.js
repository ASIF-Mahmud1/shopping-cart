import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Item from './Item'

export default function Featured({items,handleAddToCart}) {

  const featured= items.filter((ele)=> ele.featured)
  
  return (
    <View style={styles.container}>
            <Text>Featured Component</Text>

      <ScrollView horizontal={true} style={{ margin: 2 }}>

        {
          featured.map((item) => {
            return   <Item details={item} handleAddToCart={handleAddToCart} />
          })
        }
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});