import React,{Fragment} from "react";
import {View} from "react-native";

const Divider=({customStyle})=>{
    return  <Fragment>
    {
     customStyle 
     ?  
       <View style={customStyle} ></View>
     :  <View style={{borderWidth:0.2,borderColor:'grey',marginVertical:5, opacity:0.3}} ></View>
    }
   </Fragment>

}

  export {
      Divider
  }