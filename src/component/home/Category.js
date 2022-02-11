import React from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar,ScrollView,Image} from 'react-native';
import SingleCategory from './SingleCategory';
export default function Category({items, handleNavigation}) {
  const {imageUrl, category, name, price,added ,id} =items
 

  return (
    <ScrollView horizontal={true} style={styles.container}>
        {
          items.map((item)=>{
            return(
              <TouchableOpacity onPress={handleNavigation}>
                   <SingleCategory  details= {item}/>
              </TouchableOpacity>
            
            )
          })
        }
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
   // flexDirection:'row'
  },
});