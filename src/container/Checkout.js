import React,{useState,Fragment,useEffect} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity ,ScrollView,ActivityIndicator} from 'react-native';
import CartList from '../component/checkout/CartList'
import UserDetails from '../component/checkout/UserDetails'
import Bill from '../component/checkout/Bill'
import {getData,storeData} from '../helper/helper'
import {showToast,Loader} from '../helper/component/Indcator'
import GradientButton from '../helper/component/GradientButton';


export default function Checkout({navigation}) {
  const userDetails={
    name:'Asif',
    address:"House#4, Dhaka, Bangladesh"
  }
  
  const [items, setItem]=useState([]) 
  const [timer, setTimer]=useState(null) 
  const [loading, setLoading]=useState(false) 

  useFocusEffect(
    React.useCallback(() => {
      getData("cartList",(value)=>{
        if(value!=null)
        {
          const result= value.map((item)=>{return {...item, qty:1}})
          setItem(result)
        }
      })
      ////////////////////////////////////////// navigate to Home after 20 sec 
        // const myTimer = setTimeout(() => {
        //   navigation.navigate("Home")
        //   showToast("You have waited more than 20 seconds in Checkout page")
        // }, 1000*20);
        // setTimer(myTimer)
        // return () => clearTimeout(myTimer);
     //////////////////////////////////////////
    }, [])
  );


  useEffect(()=>{
   if(loading===true)
   {
     ////////////////////////////////////////// loading for 5 sec after Confirm 
     const myTimer = setTimeout(() => {
      navigation.navigate("Home")
      showToast("Thank You for Shopping!")
    }, 1000*2);
    setTimer(myTimer)
    return () => clearTimeout(timer);
 //////////////////////////////////////////
   }
  },[loading])

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
      clearTimeout(timer)
      setLoading(true)

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
    <View style={{flex:1}}>
    <Text style={styles.login}>Checkout </Text>
    <View style={styles.container}>
       <Loader loading={loading} />

      {
        items.length>0 
        ?
          <Fragment>

            <ScrollView>
              <CartList cartList={items} handleRemoveFromCart={handleRemoveFromCart} handleQuantity={handleQuantity} />
              <UserDetails details={userDetails} />
              <Bill items={items.length > 0 ? items : []} />
            </ScrollView>
         
            <GradientButton>
            <TouchableOpacity onPress={() => { handleConfirm() }} style={[styles.backHome]} >
              <Text style={styles.text}> Confirm </Text>
            </TouchableOpacity>
            </GradientButton>
          
        </Fragment>
        :
        <Text style={{fontSize:20,marginTop:50}}>Your Cart is Empty</Text>
      }
   
       <GradientButton >
           <TouchableOpacity onPress={() => {  navigation.navigate("Home") }} style={[styles.backHome]} >
              <Text style={styles.text}> Back To Home </Text>
           </TouchableOpacity>
       </GradientButton>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:-8,
    paddingBottom:15

  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor:'crimson',
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
  },
  login:{
    fontSize:30,
    backgroundColor:'white',
    paddingLeft:15,
    
  },
  backHome:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius:10,
  },
});