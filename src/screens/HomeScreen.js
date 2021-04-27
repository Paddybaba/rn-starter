import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";

const HomeScreen = (props) => {
    return <View>
             <Text style={styles.text}>React Native</Text>
             <Button 
               title = "Open Component Page"
               onPress = {()=>{props.navigation.navigate("Component")}}
             />
              <Button 
               title = "Open List"
               onPress = {()=>{props.navigation.navigate("List")}}
             />
             <Button 
               title = "Open ImageScren"
               onPress = {()=>{props.navigation.navigate("ImageScreen")}}
             />
              <Button 
               title = "Open ColourScreen"
               onPress = {()=>{props.navigation.navigate("ColourScreen")}}
             />
             <Button 
               title = "Open ColorBox"
               onPress = {()=>{props.navigation.navigate("ColorBox")}}
             />
            
          </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30  
  }
});

export default HomeScreen;
