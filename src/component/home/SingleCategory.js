import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar,Image} from 'react-native';

export default function SingleCategory({route, navigation }) {
  const { category, list } = route.params;

  return (
    <View style={styles.container}>
        <Text>Category {category}{list.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:10
  },
});