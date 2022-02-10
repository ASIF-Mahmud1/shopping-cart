import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from 'react-native';

export default function Bill() {

  return (
    <View style={styles.container}>
      <Text>Bill Component</Text>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});