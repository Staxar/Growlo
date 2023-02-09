import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import { DATA } from '../assets/DATA';

export default function DetailScreenComponent({ id }) {
  const [productid, setProductId] = useState();
  useEffect(() => {
    setProductId(Number(id));
  }, [id]);
  return (
    <>
      {DATA.filter((product) => product.id == productid).map((item) => {
        console.log(item);
        return (
          <View>
            <View>
              <Image source={item.img} style={{ width: '100%', height: 200 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
              <Avatar.Image size={64} source={require('../assets/avatar.png')} />
              <Text style={{ marginHorizontal: 10 }}>{item.author}</Text>
            </View>
            <View style={{ padding: 10 }}>
              <Text style={{ marginVertical: 10 }}>{item.title}</Text>
              <Text style={{ marginVertical: 10 }}>Description</Text>
              <Text>{item.decription}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
}
