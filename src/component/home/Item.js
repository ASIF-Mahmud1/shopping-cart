import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';
import{trash,shoppingCart} from "../../../assets/data/items"
export default function Item({details, handleAddToCart,children}) {
  const {imageUrl, category, name, price,added ,id} =details
 
  const pressOnCart=()=>{
    handleAddToCart(id)
  }
  
  return (
    <View style={[styles.container,]}>
      {
        added ? <TouchableOpacity style={[styles.btn,]}  onPress={pressOnCart}>
          <Text style={styles.text} >Remove From Cart</Text>
            <Image source={{ uri: trash }} style={{ marginRight:0,width: 30, height: 25 ,borderRadius:20}} />

        </TouchableOpacity  >
          : <TouchableOpacity style={[styles.btn , styles.cart]}  onPress={pressOnCart}>
            <Text style={styles.text}>Add to Cart</Text>
            <Image source={{ uri: shoppingCart }} style={{ marginRight:0,width: 25, height: 22 ,borderRadius:30}} />

          </TouchableOpacity>
      }

       {/* <TouchableOpacity> */}
        <Image source={{ uri: imageUrl }} style={{ width: 300, height: 250 ,borderRadius:10}} />
        <Text>Category {category}</Text>
        <Text>Name: {name}</Text>
        <Text>Price: {price}</Text>
      {/* </TouchableOpacity> */}
          {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:25,
    borderRadius:10,
    marginHorizontal:15
  },
  cart: {
    backgroundColor:'#50C878',
    //opacity:0.8

  },
  btn:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red',
    width: 300,
    marginBottom:10,
    color:'red',
    borderRadius:10
  },
  text :
  {
    color:'white',
   fontSize:15,
   fontWeight:'bold',
   fontStyle:"italic",
   marginRight:5
  }
});