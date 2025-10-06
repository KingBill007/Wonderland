import React from "react";
import { 
    View, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity 
} from 'react-native';


const Wwidth = Dimensions.get('window').width;

const Firstaid = ({navigation}) =>{

    const navToIns = () => {
        navigation.navigate('Instructions' , {name:'CPR'} );
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.hText}>First Aid Topics</Text>
            </View>
            <View style={styles.listContainer}>
                <TouchableOpacity onPress={navToIns} style={styles.topic}>
                    <Image source={require('../assets/topicsImg/allergy.png')} 
                        style={styles.topicImg}
                        resizeMode="contain"
                    />
                    <Text style={styles.topicText}>CPR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topic}>
                    <Image source={require('../assets/topicsImg/allergy.png')} 
                        style={styles.topicImg}
                        resizeMode="contain"
                    />
                    <Text style={styles.topicText}>Allergic Reaction</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topic}>
                    <Image source={require('../assets/topicsImg/allergy.png')} 
                        style={styles.topicImg}
                        resizeMode="contain"
                    />
                    <Text style={styles.topicText}>Allergic Reaction</Text>
                </TouchableOpacity>
            </View>
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
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    topic:{
        width: '48%',
        height: 45,
        marginTop: 8,
        //backgroundColor: 'blue',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        //marginHorizontal: 3,
    },
    topicImg:{
        width: '25%',
        height: '70%',
    },
    topicText:{
    }
})

export default Firstaid;