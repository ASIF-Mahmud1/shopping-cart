import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet} from 'react-native';

export default function GradientButton({children}) {
return <LinearGradient
        colors={['#667EEA', '#658FF0', '#659BF5',"#64B6FF"]}
        style={styles.linearGradient}>
        {children}
     </LinearGradient>
    
}

const styles = StyleSheet.create({ 
    linearGradient:{
        borderRadius:6,
        width:300,
        marginHorizontal:20
      }

})