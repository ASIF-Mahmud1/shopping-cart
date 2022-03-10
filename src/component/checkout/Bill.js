import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from 'react-native';

export default function Bill({items}) {
  const subTotal= items.reduce((acc,current)=>{
    return acc+ current.price* current.qty
  },0)
  const discount= 5
  const shipping= 10
  const total= Math.ceil(subTotal +shipping- discount*subTotal/100)

  return (
    <View style={styles.container}>
    
      <View style={styles.box}>
        <Text style={styles.leftText}>SubTotal :{" "} </Text>
        <Text style={styles.rightText}>{subTotal}{" BDT"}</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.leftText}>Discount: </Text>
      <Text style={[styles.rightText]}>  {discount} % </Text>
      </View>

      <View style={styles.box}>
      <Text  style={styles.leftText}>Shipping :</Text>
      <Text style={styles.rightText}>  {shipping}{" BDT"} </Text>
      </View>
    
      <View style={[styles.box,{marginTop:15}]}>
           <Text  style={styles.leftTotal}>Total  :{"      "}</Text>
           <Text style={styles.rightText}> {total} {" BDT"} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
  bill:{
    fontWeight:"bold"
  },
  box: {
    display:'flex',flexDirection:'row',
  },
  leftText:{
    marginRight:40,
    fontSize:16,
    marginVertical:2.5, //919191
    color:'#919191',
  },
  leftTotal:{
    marginRight:40,
    fontSize:16,
    marginVertical:2.5, //919191
    color:'#585B5E',
  },
  rightText:{
    marginLeft:40,
    fontSize:16,
    color:'#434343',
    marginVertical:2.5
  }

});