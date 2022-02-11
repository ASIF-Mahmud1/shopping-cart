import React,{Fragment} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar,ScrollView,Image} from 'react-native';
import {getListOfCategory} from '../../helper/helper'

export default function Category({items, handleNavigation}) {
  
const result = getListOfCategory(items)

  
const catagoryList= Object.keys(result)

  return (
    <Fragment>
      <Text>Categories</Text>
      <ScrollView horizontal={true} style={styles.container}>
        {
          catagoryList.map((item) => {
            return (

              <TouchableOpacity onPress={()=>handleNavigation(item,result[item])} style={[styles.checkOut, styles[item]]} >
                <Text style={styles.text}> {item} </Text>
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
    color:'white',
   fontSize:20,
   fontWeight:'bold',
   fontStyle:"italic"
  },
  Children:{
    backgroundColor:'red',
  },
  Men:{
    backgroundColor:'purple',
  },
  Women:{
    backgroundColor:'orange',
  }
});