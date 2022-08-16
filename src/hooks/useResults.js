import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import coinlore from "../api/coinlore";

export default function()
{
    const[result,setResults]=useState([]);
    
       
    const searchApi=async function(){
        
        
        
        try{
        const response=await coinlore.get('markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
        params:{
            limit:50,
            
            
            
        }



        });
       
            setResults(response.data)

            

        
        
    }catch(err){
        console.log('hata')
    }
    }
        useEffect(function(){
        
       
            

            
                searchApi()
            
           
        },[])
       
            return[result]

        
        
    }