import React,{useState} from "react";
import {View,Text,TextInput,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import CryptoList from "./CryptoList";


const SearchBar=function({term,onTermChange,onTermSubmit}){
    

    return(
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" size={30} />
            <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search"
            onChangeText={onTermChange}
            onSubmitEditing={onTermSubmit}
            value={term}
            />
        </View>
    )


}
const styles=StyleSheet.create({


    backgroundStyle:{
        marginBottom:0,
        marginTop:90,
        height:50,
        backgroundColor:'#DCDCDA',
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
    },
    inputStyle:{
        flex:1,
        fontSize:18,
    },
    iconStyle:{

        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15,
        
    },






})
export default SearchBar;