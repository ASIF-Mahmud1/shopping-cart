import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native';
export default function Item({details, handleAddToCart,children}) {
  const {imageUrl, category, name, price,added ,id} =details
 
  const pressOnCart=()=>{
    handleAddToCart(id)
  }
  
  return (
    <View style={[styles.container,]}>

      <TouchableOpacity  onPress={pressOnCart}>
        <Image source={{ uri: imageUrl }} style={styles.itemImg} />
        <Text style={styles.text}>${price}.00</Text>
        <Text style={styles.text}>{category} T-Shirt</Text>
      </TouchableOpacity>
          {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:25,
    borderRadius:10,
    marginHorizontal:8
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
   color:'black',
   fontSize:14,
   fontFamily:'Roboto',
   marginRight:5,
   marginTop:4
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
    height: 180 ,
    borderRadius:5
  },
});