import React, { useState,useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Item from './Item'
import {itemList} from '../../../assets/data/items'

export default function Featured() {
  const [items, setItem]=useState([]) 
  useEffect(()=>{
    const result= itemList.map((ele)=>{return {...ele, added: false}})
    setItem(result)
  },[])
  const handleAddToCart=(id)=>{
   const result= items.map((ele)=>{
     if(ele.id===id)
     {
        return {
          ...ele,
          added: !ele.added
        }
     }
     else
     {
       return ele
     }
   })

   setItem(result)
  }
console.log(items);
  return (
    <View style={styles.container}>
      <Text>Featured Component</Text>

        {
          items.map((item) => {
            return   <Item details={item} handleAddToCart={handleAddToCart} />
          })
        }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});