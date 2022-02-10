import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Item from './Item'
import {itemList} from '../../../assets/data/items'
import {storeData,getData} from '../../helper/helper'

export default function Featured() {
  const [items, setItem]=useState([]) 

  useEffect(()=>{
    const result= itemList.map((ele)=>{return {...ele, added: false}})
    getData("cartList",(value)=>{
      if(value!==null)
      {
      
        for(let i=0;i<value.length;i++)
        {
           let idx= result.findIndex((ele)=> ele.id=== value[i].id)
           if(idx!=-1)
           {
            result[idx]= {...result[idx], added:true}
           }
        }
     
      }
      setItem(result)

    })
         
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

      
   const forCart= result.filter((ele)=>ele.added===true)
   storeData("cartList", forCart)

   setItem(result)

  }
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