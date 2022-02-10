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
      <Text >Your Bill</Text>
      <View style={{display:'flex',flexDirection:'row'}}>
        <Text style={{marginRight:40}}>SubTotal :{" "} </Text>
        <Text style={{marginLeft:40}}>{subTotal}{" BDT"}</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row'}}>
      <Text  style={{marginRight:40}}>Discount: </Text>
      <Text style={{marginLeft:40}}>  {discount} % </Text>
      </View>

      <View style={{display:'flex',flexDirection:'row'}}>
      <Text  style={{marginRight:40}}>Shipping :</Text>
      <Text style={{marginLeft:40}}>  {shipping}{" BDT"} </Text>
      </View>
    
      <View style={{display:'flex',flexDirection:'row'}}>
           <Text  style={{marginRight:40}}>Total  :{"      "}</Text>
           <Text style={{marginLeft:40}}> {total} {" BDT"} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});