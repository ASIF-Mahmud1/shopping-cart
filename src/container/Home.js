import React,  { useState,useEffect } from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, Button,ScrollView} from 'react-native';
import Category from '../component/home/Category'
import Featured from '../component/home/Featured'
import BestSale from '../component/home/BestSale'
import {itemList} from '../../assets/data/items'
import {storeData,getData} from '../helper/helper'
import { useIsFocused } from '@react-navigation/native';
import { showToast } from '../helper/component/Indcator';

export default function Home({navigation}) {

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
         
  },[useIsFocused()])

  const handleAddToCart=(id)=>{
    const result= items.map((ele)=>{
      if(ele.id===id)
      {
         return {
           ...ele,
           added: true
         }
      }
      else
      {
        return ele
      }
    })
 
       
    const forCart= result.filter((ele)=>ele.added===true)
    storeData("cartList", forCart)
    showToast("Added to Cart")
    setItem(result)
 
   }
  const handleNavigation=()=>{
    navigation.navigate('Checkout')
  }
  const handleNavigationToCategory=(category, list)=>{
    navigation.navigate('SingleCategory',{category:category, list:list})
  }
  const cartSize= items.filter((ele)=>ele.added===true).length
 
  return (
    <View style={styles.container}>
        <ScrollView style={{ margin: 10 }}>
          <Category items={items} handleNavigation={handleNavigationToCategory} />
          <Featured items={items}  handleAddToCart={handleAddToCart} />        
          <BestSale  items={items}  handleAddToCart={handleAddToCart} />
       </ScrollView>
       {

         cartSize >0 && 
         <TouchableOpacity  onPress={handleNavigation} style={styles.checkOut} >
         <Text style={styles.text}> Checkout </Text>
         </TouchableOpacity>

       }
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:5
  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#301934',
    width: 300,
    marginBottom:20,
    color:'red',
    borderRadius:10
  },
  text :
  {
    color:'white',
   fontSize:20,
   fontWeight:'bold',
   fontStyle:"italic"
  }

});