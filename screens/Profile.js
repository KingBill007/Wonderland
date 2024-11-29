import React from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity 
        } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Wwidth = Dimensions.get('window').width;

const Profile = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Image source={require('../assets/user.png')}
                    style={styles.user}
                />
                <TouchableOpacity style={styles.details}>
                    <Text> User Name</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.details}>
                    <Text> Email </Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.details}>
                    <Text> Edit Password </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lSection}>
                
                <TouchableOpacity style={styles.lTopics}>
                        <AntDesign name="setting" size={24} color="black" />
                        <Text style={{marginLeft:7}}> Settings </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.lTopics}>
                        <AntDesign name="info" size={24} color="black" />
                        <Text style={{marginLeft:7}}> About Us </Text>
                </TouchableOpacity>
                

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
        width: Wwidth - 40,
        alignSelf: 'center',
    },
    title:{
        alignItems: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    user:{
        width: 80,
        height: 80,
        borderRadius: 40,
        marginVertical: 10,
    },
    details:{
        backgroundColor: '#d4d6d9',
        height: 40,
        minWidth: '45%',
        maxWidth: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginVertical: 5,
    },
    lSection:{
        //backgroundColor: 'green',
        width:'98%',
        alignSelf: 'center',
        marginTop: 10,
    },
    lTopics:{
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        backgroundColor: '#e3e4e6',
        paddingLeft: 9,
        marginVertical: 5,
    }
})

export default Profile;