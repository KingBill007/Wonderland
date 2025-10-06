import React, {useEffect, useState} from "react";
import { 
    View, Text, StyleSheet, StatusBar, Image, Modal, ScrollView, Button, 
    TouchableOpacity, TouchableWithoutFeedback, FlatList,    
} from "react-native";
import { images } from "../assets/data/kitsimage";

const data = require('../assets/data/kitsdata.json');

const Kit = () =>{

    const [modalState, setmodalState] = useState(false);
    const [kitName,setkitName] = useState('');
    const [kitInfo, setkitInfo] = useState('');
    const [kitIndex, setkitIndex] = useState('');

    const showModal = (name,index,info) =>{
        setkitName(name)
        setkitInfo(info)
        setkitIndex(index)
        setmodalState(true)
    }

    return(
        <View style={styles.container}>
            <View style={styles.kitsView}>
            <FlatList 
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={data}
                renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity style={styles.kitsBox} onPress={()=>{showModal(item.name,index,item.info)}} key={index}>
                            <Image source={images[index]} style={styles.kitsImg} />
                            <Text style={styles.kitsText}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            </View>

            <Modal animationType="fade" transparent visible={modalState}>
                <TouchableWithoutFeedback onPress={()=>{setmodalState(false)}}>
                <View style={styles.modalBg}>
                    <View style={styles.modalContainer}>
                        <Image 
                        source={images[kitIndex]} 
                        style={styles.modalImg}
                        resizeMode="contain"
                        />
                        <Text 
                        style={{
                            fontWeight: 'bold',
                            fontSize: 17,
                            marginVertical: 6,
                        }}>{kitName}</Text>
                        <Text 
                        style={{
                            marginBottom: 15,
                            textAlign: 'center'
                        }}>  
                            {kitInfo} 
                        </Text>
                        <Button title="Order Now" onPress={()=>{setmodalState(false)}} />
                    </View>   
                </View>
                </TouchableWithoutFeedback>
            </Modal>                   
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop: StatusBar.currentHeight,
        flex: 1,
    },
    kitsView:{
        //backgroundColor: 'green',
        //height: '100%',
        alignSelf: 'center',
        width: '95%',
        padding: 10,
        //paddingBottom: 30,
        flex: 1,
        //flexDirection: 'row',
        //flexWrap: 'wrap',
        //justifyContent: 'space-between'
    },
    kitsBox:{
        //backgroundColor: 'blue',
        width: 158,
        height: 155,
        borderRadius: 20,
        //borderWidth:1,
        //borderColor: '#a9aaab',
        justifyContent: 'flex-end',
        marginTop: 20,
        marginHorizontal: 17,
        overflow: 'hidden',
    },
    kitsText:{
        //zIndex: 1,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        position: 'absolute',
        backgroundColor: '#fefefe',
        textAlign: 'center',
    },
    kitsImg:{
        width:'100%',
        height: '100%',
    },
    modalBg:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer:{
        width: '90%',
        minHeight: '50%',
        maxHeight: '60%',
        backgroundColor: '#fefefe',
        borderRadius: 15,
        alignItems: 'center',
        padding: 10,
    },
    modalImg:{
        width: '63%',
        height: '43%',
        borderRadius: 10,
    }
})

export default Kit;