import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Item from './Item'

export default function BestSale({items,handleAddToCart}) {

  const bestSale= items.filter((ele)=> ele.bestSale)
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Best Sale</Text>

      <ScrollView horizontal={true} style={{ margin: 2 }}>

        {
          bestSale.map((item,index) => {
            return   <Item key={index} details={item} handleAddToCart={handleAddToCart} />
          })
        }
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
  text:{
    color:'black', 
    fontSize:20,
    margin:5
  }
});