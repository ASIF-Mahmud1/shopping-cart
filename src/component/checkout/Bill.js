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
      <Text style={styles.bill}>Your Bill</Text>
      <View style={styles.box}>
        <Text style={styles.leftText}>SubTotal :{" "} </Text>
        <Text style={styles.rightText}>{subTotal}{" BDT"}</Text>
      </View>
      <View style={styles.box}>
      <Text style={styles.leftText}>Discount: </Text>
      <Text style={styles.rightText}>  {discount} % </Text>
      </View>

      <View style={styles.box}>
      <Text  style={styles.leftText}>Shipping :</Text>
      <Text style={styles.rightText}>  {shipping}{" BDT"} </Text>
      </View>
    
      <View style={styles.box}>
           <Text  style={styles.leftText}>Total  :{"      "}</Text>
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
    display:'flex',flexDirection:'row'
  },
  leftText:{
    marginRight:40
  },
  rightText:{
    marginLeft:40
  }

});