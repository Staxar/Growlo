import { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { DATA } from '../assets/DATA';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function DetailScreenComponent({ id }) {
  const [productid, setProductId] = useState();
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState(null);
  const [userRegion, setUserRegion] = useState({ x: 0, y: 0 });
  const [productregion, setProductRegion] = useState({ x: 0, y: 0 });
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
      setUserRegion({
        ...userRegion,
        x: location.coords.latitude,
        y: location.coords.longitude,
      });
      setProductRegion({
        ...productregion,
        x: location.coords.latitude + 500,
        y: location.coords.longitude + 500,
      });
    })();
  }, []);
  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    console.log(userRegion);
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
              <Text style={{ marginVertical: 10 }} variant="bodyMedium">
                {item.title}
              </Text>
              <Text style={{ marginVertical: 10 }} variant="titleMedium">
                Description
              </Text>
              <Text variant="bodySmall">{item.decription}</Text>
            </View>
            <View style={{ padding: 10, height: 250 }}>
              <Text variant="titleMedium">Localization</Text>
              <MapView style={{ width: '100%', height: '100%' }}>
                <Marker coordinate={{ latitude: userRegion.x, longitude: userRegion.y }} />
                <Marker coordinate={{ latitude: productregion.x, longitude: productregion.y }} />
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
