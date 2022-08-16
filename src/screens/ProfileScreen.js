import React,{useState,useEffect} from "react";
import {Text,View,StyleSheet,Button,TextInput} from 'react-native'
import { getAuth} from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';
import { db } from "../components/FireBase";
import {getFirestore, setDoc,doc,getDoc,collection,query} from 'firebase/firestore'
import UserUpdate from "../components/UserUpdate";
import { get } from "react-native/Libraries/Utilities/PixelRatio";
let money;

const UpdateMoney=function(){
    

    UserUpdate(money)
}



const ProfileScreen=function(){
const [userInfo,setUserInfo]=useState("")
const auth=getAuth();
const user=auth.currentUser;



const getData= async function(){
    try{

   
        const docRef= doc(db,'users',user.uid);
        const docSnap =await getDoc(docRef);
        setUserInfo(docSnap.data());

        
    }catch(error)
    {
        console.log(error.message);
    }




}







getData();






return <View style={styles.viewStyle}>
    <AntDesign 
       name="user" 
       size={90} 
       color="black" 
       />
    <View style={styles.viewStyle2}>
    <Button 
        
        color='black'
        title="" 
        onPress={function(){
            let money=userInfo.budget+100;
            
            
            UserUpdate(money)
            
            
            getData();
            
        
        
        
        }}
            
        
        />     
    <Text style={styles.textStyle}>email:</Text>
    <Text style={styles.textStyle2}>{userInfo.email}</Text>
    <Text style={styles.textStyle}>name: </Text>
    <Text style={styles.textStyle2}>{userInfo.name} {userInfo.surname}</Text>
    <Text style={styles.textStyle}>budget:</Text>
    <Text style={styles.textStyle2}>{userInfo.budget}$</Text>
    
    
    </View>
        
</View>
}


const styles=StyleSheet.create({
    viewStyle:{
        top:100,
        alignItems:'center',
        




    },
    viewStyle2:{
        borderTopColor:'black',
        borderTopWidth:2,
        paddingHorizontal:120,
        paddingTop:50

    },
    textStyle:{
        fontSize:20,
        paddingTop:20,
        color:'blue'
        
    },
    textStyle2:{
        fontSize:15,
        
        
    }
})



export default ProfileScreen;
