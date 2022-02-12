import React,{Fragment} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar,ScrollView,Image} from 'react-native';
import {getListOfCategory} from '../../helper/helper'
import {ItemCategory}from '../../../assets/data/items'

export default function Category({items, handleNavigation}) {
 
const result = getListOfCategory(items)

  
const catagoryList= Object.keys(result)

  return (
    <Fragment>
      <Text style={styles.category}>Categories</Text>
      <ScrollView horizontal={true} style={styles.container}>
        {
          catagoryList.map((item) => {
            return (

              <TouchableOpacity onPress={()=>handleNavigation(item,result[item])} style={styles.btn} >
                  <Text style={styles.text}> {item} </Text>
                  <Image source={{ uri:ItemCategory[item] }} style={styles.image} />
              </TouchableOpacity>

            )
          })
        }

      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  
 
  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#301934',
    width: 300,
    marginBottom:20,
    color:'red',
    borderRadius:10,
    marginHorizontal:10,
    marginVertical:10,
  },
  text :
  {
    color:'black',
   fontSize:20,
   fontWeight:'bold',
   fontStyle:"italic"
  },
  Kids:{
    backgroundColor:'red',
  },
  Men:{
    backgroundColor:'purple',
  },
  Women:{
    backgroundColor:'orange',
  },
  category:{
    color:'orange',
    fontWeight:"bold",
    fontSize:20, 
    margin:5
  },
  image:{
    margin: 15,
    padding: 30,
    width: 160,
    height: 160,
    borderRadius: 30
  },
  btn:{
    paddingBottom:10,
    alignItems: 'center'
  }

});