import * as React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from 'react-native';

export default function Checkout({navigation}) {

  return (
    <View style={styles.container}>
      <Text>Checkout page</Text>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
//    marginTop: 40
  //  justifyContent: 'center',
  },
});