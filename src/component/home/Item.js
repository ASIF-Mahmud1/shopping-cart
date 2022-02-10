import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';

export default function Item({details, handleAddToCart,children}) {
  const {imageUrl, category, name, price,added ,id} =details
 
  const pressOnCart=()=>{
    handleAddToCart(id)
  }
  
  return (
    <View style={[styles.container,added && styles.cart]}>
      {
        added ? <TouchableOpacity style={styles.btn}  onPress={pressOnCart}>
          <Text style={styles.text} >Remove From Cart</Text>
        </TouchableOpacity  >
          : <TouchableOpacity style={styles.btn}  onPress={pressOnCart}>
            <Text style={styles.text}>Add to Cart</Text>
          </TouchableOpacity>
      }


       <TouchableOpacity>
        <Image source={{ uri: imageUrl }} style={{ width: 300, height: 250 ,borderRadius:10}} />
        <Text>Category {category}</Text>
        <Text>Name: {name}</Text>
        <Text>Price: {price}</Text>
      </TouchableOpacity>
          {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    borderRadius:10
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
    marginBottom:20,
    color:'red',
    borderRadius:10
  },
  text :
  {
    color:'white',
   fontSize:15,
   fontWeight:'bold',
   fontStyle:"italic"
  }
});