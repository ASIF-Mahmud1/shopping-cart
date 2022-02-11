import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, Button} from 'react-native';

import Item   from '../home/Item'
export default function CartList({cartList,handleRemoveFromCart,handleQuantity}) {

  return (
    <View style={styles.container}> 
      {
          cartList.map((item)=>{
              return <Item details={item} handleAddToCart={handleRemoveFromCart} >
                <View style= {{  display:'flex', flexDirection:'row',  justifyContent: 'center',alignItems: 'center', }}>
                      <TouchableOpacity disabled={item.qty===1} onPress={()=>{handleQuantity(item.id,-1)}}  >
                        <Text style={styles.text}> {'   -   ' }</Text>
                      </TouchableOpacity>
                      <Text style={styles.text,{fontSize:20}}>{item.qty} </Text>
                      <TouchableOpacity  onPress={()=>{handleQuantity(item.id,1)}}  >
                        <Text style={styles.text}> {'   +   ' }</Text>
                      </TouchableOpacity>
                </View>
               
                
                </Item>
          })
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },

  text :
  {
    color:'black',
   fontSize:40,
   fontWeight:'bold',
   fontStyle:"italic"
  }
});