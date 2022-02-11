import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from 'react-native';

export default function UserDetails({details}) {
   const {name, address}=details
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Customer Details </Text>
       <Text style={styles.text}>Name: {name}</Text>
       <Text style={styles.text}>Address: {address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:5,
  },
  text:{
    fontSize:14,
    fontWeight:'500'
  }
});