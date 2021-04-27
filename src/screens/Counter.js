import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'
import { useReducer } from 'react/cjs/react.development'

const reducer = (state,action) =>{
    //state = number
    //action = type " change_num  payload : 1, -1"
    return {...state, num : state.num + action.payload}
}
const Counter = () => {

    const [state, dispatch] = useReducer(reducer, {num : 0})
return <View>
    <Button title = "Increase" onPress={()=>dispatch({type: "change_num", payload : 1})}></Button>
    <Button title = "Decrease" onPress={()=>dispatch({type: "change_num", payload : -1})}></Button>
    <Text style={styles.textStyle}>{state.num}</Text>
</View>
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 50
    }
})

export default Counter