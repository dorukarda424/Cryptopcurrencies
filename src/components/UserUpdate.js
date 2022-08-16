import React,{useState,useEffect} from "react";
import {Text,View,StyleSheet,Button,TextInput} from 'react-native'
import { getAuth} from "firebase/auth";
import { AntDesign } from '@expo/vector-icons';
import { db } from "../components/FireBase";
import {getFirestore, setDoc,doc,getDoc,collection,query} from 'firebase/firestore'


const UserUpdate=function(money){
const auth=getAuth();
const user=auth.currentUser;


const specialOfTheDay=doc(db,`users/${user.uid}`)


function writeDailySpecial(){
  const docData={
    budget:money,
    

  };
  setDoc(specialOfTheDay,docData,{merge:true})
}
writeDailySpecial();


}

export default UserUpdate;