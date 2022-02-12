import React,{useEffect,useState} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,ScrollView} from 'react-native';
import {getData,storeData} from '../helper/helper'
import Bill from '../component/checkout/Bill'
export default function MyBills() {
    const [items, setItem]=useState([]) 

    useEffect(()=>{
      getData("bills",(value)=>{
        if(value!=null)
        {
          const result= value
          setItem(result)
        }
      })
    },[])
  
  return (
    <ScrollView  contentContainerStyle={{alignItems:'center',backgroundColor:'white'}}> 

        {
             items.length>0 
             ? 
                 
                     items.map((item,index)=>{
                       return <View key={index} style={{paddingVertical:20}}>
                                <Bill  items={item}/>
                       </View>
                     })

             :
             <Text style={{fontSize:20,marginTop:50}}>You Dont have any Bills</Text>

        }
             </ScrollView>

  );
}


const styles = StyleSheet.create({


  });