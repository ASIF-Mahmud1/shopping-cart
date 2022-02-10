import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar, Button,ScrollView} from 'react-native';
import Category from '../component/home/Category'
import Featured from '../component/home/Featured'
import BestSale from '../component/home/BestSale'



export default function Home({navigation}) {
  const handleNavigation=()=>{
    navigation.navigate('Checkout')
  }
  return (
    <View style={styles.container}>
        <ScrollView style={{ margin: 20 }}>
          <Category/>
          <Featured/>
          <BestSale/>
          <Button onPress={handleNavigation} title="Checkout" />
       </ScrollView>
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