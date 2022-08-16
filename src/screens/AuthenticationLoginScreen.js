import React,{useState} from "react";
import {View,Text,Button,StyleSheet,TextInput} from 'react-native'
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth,db } from "../components/FireBase";
import { withNavigation } from "react-navigation";


let control=null;
const AuthenticationLoginScreen=function({navigation}){
  
  
    const[loginEmail,setLoginEmail]=useState("")
    const[loginPassword,setLoginPassword]=useState("")
    const [user,setUser]=useState("")
    
    onAuthStateChanged(auth,(currentUser)=>{

   
        
        
       
        setUser(currentUser);
        
        


    })
    
    const login= async function(){
        try{

       
            const user=await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
            control=1;
            navigation.navigate('Crypto');
            
        }catch(error)
        {
            console.log(error.message);
        }




    }
    const logout= async function(){


        await signOut(auth);

    }



    return <View style={styles.viewStyle}>
        
       
        
        <Text style={styles.textStyle}> Login</Text>
        <View style={styles.viewStyle2}>
        <TextInput
        autoCapitalize="none"
        style={styles.textInput} 
        placeholder="Email" 
        onChangeText={function(text){
            setLoginEmail(text)


        }}
        />
        <Text>  </Text>
       
        <TextInput
        autoCapitalize="none"
        style={styles.textInput} 
        placeholder="*******" 
        onChangeText={function(text){
            setLoginPassword(text)


        }}
        />
        </View>
        <View style={styles.buttonView}>
        <Button 
        color='white'
        title="Login" 
        onPress={login}
        
        />
        

        </View>
        
        <Text style={styles.textStyle3}> {"User logged in"}:</Text>
        <Text style={styles.textStyle2}>{user?.email}</Text>
        <View style={styles.buttonView}>
        <Button 
        title="Logout" 
        onPress={logout}
        color='white'
        />

        </View>
        

        <Text style={styles.textStyle3}> You dont have an account?</Text>
        <Button
        title='sign up'
        onPress={()=>navigation.navigate('AuthR')}
        />
    </View>

}


const styles=StyleSheet.create({
viewStyle:{
    top:30,
    margin:30,
    marginTop:150,
    padding:20,
    paddingHorizontal:15,
    

    
    
    
},
textInput:{
    borderWidth:2,
    borderColor:'#dcdcdc',
    fontSize:14,
    flex:1,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    borderTopStartRadius:10,
    borderTopEndRadius:10,
    paddingVertical:10,
    paddingHorizontal:10,
    marginBottom:10,
    
    
    
    
    
},
viewStyle2:{
    
    flexDirection:'row',
    alignContent:'space-between',
    
},
textStyle:{
    marginTop:20,
    alignSelf:'center',
    fontSize:25,
    paddingBottom:15
},
textStyle2:{
    marginTop:10,
    marginBottom:10,
    alignSelf:'center',
    fontSize:15,
    fontWeight:'bold',
    color:'#1e90ff'
},
textStyle3:{
    marginTop:120,
    alignSelf:'center',
    fontSize:17,
    fontWeight:'bold',
},
buttonView:{
    justifyContent:'center',
    backgroundColor:'#1e90ff',
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    borderTopStartRadius:10,
    borderTopEndRadius:10,


}



})

export default withNavigation(AuthenticationLoginScreen);