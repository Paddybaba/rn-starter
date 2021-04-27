import React from 'react'
import { useReducer } from 'react'
import {Text, View, StyleSheet, Button, FlatList} from 'react-native'
import ColorButton from '../../src/components/ColorButton'

const CHANGE = 10;
const reducer = (state, action) => {
    //action = {color : red, green. blue , CHANGE + 10 or -10}
    switch (action.color){
        case 'red' :
            return  state.red + action.CHANGE >255 || state.red +action.CHANGE <0
            ? state
            : {...state, red : state.red + action.CHANGE}           
        case 'green' :
            return state.green + action.CHANGE >255 || state.green +action.CHANGE <0
            ? state
            : {...state, green : state.green+ action.CHANGE}
        case 'blue' :
            return state.blue + action.CHANGE >255 || state.blue +action.CHANGE <0
            ? state
            : {...state, blue : state.blue + action.CHANGE}

        default : return state            
    }
}

const ColorBox = () => {

const [state, dispatch] = useReducer(reducer, {red : 0, green:0, blue: 0})
const {red, green, blue} = state ;

return <View>
    <ColorButton 
        color="Red" 
        onIncrease={()=>{dispatch({color : 'red', CHANGE : 10})}} 
        onDecrease={()=>{dispatch({color : 'red', CHANGE : -10})}}/>
    <ColorButton 
        color="Green" 
        onIncrease={()=>{dispatch({color : 'green', CHANGE : 10})}} 
        onDecrease={()=>{dispatch({color : 'green', CHANGE : -10})}}/>
    <ColorButton 
        color="Blue" 
        onIncrease={()=>{dispatch({color : 'blue', CHANGE : 10})}} 
        onDecrease={()=>{dispatch({color : 'blue', CHANGE : -10})}}/>
    <Text>{`"rgb(${red},${green},${blue})"`}</Text>
    <View style={{height:400, width:400, backgroundColor: `"rgb(${red},${green},${blue})"`}}></View>
    
    
    </View>
}

const styles = StyleSheet.create({})

export default ColorBox