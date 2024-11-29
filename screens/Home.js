import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//navigator
const Tab = createBottomTabNavigator()

//components
import Toolsview from "../components/Toolsview";

const Home = () =>{
    return(
        <View style={styles.body}>
            <ScrollView showsHorizontalScrollIndicator={false} >
            <Image 
            source={require("../assets/logo3.png")} 
            resizeMode="contain" 
            style={styles.header} />
            
                <View style={styles.toolsContainer}>
                        <Toolsview name="Accidents and Emergencies" image={require('../assets/biker.png')}/>
                        <Toolsview name="Kits" image={require('../assets/kit.png')}/> 
                        <Toolsview name="Learn" image={require('../assets/learn.png')}/>      
                </View>
            </ScrollView> 
        </View>
        
    )
}
export default Home;

const styles = StyleSheet.create({
    body:{
        marginTop: StatusBar.currentHeight,
        alignItems: 'center',
    },
    header:{
        width:"100%",
        height: 120,
    },
    toolsContainer:{
        marginTop:10,
        gap: 10,
        paddingBottom: 10,
    },
})