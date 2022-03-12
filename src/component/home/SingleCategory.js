import React,{useState,useEffect} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,ScrollView,Image} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import {storeData,getData} from '../../helper/helper'
import Item from './Item'
import GradientButton from '../../helper/component/GradientButton';
import DropShadow from "react-native-drop-shadow";

export default function SingleCategory({route, navigation }) {
  const { category, list :itemList } = route.params;
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
   const handleNavigation=()=>{
    navigation.navigate('Checkout')
  }
   
   const cartSize= items.filter((ele)=>ele.added===true).length

  return ( <View style={styles.container}>
        <Text style={[styles.text,{color:'grey'}]}> {category}'s Collection</Text>
        <ScrollView style={{ margin: 20, paddingHorizontal:100 }} showsVerticalScrollIndicator={false}   >

        {
          items.map((item) => {
            return (   
            
              <DropShadow style={styles.shadowProp}>
                 <Item details={item} handleAddToCart={handleAddToCart} />
            </DropShadow>
            )
          })
        }
        </ScrollView>
      {

        cartSize > 0 &&
        <GradientButton>
          <TouchableOpacity onPress={handleNavigation} style={styles.checkOut}>
          <Text style={styles.text}> Checkout </Text>
        </TouchableOpacity>

        </GradientButton>
       
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:30
  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius:10,
  },
  text :
  {
   color:'white',
   fontSize:20,
   fontWeight:'bold',
  
  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,

  },

});