import React,{useEffect,useState} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from 'react-native';
import {getData,storeData} from '../helper/helper'

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
    <View style={styles.container}>
        {
             items.length>0 
             ? 
             <Text>My Bills</Text>
             :
             <Text style={{fontSize:20,marginTop:50}}>You Dont have any Bills</Text>

        }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});