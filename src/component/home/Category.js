import React,{Fragment} from 'react';

import { StyleSheet, Text, View, TouchableOpacity ,StatusBar,ScrollView,Image,ImageBackground} from 'react-native';
import {getListOfCategory} from '../../helper/helper'
import {ItemCategory}from '../../../assets/data/items'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../../helper/component/GradientButton';

export default function Category({items, handleNavigation}) {
 
const result = getListOfCategory(items)

  
const catagoryList= Object.keys(result)

  return (
    <Fragment>
      <Icon name="segment" style={{ color: 'black' }} size={25} />
      <Text style={styles.category}>   Categories</Text>
      <ScrollView horizontal={true} style={styles.container}>
        {
          catagoryList.map((item) => {
            return (

              <TouchableOpacity onPress={() => handleNavigation(item, result[item])} style={styles.btn} >
                <ImageBackground source={{ uri: ItemCategory[item] }} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 6}} >

                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={styles.categoryGradient[item.toString()]} style={{  borderRadius: 6,}}>
                    <View style={{
                      width: 114,
                      height: 65,
                     justifyContent:'center',
                   
                    }}>
                      <Text style={styles.imageText}>{item}</Text>
                    </View>
                  </LinearGradient>
                </ImageBackground>

              </TouchableOpacity>

            )
          })
        }

      </ScrollView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft:7

 
  },
  checkOut:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#301934',
    width: 300,
    marginBottom:20,
    color:'red',
    borderRadius:10,
    marginHorizontal:10,
    marginVertical:10,
  },
  text :
  {
    color:'black',
   fontSize:20,
   fontWeight:'bold',
   fontStyle:"italic"
  },
  Kids:{
    backgroundColor:'red',
  },
  Men:{
    backgroundColor:'purple',
  },
  Women:{
    backgroundColor:'orange',
  },
  category:{
   color:'#434343', 
    fontSize:22,
    marginBottom:10
 
  },
  image:{
    marginHorizontal: 10,
   // padding: 30,
    width: 114,
    height: 65,
    borderRadius: 6,
    opacity:0.7,
    justifyContent:'center',
    alignItems:'center',
 

  },
  btn:{
    marginLeft:0,
    paddingTop:5,  
    paddingBottom:20,
    
  },
  imageText:{
    textAlign:'center',
    color:'white',
    fontSize:14,
    fontWeight:'bold',
    fontStyle:"italic"
  },
  categoryGradient:{
   Women: ['#8466EA', '#64B6FF'],
   Men: ['#FF5858','#FB5895'],
   Kids:['#43E9B0','#38F9D7']
  },

});