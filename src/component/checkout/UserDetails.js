import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar} from 'react-native';

export default function UserDetails({userDetails}) {

  return (
    <View style={styles.container}>
      <Text>User Details Component</Text>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});