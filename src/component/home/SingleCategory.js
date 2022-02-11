import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar,Image} from 'react-native';

export default function SingleCategory({details}) {
    const {imageUrl, category, name, price,added ,id} =details

  return (
    <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={{ width: 300, height: 50 ,borderRadius:10}} />
        <Text>Category {category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:10
  },
});