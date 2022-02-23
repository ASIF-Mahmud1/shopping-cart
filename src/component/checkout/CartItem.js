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

      <TouchableOpacity >
          <Image source={{ uri: imageUrl }} style={styles.itemImg} />
       </TouchableOpacity>
       <View style={{marginLeft:10}}>
       <Text>Category {category}</Text>
        <Text style={{width:150}}>Name: {name}</Text>
        <Text>Price: {price}</Text>
        {children}
       </View>
       <TouchableOpacity style={styles.crossBtn} onPress={pressOnCart} >
         <Text style={styles.cross}>X</Text>
       </TouchableOpacity>

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
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
  },
  trashImg:{
    marginRight:0,
    width: 30, 
    height: 25 ,
    borderRadius:20
  },

  cartImg:{
    marginRight:0,
    width: 25,
    height: 22 ,
    borderRadius:30
  },

  itemImg:{
    width: 150, 
    height: 150 ,
    borderRadius:10
  },
  cross :
  {
    marginLeft:0,
   color:'grey',
   fontSize:22,
   fontWeight:"bold",
   fontStyle:"italic",
  },
  crossBtn:{

  }

});