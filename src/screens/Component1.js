import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

const Compo = () =>{
  const c = "Paddybaba"
    return (
        <View>
            <Text style={style.h1}>Getting started with React Native</Text>
            <Text style={style.h2}>Hi, my name is {c}</Text>
        </View>
    ) 
}

const style = StyleSheet.create({
    h1 : {
        fontSize : 50
    },
    h2 :{
        fontSize : 30
    }
})

export default Compo;