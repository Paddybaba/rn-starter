import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const ColorButton = ({color, onIncrease, onDecrease}) => {
return <View>
    <Text>{color}</Text>
    <Button title={`Increase ${color}`} onPress={()=>onIncrease() }></Button>
    <Button title={`Decrease ${color}`} onPress={()=>onDecrease() }></Button>
</View>
}

const styles = StyleSheet.create({})

export default ColorButton