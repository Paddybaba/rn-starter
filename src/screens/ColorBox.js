import React from 'react'
import { useState } from 'react'
import {Text, View, StyleSheet, Button, FlatList} from 'react-native'
import ColorButton from '../../src/components/ColorButton'

const ColorBox = () => {

const [red, setRed]= useState(0);
const [green, setGreen]= useState(255);
const [blue, setBlue]= useState(0);



return <View>
    <ColorButton color="Red" setColor={setRed} myColor={red}/>
    <ColorButton color="Green" setColor={setGreen} myColor={green}/>
    <ColorButton color="Blue" setColor={setBlue} myColor={blue}/>
    <View style={{height:400, width:400, backgroundColor: `"rgb(${red},${green},${blue})"`}}></View>
    <Text>{`"rgb(${red},${green},${blue})"`}</Text>
    
    </View>
}

const styles = StyleSheet.create({})

export default ColorBox