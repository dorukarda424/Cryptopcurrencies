import React from "react";
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { withNavigation } from "react-navigation";

const ProfileButton=function({navigation}){

    return <View style={styles.ViewDesign}>
    <TouchableOpacity>
       <AntDesign 
       name="user" 
       size={35} 
       color="black" 
       onPress={()=>navigation.navigate('Profile')}
       />

</TouchableOpacity>

<TouchableOpacity style={styles.FeatherIconStyle}>

<Feather 

name="settings" 
size={35} 
color="black" />
    
</TouchableOpacity>
    </View>


}

const styles=StyleSheet.create({


ViewDesign:{
    borderWidth:1,
    borderColor:'black',
    alignItems:'center',
    paddingVertical:10,
    borderColor:'black',
    height:60,
    alignItems:'flex-start',
    paddingLeft:50,
    paddingBottom:5

    

    
    
},
FeatherIconStyle:{
    position:'absolute',
    left:330,
    top:11
    

}



})

export default withNavigation(ProfileButton);