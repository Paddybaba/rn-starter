import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const ColorButton = ({color, setColor, myColor}) => {
return <View>
    <Text>{color}</Text>
    <Button title={`Increase ${color}`} onPress={()=>{
        if(myColor >254) return

        setColor(myColor+5)
       }}></Button>
    <Button title={`Decrease ${color}`} onPress={()=>{
        if(myColor < 5) return 
        
        setColor(myColor-5)
      }}></Button>
</View>
}

const styles = StyleSheet.create({})

export default ColorButton