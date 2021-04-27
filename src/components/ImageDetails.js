import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'

const ImageDetails = ({imageName, path, score}) => {
    console.log(path)
return (
    <View>
        <Image source={path}/>
        <Text>{imageName}</Text>
        <Text>Score = {score}</Text>
    </View>
)
}

const styles = StyleSheet.create({})

export default ImageDetails