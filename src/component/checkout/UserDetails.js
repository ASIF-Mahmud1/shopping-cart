import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from 'react-native';

export default function UserDetails({details}) {
   const {name, address}=details
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Shewrapara, Mirpur, Dhaka-1216 House </Text>
      <Text style={styles.text}>no: 938 Road no: 9</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:5,
  },
  text:{
    fontSize:18,
    fontWeight:'bold'
  }
});