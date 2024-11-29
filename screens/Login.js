import React from "react";
import 
{ View, Text, ScrollView, Image, StyleSheet, StatusBar, 
  Keyboard , TouchableWithoutFeedback, TouchableOpacity,KeyboardAvoidingView 
} from "react-native";
//components
import Tinput from "../components/Tinput";


const Login = () =>{
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.body}>
            <Image source={require("../assets/logoCrop.png")} style={styles.logo} resizeMode="contain" />
          <Image
            source={require("../assets/firstAidImg.png")}
            style={styles.img}
          />

          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.formView}
          >
            <ScrollView>
              <Text style={styles.h1}> Log In </Text>
              <View style={{ alignItems: "center" }}>
                <Tinput name="Gmail" />
                <Tinput name="Password" />

                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text style={{ fontSize: 22, color: "white" }}>
                      Log In
                    </Text>
                  </View>
                </TouchableOpacity>

                <Text style={{fontSize:15,marginTop:20}}>Dont have an account?   </Text>
                <TouchableOpacity>
                  <Text style={styles.login}>Sign up</Text>
                </TouchableOpacity>

              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
}
export default Login;

const styles = StyleSheet.create({
    body:{
        marginTop:StatusBar.currentHeight,
    },
    logo:{
        width: 80,
        height:70,
        position: 'absolute',
        marginTop: 10,
        marginLeft: "80%",
        zIndex: 1,
    }, 
    img:{
        width: '100%',
        height: 300,
    },
    formView:{
        backgroundColor: '#fefefe',
        height:1000,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop:-45,
        paddingTop: 20,
    },
    h1:{
        marginTop: 25,
        marginLeft: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#484848'
    },
    button:{
        width:357,
        height:66,
        marginTop: 30,
        backgroundColor:"#599CFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
    },
    login:{
        fontSize:20,
        fontWeight:"bold",
        color: '#A61414'
    }
})