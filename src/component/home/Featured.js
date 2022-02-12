import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Item from './Item'
import {itemList} from '../../../assets/data/items'
import {storeData,getData} from '../../helper/helper'
import { useIsFocused } from '@react-navigation/native';

export default function Featured({items,handleAddToCart}) {

  
  return (
    <View style={styles.container}>
            <Text>Featured Component</Text>

      <ScrollView horizontal={true} style={{ margin: 2 }}>

        {
          items.map((item) => {
            return   <Item details={item} handleAddToCart={handleAddToCart} />
          })
        }
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});