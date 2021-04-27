import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import ImageDetails from '../components/ImageDetails'

const ImageScreen = () =>{

    return (
        <View>
            <Text style = {styles.h1}>Image Screen</Text>
            <ImageDetails imageName="Forest" path={require('../../assets/forest.jpg')} score="2"/>
            <ImageDetails imageName="Beach"  path={require('../../assets/beach.jpg')} score="5"/>
            <ImageDetails imageName="Mountain" path ={require('../../assets/mountain.jpg')} score="6"/>
            <ImageDetails imageName="Ice" path = {require('../../assets/iceberg.jpg')} score="10"/>
            <ImageDetails imageName="Forest" path={require('../../assets/forest.jpg')} score="2"/>
        </View>
    ) 
}

const styles = StyleSheet.create({
    h1 : {
        fontSize : 50
    },
    h2 :{
        fontSize : 30
    }
})

export default ImageScreen;