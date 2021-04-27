import React from 'react'
import { useState } from 'react'
import {Text, View, StyleSheet, Button, FlatList} from 'react-native'

const ColourScreen = () => {
const [color,setColor]= useState([])
console.log(color);
function getRGB(){
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
return <View>
    <Button onPress={()=>setColor([...color, getRGB()])} title="Add a new colour"/>
    <FlatList 
        data={color}
        renderItem={({item, index})=>{
            return  <View style={{height:50, width:480, backgroundColor:item}} key={index}/>
        }}
    />
</View>
}

const styles = StyleSheet.create({})

export default ColourScreen