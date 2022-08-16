import React,{useState} from "react";
import {View,Text,Button,StyleSheet,TextInput} from 'react-native'
import { createUserWithEmailAndPassword,AdditionalUserInfo } from "firebase/auth";
import { auth,db } from "../components/FireBase";
import { withNavigation } from "react-navigation";
import {getFirestore,doc,collection} from 'firebase/firestore';
import FireStoreUpdate from "../components/FireStoreUpdate";





const AuthenticationRegisterScreen=function({navigation}){
    
    const[registerEmail,setRegisterEmail]=useState("")
    const[registerPassword,setRegisterPassword]=useState("")

    
    
    const register= async function(){
        try{

            
        const user=await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        FireStoreUpdate();
        navigation.navigate('AuthL');
        

    }catch(error)
    {
        console.log(error.message);
    }

    }
 
   



    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> Register</Text>
        <View style={styles.viewStyle2}>
        <TextInput 
        autoCapitalize="none"
        style={styles.textInput}
        placeholder="Email" 
        onChangeText={function(text){
            setRegisterEmail(text)


        }}
        />
       <Text>  </Text>
        <TextInput
        autoCapitalize="none"
        style={styles.textInput}
        placeholder="*******" 
        onChangeText={function(text){
            setRegisterPassword(text)


        }}
        
        />
       
        </View>
        <View style={styles.buttonView}>
        <Button 
        title="Register" 
        onPress={register}
        color='white'
        />
        </View>
        
        
        


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
    marginTop:20,
    alignSelf:'center',
    fontSize:17,
    fontWeight:'bold',
    color:'blue'
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

export default withNavigation(AuthenticationRegisterScreen);