import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import DropShadow from "react-native-drop-shadow";
import { truncate } from '../../helper/helper';
export default function Item({ details, handleAddToCart, children }) {
  const { imageUrl, category, name, price, added, id } = details

  const pressOnCart = () => {
    handleAddToCart(id)
  }

  return (
    <DropShadow style={styles.shadowProp}>
      <View style={[styles.container,]}>

        <TouchableOpacity >
          <Image source={{ uri: imageUrl }} style={styles.itemImg} />
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, color: 'black' }}>{category}</Text>
          <Text style={{ width: 150, fontSize: 14, color: 'grey', marginBottom: 2 }}>{truncate(name,20)}</Text>
          <Text style={{ fontSize: 16, color: '#374ABE' }} >${price}.00</Text>
          {children}
        </View>
        <TouchableOpacity style={styles.crossBtn} onPress={pressOnCart} >
          <Icon name="x" style={{ color: '#979797' }} size={25} />
        </TouchableOpacity>

      </View>
    </DropShadow>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop:1,
    marginBottom: 25,
    marginHorizontal: 2,
    backgroundColor: 'white',
    padding: 10,

  },
  shadowProp: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

  },
  cart: {
    backgroundColor: '#50C878',

  },
  btn: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 300,
    marginBottom: 10,
    color: 'red',
    borderRadius: 10
  },
  text:
  {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: "italic",
    marginRight: 5
  },
  trashImg: {
    marginRight: 0,
    width: 30,
    height: 25,
    borderRadius: 20
  },

  cartImg: {
    marginRight: 0,
    width: 25,
    height: 22,
    borderRadius: 30
  },

  itemImg: {
    width: 109,
    height: 115,
  },
  cross:
  {
    marginLeft: 0,
    color: 'grey',
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  crossBtn: {
   paddingLeft:10
  }

});