import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const ColorButton = ({color, setColor, myColor}) => {
return <View>
    <Text>{color}</Text>
    <Button title={`Increase ${color}`} onPress={()=>{
        if(myColor >255) return

        setColor(myColor+5)
        console.log(myColor)}}></Button>
    <Button title={`Decrease ${color}`} onPress={()=>{
        if(myColor < 0) return 
        
        setColor(myColor-5)
        console.log(myColor)}}></Button>
</View>
}

const styles = StyleSheet.create({})

export default ColorButton