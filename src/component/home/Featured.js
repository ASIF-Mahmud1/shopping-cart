import React, { useState,useEffect } from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,ScrollView} from 'react-native';
import Item from './Item'
import {itemList} from '../../../assets/data/items'

export default function Featured() {
  const [items, setItem]=useState([]) 
  useEffect(()=>{
    setItem(itemList)
  },[])
console.log(items);
  return (
    <View style={styles.container}>
      <Text>Featured Component</Text>

    

        {
          items.map((item) => {
            return   <Item details={item}/>
          })
        }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});