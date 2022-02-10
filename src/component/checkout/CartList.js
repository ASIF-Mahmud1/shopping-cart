import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, Button} from 'react-native';

import Item   from '../home/Item'
export default function CartList({cartList,handleRemoveFromCart,handleQuantity}) {

  return (
    <View style={styles.container}>
      <Text>CartList Component</Text>
      {
          cartList.map((item)=>{
              return <Item details={item} handleAddToCart={handleRemoveFromCart} >
                <View style= {{  display:'flex', flexDirection:'row',  justifyContent: 'center',alignItems: 'center', }}>
                      <TouchableOpacity disabled={item.qty===0} onPress={()=>{handleQuantity(item.id,-1)}}  >
                        <Text style={styles.text}> {'   -   ' }</Text>
                      </TouchableOpacity>
                      <Text>{item.qty} </Text>
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
    color:'white',
   fontSize:35,
   fontWeight:'bold',
   fontStyle:"italic"
  }
});