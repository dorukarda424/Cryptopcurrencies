import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,FlatList,Image} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import coinlore from "../api/coinlore";



const DetailScreen=function({navigation}){




    const [result,setResult]=useState(null);
    const id=navigation.getParam('id');


    const getResult= async function(id){
        const response=await coinlore.get(id)
        setResult(response.data);
       
        
    }
    useEffect(function(){
        getResult(id);


    },[])




    if(!result){
        
        return null;
    }


    
    return <View style={styles.viewStyle}>
        
        <ScrollView>
                <Image 
                style={{height:100,width:100,alignSelf:'center'}}
                source={{uri:result.image.large}}
                />
                <Text style={styles.textStyle}>Id: {result.id}</Text>
                <Text style={styles.textStyle}>Symbol: {result.symbol}</Text>
                <Text style={styles.textStyle}>Name: {result.name}</Text>
                <Text style={styles.textStyle}>Description: {result.description.en}</Text>
                



        </ScrollView>
    </View>



}
const styles=StyleSheet.create({

viewStyle:{
    marginTop:100,
    margin:10,
    alignItems:'center'
    
    
    
    
},
textStyle:{

    fontSize:15,
    margin:10,

}



})
export default DetailScreen;