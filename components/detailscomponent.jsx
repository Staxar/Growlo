import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import { DATA } from '../assets/DATA';

export default function DetailScreenComponent({ id }) {
  const [product, setProduct] = useState([]);
  console.log(id);
  useEffect(() => {
    setProduct(DATA[id - 1]);
  }, []);
  console.log(id);
  return (
    <View>
      <View>
        <Image source={product.img} style={{ width: '100%', height: 200 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Avatar.Image size={64} source={require('../assets/avatar.png')} />
        <Text style={{ marginHorizontal: 10 }}>{product.author}</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ marginVertical: 10 }}>{product.title}</Text>
        <Text style={{ marginVertical: 10 }}>Description</Text>
        <Text>{product.decription}</Text>
      </View>
      <View></View>
    </View>
  );
}
