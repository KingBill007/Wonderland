import { View, Text, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'

export default function Instructions() {
  return (
    <View>
      <Text>Instructions</Text>
      <Swiper
      showsButtons={true}
      loop={true}
      >
        <Image source={require('./../assets/kitsImg/whistle.png')} style={{width:70,height:70}} resizeMode="contain" />
        <Image source={require('./../assets/kitsImg/whistle.png')} style={{width:70,height:70}} resizeMode="contain" />
        <Image source={require('./../assets/kitsImg/whistle.png')} style={{width:70,height:70}} resizeMode="contain" />
      </Swiper>
    </View>
  )
}