import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
import { images } from "../assets/data/sliderimage";

const data = require('../assets/data/sliderdata');

const Wwidth = Dimensions.get('window').width
const Hheight = Dimensions.get('window').height

export default function Instructions({route}) {
  const { name } = route.params;
  const sliderdata = data.name
  console.log('name: '+name);
  console.log(data[name]);
  //console.log(data.map(item => item[name]));
  return (
    <View style={{ flex: 1 }}>
      <Swiper showsButtons loop={false}>
        {data[name].map((item, index) => (
          <View key={index} style={styles.slideContent}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              {item.title}
            </Text>
            <View style={styles.slide}>
              <Image
                source={images[item.imageNum]}
                style={{ width: 0.9 * Wwidth, height: 0.5 * Hheight }}
                resizeMode="contain"
              />
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  slide:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    //backgroundColor:'white'
  },
  slideContent:{
    flex:1,
    //backgroundColor:'lightgrey'
  }
})