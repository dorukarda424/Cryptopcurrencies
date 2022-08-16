import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,FlatList,TouchableOpacity,Image} from "react-native";
import { withNavigation } from "react-navigation";



const CryptoList=function({result,navigation})
{
    if(!result.length){

        return null;
    }
   

        

        return <View style={{flex:1,marginTop:10}}>
        <Text style={styles.Textstyle}>              Name                           Symbol              Price(US$)</Text>
        <FlatList
        showsVerticalScrollIndicator='false'
        data={result}
        keyExtractor={item=>item.id}
        renderItem={({item})=>{
            return<TouchableOpacity onPress={function()
            {
                
                navigation.navigate('Detail',{id:item.id});


                
            }}>
                <View style={styles.viewStyle}>
                <Image 
                style={styles.ImageStyle}
                source={{uri: item.image}}
                
                
                />
                <Text style={styles.TextStyleResults1}>{item.name}</Text>
                <Text style={styles.TextStyleResults2}>{item.symbol}</Text>
                <Text style={styles.TextStyleResults3}>${item.current_price}</Text>
            
            
            </View>
            </TouchableOpacity>
        }}
        
            
        />
        
    </View>



}
const styles=StyleSheet.create({
    viewStyle:{
        padding:20,
        borderWidth:1,
        borderColor:'#bbbcbb',
        marginBottom:15,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        borderTopStartRadius:10,
        borderTopEndRadius:10,
        borderStyle:1,
        
        



    },
    Textstyle:{
        marginBottom:10,
        fontWeight:'200',
        fontSize:15,
        
        
        

    },
    TextStyleResults1:{
       
        alignItems:'center',
        marginTop:20,
        fontSize:15,
        marginLeft:50,
        position:'absolute',
        
    },
    TextStyleResults2:{
        marginTop:20,
        fontSize:15,
        marginLeft:185,
        position:'absolute',
        alignItems:'center',
    },
    TextStyleResults3:{
        marginTop:20,
        fontSize:15,
        marginLeft:290,
        position:'absolute',
        alignItems:'center',
    },
    ImageStyle:{
        height:30,
        width:30,
        bottom:5,
        right:5,
    }





})


export default withNavigation(CryptoList);