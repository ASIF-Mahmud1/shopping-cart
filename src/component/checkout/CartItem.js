import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from 'react-native';

export default function CartItem() {

  return (
    <View style={styles.container}>
      <Text>Cart Item Component</Text>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});