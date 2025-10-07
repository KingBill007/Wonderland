import React from "react";
import { 
    View, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity 
} from 'react-native';
import { topics } from "../assets/data/topics";
import { topicsicons } from "../assets/data/topics";
import { ScrollView } from "react-native-gesture-handler";


const Wwidth = Dimensions.get('window').width;

const Firstaid = ({navigation}) =>{

    const navToIns = (item) => {
        console.log(item)
        navigation.navigate('Instructions' , {name: item} );
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.hText}>First Aid Topics</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.listContainer}>
                    {
                        topics.map((item, index) => (
                        <TouchableOpacity key={index} onPress={()=>{navToIns(item)}} style={styles.topic}>
                            <Image source={topicsicons[index]} 
                                style={styles.topicImg}
                                resizeMode="contain"
                            />
                            <Text style={styles.topicText}>{item}</Text>
                        </TouchableOpacity>
                        ))
                    } 
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
    },
    header:{
        backgroundColor: 'red',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    hText:{
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: "bold",
    },
    listContainer:{
        //backgroundColor: 'green',
        alignSelf: 'center',
        width: Wwidth-50,
        paddingTop: 10,
        paddingBottom: 80,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    topic:{
        width: '48%',
        minHeight: 45,
        marginVertical: 10,
        //backgroundColor: 'blue',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        overflow: 'hidden',
        //flexWrap: 'wrap',
        //marginHorizontal: 3,
    },
    topicImg:{
        width: '25%',
        height: '70%',
    },
    topicText:{
        flexShrink: 1,      
        //flexWrap: 'wrap',
    }
})

export default Firstaid;