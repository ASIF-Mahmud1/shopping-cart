import * as React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, Button} from 'react-native';

export default function Home({navigation}) {
  const handleNavigation=()=>{
    navigation.navigate('Checkout')
  }
  return (
    <View style={styles.container}>
      <Button onPress={handleNavigation} title="Checkout" />
      {/* <StatusBar style="auto" /> */}
      <Text>Home page</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
 //   marginTop: 40
  //  justifyContent: 'center',
  },
});