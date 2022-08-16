import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CryptoScreen from "./src/screens/CryptoScreen";
import DetailScreen from "./src/screens/DetailScreen";
import AuthenticationRegisterScreen from "./src/screens/AuthenticationRegisterScreen";
import AuthenticationLoginScreen from "./src/screens/AuthenticationLoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
const navigator=createStackNavigator({

  Crypto:CryptoScreen,
  Detail:DetailScreen,
  AuthL:AuthenticationLoginScreen,
  AuthR:AuthenticationRegisterScreen,
  Profile:ProfileScreen,
  

},
{
  initialRouteName:"Crypto",
  defaultNavigationOptions:{
    title:'Cryptocurrencies',
    headerTransparent:'true',
    
    
    
    headerTitleStyle:{
      fontWeight:'bold',
      fontSize:20,
      

    },
    
  }
 
})

export default createAppContainer(navigator);