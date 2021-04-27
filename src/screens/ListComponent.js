import React from 'react';
import {Text, FlatList, StyleSheet, View, Button} from 'react-native'

const ListScreen = () =>{
 const fruits = [
     {name : "Apple"},
     {name : "Banana"},
     {name : "Grapes"},
     {name : "Pear"},
     {name : "Watermelon"},
     {name : "Mango"},
 ]
    return (
        <View>
            <Text style = {style.title}>List of Fruits</Text>
            <FlatList   data={fruits}
                        keyExtractor={(fruit)=>fruit.name}
                        renderItem = {({item, index})=>{
                             return <Text style = {style.items} key={index}>{index+1}. {item.name}</Text>
                        }}
            />
        </View>
    ) 
}

const style = StyleSheet.create(
 {
     title:{
     fontSize: 30,
     fontStyle:"italic"
 },
    items : {
        fontSize : 20,
        fontStyle:"italic"
    }
}
)

export default ListScreen