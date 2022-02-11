import React,{useState,useEffect,Fragment} from 'react';

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
    ////////////////////////////////////////// navigate ot Home after 20 sec 
    const timer = setTimeout(() => {
     navigation.navigate("Home")
     alert("You have waited more than 20 seconds in Checkout page")
    }, 1000*20);
    return () => clearTimeout(timer);
    //////////////////////////////////////////
  },[])

  const handleConfirm=()=>{
    const cartList = [...items]
    getData("bills", (value) => {
      if (value != null) {
        const result = value
        result.unshift(cartList)
        storeData("bills", result)
        storeData("cartList", [])
      }
      else 
      {
        storeData("bills", [cartList])
        storeData("cartList", [])
      }
      navigation.navigate("Home")

    })

  }

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
      {
        items.length>0 
        ?
          <Fragment>

            <ScrollView style={{ margin: 20 }}>
              <CartList cartList={items} handleRemoveFromCart={handleRemoveFromCart} handleQuantity={handleQuantity} />
              <UserDetails details={userDetails} />
              <Bill items={items.length > 0 ? items : []} />
            </ScrollView>
            <TouchableOpacity onPress={() => { handleConfirm() }} style={styles.checkOut} >
              <Text style={styles.text}> Confirm </Text>
            </TouchableOpacity>
            
        </Fragment>
        :
        <Text style={{fontSize:20,marginTop:50}}>Your Cart is Empty</Text>
      }
   
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