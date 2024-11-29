import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Tinput = (props) =>{
    return(
        <View>
            <TextInput style={styles.input} placeholder={props.name} />
        </View>
    )
}
export default Tinput;

const styles = StyleSheet.create({
    input:{
        width: 380,
        height:73,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 15,
        fontSize: 20,
        backgroundColor: "#EAEAEA",
        marginTop:18
    }
})