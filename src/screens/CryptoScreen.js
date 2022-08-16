import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,FlatList,} from "react-native";
import CryptoList from "../components/CryptoList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ProfileButton from "../components/ProfileButton";

const CryptoScreen=function()
{
    
    


    const filterResultsByPrice=function(term){
      
        return result.filter(function(result){
            
            return (result.name.includes(term)||result.symbol.includes(term));
    
           
        
            
        })
    }
    const[term,setTerm]=useState('');
    const[result]=useResults();





    
    return (
        <>
        
        <SearchBar 
        term={term}
        onTermChange={setTerm}
        onTermsubmit={function(){

            searchApi()
        
        }}
        
        
        />
        <CryptoList result={filterResultsByPrice(term)}/>
        <ProfileButton />
        </>
    
    
    )
    
}
const styles=StyleSheet.create({
    
})


export default CryptoScreen;