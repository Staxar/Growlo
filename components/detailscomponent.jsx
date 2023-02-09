import { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import { DATA } from '../assets/DATA';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function DetailScreenComponent({ id }) {
  const [productid, setProductId] = useState();
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [someregion, setRegionsomeregion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setProductId(Number(id));
  }, [id]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegionsomeregion({
        ...someregion,
        x: location.coords.latitude,
        y: location.coords.longitude,
      });
    })();
  }, []);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(someregion);
  }

  return (
    <ScrollView style={{ height: '100%', width: '100%' }}>
      {DATA.filter((product) => product.id == productid).map((item) => {
        return (
          <View key={item.id}>
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
            <View style={{ padding: 10, height: 250 }}>
              <Text>Localization</Text>
              <MapView style={{ width: '100%', height: '100%' }}>
                <Marker coordinate={{ latitude: someregion.x, longitude: someregion.y }} />
              </MapView>
            </View>
            <View style={{ padding: 10, height: 25 }}>
              <Text>Something</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
