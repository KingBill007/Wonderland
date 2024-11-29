import React from "react";
import { View, Text, StyleSheet, Image,Dimensions, TouchableOpacity } from "react-native";

const Wwidth = Dimensions.get('window').width;
const imgW = Wwidth-15;

const Toolsview = (props) => {
  return (
    <View style={styles.toolsview}>
      <Image
        source={props.image}
        style={{ width: imgW, height: 210 }}
      />
      <TouchableOpacity>
      <View style={styles.toolsbtn}>
        <Text style={{ color: "white" }}>{props.name}</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};
export default Toolsview;

const styles = StyleSheet.create({
    toolsview:{
        width: imgW,
        backgroundColor: "green",
    },
    toolsbtn:{
        height: 56,
        backgroundColor: '#F04531',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
