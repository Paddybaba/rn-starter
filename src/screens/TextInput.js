import React from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'
import { useState } from 'react/cjs/react.development'

const TextInputDemo = () => {
    const [text, setText] = useState("")
return <View>
    <Text>Enter password :</Text>
    <TextInput 
        style = {styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value = {text}
        onChangeText = {(value)=> setText(value)}
    />
    {text.length < 6 ? <Text>Password should be more than 5 letters</Text> : null}
</View>
}

const styles = StyleSheet.create({
    input : {
        margin :10,
        borderColor : "black",
        borderWidth : 2,
        borderRadius: 5
    }
})

export default TextInputDemo