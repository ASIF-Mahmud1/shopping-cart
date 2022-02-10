import React,{useState,useEffect} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,ScrollView} from 'react-native';
import CartList from '../component/checkout/CartList'
import UserDetails from '../component/checkout/UserDetails'
import Bill from '../component/checkout/Bill'
import {getData,storeData} from '../helper/helper'


export default function Checkout({navigation}) {
  const userDetails={
    name:'Asif',
    address:"House#4, Dhaka, Bangladesh"
  }
  
  const [items, setItem]=useState([]) 

  useEffect(()=>{
    getData("cartList",(value)=>{
      if(value!=null)
      {
        const result= value.map((item)=>{return {...item, qty:1}})
        setItem(result)
      }
    })
  },[])

  const handleRemoveFromCart=(id)=>{
     const result= items.filter((ele)=>ele.id !== id)
     storeData("cartList", result)

     setItem([...result])
  }
  const handleQuantity=(id,value)=>{
    const result= items.map((ele=>{
      if(ele.id==id)
      {
         return  {
           ...ele, qty: ele.qty+value
         }
      }
      else 
      {
        return ele
      }
    }))

    setItem([...result])
  }

  return (
    <View style={styles.container}>
       <ScrollView style={{ margin: 20 }}>
          <CartList cartList={items} handleRemoveFromCart={handleRemoveFromCart} handleQuantity={handleQuantity} />
          <UserDetails details= {userDetails} />
          <Bill />
      </ScrollView>
      <TouchableOpacity  onPress={()=>{alert('Clicked')}} style={styles.checkOut} >
         <Text style={styles.text}> Confirm </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
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